import type { APIRoute } from "astro";
import { subscribeToBeehiiv, validateSubscribe } from "../../lib/subscribe.ts";

export const prerender = false;

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get("content-type") || "";
  let payload: Record<string, unknown> = {};

  try {
    if (contentType.includes("application/json")) {
      const parsed = await request.json();
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return json({ ok: false, message: "That form didn't come through. Try again." }, 400);
      }
      payload = parsed as Record<string, unknown>;
    } else {
      const form = await request.formData();
      payload = Object.fromEntries(form.entries());
    }
  } catch {
    return json({ ok: false, message: "That form didn't come through. Try again." }, 400);
  }

  const parsed = validateSubscribe(payload);
  if (!parsed.ok) return json({ ok: false, message: parsed.message }, 400);
  if (parsed.honeypot) {
    return json({ ok: true, message: "You're subscribed! Check your inbox." }, 200);
  }

  try {
    const result = await subscribeToBeehiiv(parsed);
    if (!result.ok) return json({ ok: false, message: result.message }, result.status);
    return json({ ok: true, message: result.message }, 200);
  } catch (err) {
    console.error("[subscribe] unexpected error", err);
    return json({ ok: false, message: "Something went wrong. Try again in a minute." }, 502);
  }
};

export const GET: APIRoute = () => json({ ok: false, message: "Use the signup form." }, 405);
