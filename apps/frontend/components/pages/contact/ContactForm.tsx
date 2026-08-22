"use client";

export function ContactForm() {
  return (
    <section className="mx-auto max-w-xl px-6 py-10">
      <form className="space-y-4" aria-disabled="true">
        <div>
          <label htmlFor="contact-name" className="font-body text-sm text-text-secondary">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            disabled
            className="mt-1 w-full rounded-md border border-border bg-surface/40 px-3 py-2 font-body text-sm text-text-primary disabled:cursor-not-allowed"
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
            disabled
            className="mt-1 w-full rounded-md border border-border bg-surface/40 px-3 py-2 font-body text-sm text-text-primary disabled:cursor-not-allowed"
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
            disabled
            className="mt-1 w-full rounded-md border border-border bg-surface/40 px-3 py-2 font-body text-sm text-text-primary disabled:cursor-not-allowed"
          />
        </div>
        <button
          type="submit"
          disabled
          className="w-full cursor-not-allowed rounded-full border border-border px-6 py-3 font-body text-sm text-text-secondary opacity-60"
        >
          Send Message
        </button>
        <p className="text-center font-body text-xs text-text-secondary">
          This form isn't connected to email delivery yet — use Book a Call below or reach out on social in the meantime.
        </p>
      </form>
    </section>
  );
}