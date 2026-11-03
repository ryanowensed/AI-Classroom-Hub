import assert from "node:assert/strict";
import test from "node:test";
import { subscribeToBeehiiv, validateSubscribe } from "../src/lib/subscribe.ts";

test("accepts a normal office-hours email", () => {
  const result = validateSubscribe({ email: " Teacher@School.edu ", source: "office-hours" });
  assert.equal(result.ok, true);
  if (result.ok && !result.honeypot) {
    assert.equal(result.email, "teacher@school.edu");
    assert.equal(result.source, "office-hours");
  }
});

test("rejects a bad email", () => {
  const result = validateSubscribe({ email: "not-an-email", source: "office-hours" });
  assert.equal(result.ok, false);
  if (!result.ok) assert.match(result.message, /valid email/i);
});

test("policy templates require a first name", () => {
  const result = validateSubscribe({ email: "a@school.edu", source: "policy-templates", firstName: "  " });
  assert.equal(result.ok, false);
});

test("honeypot short-circuits as success", () => {
  const result = validateSubscribe({ email: "a@school.edu", company: "spam co" });
  assert.deepEqual(result, { ok: true, honeypot: true });
});

test("unknown source is rejected", () => {
  const result = validateSubscribe({ email: "a@school.edu", source: "buy-now" });
  assert.equal(result.ok, false);
});

test("missing Beehiiv env returns a friendly error", async () => {
  const previousKey = process.env.BEEHIIV_API_KEY;
  const previousId = process.env.BEEHIIV_PUBLICATION_ID;
  delete process.env.BEEHIIV_API_KEY;
  delete process.env.BEEHIIV_PUBLICATION_ID;
  const result = await subscribeToBeehiiv({
    email: "teacher@school.edu",
    firstName: "Sam",
    source: "office-hours",
  });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.equal(result.status, 503);
    assert.match(result.message, /isn't set up yet/i);
  }
  if (previousKey) process.env.BEEHIIV_API_KEY = previousKey;
  if (previousId) process.env.BEEHIIV_PUBLICATION_ID = previousId;
});
