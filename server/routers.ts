import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

// Resend audience IDs
const RESEND_AUDIENCE_OFFICE_HOURS = "1152c5e0-2309-4dd1-a3b1-174ca0f9fda8";
const RESEND_AUDIENCE_GENERAL = "804dc86a-7cac-4b0c-8848-d7c4dd061f48";

async function addResendContact(email: string, firstName: string, audienceId: string): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[Resend] RESEND_API_KEY not configured");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        first_name: firstName || "",
        unsubscribed: false,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      // 422 usually means already subscribed — treat as success
      if (res.status === 422) {
        return { success: true };
      }
      console.error(`[Resend] Error ${res.status}: ${body}`);
      return { success: false, error: `Subscription failed (${res.status})` };
    }

    return { success: true };
  } catch (err) {
    console.error("[Resend] Network error:", err);
    return { success: false, error: "Network error — please try again" };
  }
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  newsletter: router({
    /**
     * Subscribe to Office Hours /AI newsletter (primary newsletter audience)
     */
    subscribeOfficeHours: publicProcedure
      .input(
        z.object({
          email: z.string().email("Please enter a valid email address"),
          firstName: z.string().optional().default(""),
        })
      )
      .mutation(async ({ input }) => {
        const result = await addResendContact(input.email, input.firstName, RESEND_AUDIENCE_OFFICE_HOURS);
        if (!result.success) {
          throw new Error(result.error ?? "Subscription failed");
        }
        return { success: true, message: "You're subscribed to Office Hours /AI!" };
      }),

    /**
     * Subscribe to general site updates audience
     */
    subscribeGeneral: publicProcedure
      .input(
        z.object({
          email: z.string().email("Please enter a valid email address"),
          firstName: z.string().optional().default(""),
        })
      )
      .mutation(async ({ input }) => {
        const result = await addResendContact(input.email, input.firstName, RESEND_AUDIENCE_GENERAL);
        if (!result.success) {
          throw new Error(result.error ?? "Subscription failed");
        }
        return { success: true, message: "You're subscribed!" };
      }),
  }),
});

export type AppRouter = typeof appRouter;
