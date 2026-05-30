"use client";

import { FormEvent, useState } from "react";

type NewsletterFormProps = {
  variant?: "default" | "compact" | "cta";
  className?: string;
};

export function NewsletterForm({
  variant = "default",
  className = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`animate-fadeIn rounded-sm border border-ink/10 bg-ink/[0.02] px-6 py-5 ${className}`}
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-xl font-bold uppercase tracking-wide text-ink">
          You&apos;re on the list.
        </p>
        <p className="mt-2 text-sm text-muted">
          Thanks for subscribing. Placeholder success state — no email was
          sent.
        </p>
      </div>
    );
  }

  const isCta = variant === "cta";
  const isCompact = variant === "compact";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-3 sm:flex-row sm:items-stretch ${className}`}
      noValidate
    >
      <label htmlFor={`newsletter-email-${variant}`} className="sr-only">
        Email address
      </label>
      <input
        id={`newsletter-email-${variant}`}
        type="email"
        name="email"
        autoComplete="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`min-w-0 flex-1 border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink ${
          isCta
            ? "border-white/30 text-white placeholder:text-white/50 focus:border-white"
            : "border-border"
        }`}
      />
      <button
        type="submit"
        className={`shrink-0 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${
          isCta
            ? "bg-white text-ink hover:bg-white/90"
            : "bg-accent text-white hover:bg-accent/90"
        } ${isCompact ? "sm:px-5" : ""}`}
      >
        Subscribe
      </button>
    </form>
  );
}
