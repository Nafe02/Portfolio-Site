export type Subscriber = {
  email: string;
  subscribedAt: string;
};

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email) && email.length <= 254;
}

export function subscriberKey(email: string): string {
  return `subscriber:${normalizeEmail(email)}`;
}

export function jsonResponse(
  body: Record<string, unknown>,
  status = 200
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

export async function sendWelcomeEmail(
  email: string,
  env: { RESEND_API_KEY?: string; FROM_EMAIL?: string }
): Promise<void> {
  if (!env.RESEND_API_KEY || !env.FROM_EMAIL) return;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: email,
      subject: "You're on the list — Nafiu Gwandu",
      html: `<p>Thanks for subscribing. You'll hear from me with occasional notes on product, leadership, and building.</p>`,
    }),
  });

  if (!response.ok) {
    console.error("Resend API error:", response.status, await response.text());
  }
}
