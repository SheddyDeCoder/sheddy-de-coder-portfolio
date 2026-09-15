"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrpbzgky";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return; // prevent duplicate submissions

    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="mx-auto max-w-xl px-6 py-10 text-center">
        <h2 className="font-display text-lg font-semibold text-text-primary">
          Message sent.
        </h2>
        <p className="mt-2 font-body text-sm text-text-secondary">
          Thanks for reaching out — I read every message and will get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="font-body text-sm text-text-secondary">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-border bg-surface/40 px-3 py-2 font-body text-sm text-text-primary"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="font-body text-sm text-text-secondary">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-border bg-surface/40 px-3 py-2 font-body text-sm text-text-primary"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="font-body text-sm text-text-secondary">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            className="mt-1 w-full rounded-md border border-border bg-surface/40 px-3 py-2 font-body text-sm text-text-primary"
          />
        </div>

        {status === "error" && (
          <p className="font-body text-xs text-red-500">
            Something went wrong sending your message — please try again, or reach out on social in the meantime.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full border border-primary bg-primary px-6 py-3 font-body text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}