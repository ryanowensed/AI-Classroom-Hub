import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock fetch globally
const mockFetch = vi.fn();

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("newsletter.subscribeOfficeHours", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetch);
    process.env.RESEND_API_KEY = "re_test_key";
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it("returns success when Resend API returns 200", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      text: async () => JSON.stringify({ id: "contact_123" }),
    });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.newsletter.subscribeOfficeHours({
      email: "teacher@school.edu",
      firstName: "Jane",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Office Hours /AI");
  });

  it("treats 422 (already subscribed) as success", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 422,
      text: async () => "already subscribed",
    });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.newsletter.subscribeOfficeHours({
      email: "existing@school.edu",
      firstName: "Bob",
    });

    expect(result.success).toBe(true);
  });

  it("throws on invalid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    await expect(
      caller.newsletter.subscribeOfficeHours({ email: "not-an-email", firstName: "" })
    ).rejects.toThrow();
  });

  it("throws when Resend returns a non-422 error", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      text: async () => "internal server error",
    });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    await expect(
      caller.newsletter.subscribeOfficeHours({ email: "teacher@school.edu", firstName: "" })
    ).rejects.toThrow();
  });
});

describe("newsletter.subscribeGeneral", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetch);
    process.env.RESEND_API_KEY = "re_test_key";
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it("returns success when Resend API returns 200", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      text: async () => JSON.stringify({ id: "contact_456" }),
    });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.newsletter.subscribeGeneral({
      email: "admin@district.edu",
      firstName: "Dr. Smith",
    });

    expect(result.success).toBe(true);
  });
});

describe("newsletter.subscribePolicyTemplates", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetch);
    process.env.RESEND_API_KEY = "re_test_key";
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it("returns success and targets the Policy Templates audience", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      text: async () => JSON.stringify({ id: "contact_789" }),
    });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.newsletter.subscribePolicyTemplates({
      email: "principal@school.edu",
      firstName: "Maria",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("unlocked");
    // Verify the correct Policy Templates audience ID was used in the fetch call
    const fetchCall = mockFetch.mock.calls[0];
    expect(fetchCall[0]).toContain("9c361cc8-4134-4fe8-b511-11b03b47ae6a");
  });

  it("throws when firstName is empty", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    await expect(
      caller.newsletter.subscribePolicyTemplates({ email: "test@school.edu", firstName: "" })
    ).rejects.toThrow();
  });
});
