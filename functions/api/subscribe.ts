import {
  isValidEmail,
  jsonResponse,
  normalizeEmail,
  sendWelcomeEmail,
  subscriberKey,
  type Subscriber,
} from "../_lib/newsletter";

type Env = {
  NEWSLETTER_SUBSCRIBERS: KVNamespace;
  RESEND_API_KEY?: string;
  FROM_EMAIL?: string;
};

type SubscribePayload = {
  email?: string;
  website?: string;
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let payload: SubscribePayload;
  try {
    payload = (await request.json()) as SubscribePayload;
  } catch {
    return jsonResponse({ ok: false, error: "Invalid request body." }, 400);
  }

  if (payload.website) {
    return jsonResponse({ ok: true });
  }

  const email = normalizeEmail(payload.email ?? "");
  if (!email || !isValidEmail(email)) {
    return jsonResponse({ ok: false, error: "Please enter a valid email." }, 400);
  }

  const key = subscriberKey(email);
  const existing = await env.NEWSLETTER_SUBSCRIBERS.get(key);
  if (existing) {
    return jsonResponse({ ok: true, message: "Already subscribed." });
  }

  const subscriber: Subscriber = {
    email,
    subscribedAt: new Date().toISOString(),
  };

  await env.NEWSLETTER_SUBSCRIBERS.put(key, JSON.stringify(subscriber));

  context.waitUntil(sendWelcomeEmail(email, env));

  return jsonResponse({ ok: true });
};
