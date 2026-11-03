export const SOURCES = ["office-hours", "general", "policy-templates"] as const;
export type SubscribeSource = (typeof SOURCES)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SubscribePayload = {
  email?: unknown;
  firstName?: unknown;
  source?: unknown;
  company?: unknown;
};

export type ValidSubscribe =
  | { ok: true; honeypot: true }
  | { ok: true; honeypot: false; email: string; firstName: string; source: SubscribeSource }
  | { ok: false; message: string };

export function validateSubscribe(input: SubscribePayload): ValidSubscribe {
  const company = String(input.company ?? "").trim();
  if (company) return { ok: true, honeypot: true };

  const email = String(input.email ?? "").trim().toLowerCase();
  const firstName = String(input.firstName ?? "").trim().replace(/\s+/g, " ");
  const sourceRaw = String(input.source ?? "office-hours").trim();
  const source = (SOURCES as readonly string[]).includes(sourceRaw)
    ? (sourceRaw as SubscribeSource)
    : null;

  if (!source) return { ok: false, message: "That form isn't set up right. Refresh and try again." };
  if (firstName.length > 80) return { ok: false, message: "That name is too long." };
  if (source === "policy-templates" && !firstName) {
    return { ok: false, message: "Please enter your first name." };
  }
  if (!email) return { ok: false, message: "Please enter your email address." };
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  return { ok: true, honeypot: false, email, firstName, source };
}

export type SubscribeResult =
  | { ok: true; message: string }
  | { ok: false; status: number; message: string };

function envValue(name: string): string | undefined {
  const value = process.env[name];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export async function subscribeToBeehiiv(args: {
  email: string;
  firstName: string;
  source: SubscribeSource;
}): Promise<SubscribeResult> {
  const apiKey = envValue("BEEHIIV_API_KEY");
  const publicationId = envValue("BEEHIIV_PUBLICATION_ID");
  if (!apiKey || !publicationId) {
    return {
      ok: false,
      status: 503,
      message: "Signup isn't set up yet. Try again soon.",
    };
  }

  const endpoint = `https://api.beehiiv.com/v2/publications/${encodeURIComponent(publicationId)}/subscriptions`;
  const base = {
    email: args.email,
    reactivate_existing: true,
    send_welcome_email: true,
    utm_source: "theaiclassroomhub.com",
    utm_medium: "website",
    utm_campaign: args.source,
  };

  const attempts: Record<string, unknown>[] = [];
  if (args.firstName) {
    attempts.push({
      ...base,
      custom_fields: [{ name: "First Name", value: args.firstName }],
    });
  }
  attempts.push(base);

  let lastStatus = 502;
  for (let i = 0; i < attempts.length; i++) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attempts[i]),
    });

    if (res.ok || res.status === 409) {
      return { ok: true, message: "You're subscribed! Check your inbox." };
    }

    const detail = await res.text().catch(() => "");
    lastStatus = res.status;
    if (/already/i.test(detail)) {
      return { ok: true, message: "You're subscribed! Check your inbox." };
    }

    const retryWithoutCustomField = Boolean(args.firstName) && i === 0 && res.status >= 400 && res.status < 500;
    if (retryWithoutCustomField) continue;

    console.error("[beehiiv] subscribe failed", res.status, detail.slice(0, 400));
    break;
  }

  return {
    ok: false,
    status: lastStatus >= 400 && lastStatus < 600 ? lastStatus : 502,
    message: "Something went wrong. Try again in a minute.",
  };
}
