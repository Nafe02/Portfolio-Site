"use client";

import { FormEvent, useState } from "react";

type NewsletterFormProps = {
  variant?: "default" | "compact" | "cta";
  className?: string;
};

const API_URL =
  process.env.NEXT_PUBLIC_NEWSLETTER_API_URL ?? "/api/subscribe";

export function NewsletterForm({
  variant = "default",
  className = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || loading) return;

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const website = (
      form.elements.namedItem("website") as HTMLInputElement | null
    )?.value;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Unable to subscribe right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={`animate-fadeIn rounded-sm border border-ink/10 bg-ink/[0.02] px-6 py-5 ${className}`}
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-xl font-bold uppercase tracking-wide text-ink">
          You,re on the list.
        </p>
        <p className="mt-2 text-sm text-muted">
          Thanks for subscribing. You,ll hear from me soon.
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
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0"
        style={{ clip: "rect(0, 0, 0, 0)", clipPath: "inset(50%)" }}
      />
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
        disabled={loading}
        className={`shrink-0 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
          isCta
            ? "bg-white text-ink hover:bg-white/90"
            : "bg-accent text-white hover:bg-accent/90"
        } ${isCompact ? "sm:px-5" : ""}`}
      >
        {loading ? "Subscribing…" : "Subscribe"}
      </button>
      {error && (
        <p
          className={`text-sm sm:basis-full ${
            isCta ? "text-white/80" : "text-accent"
          }`}
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
