"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function QuoteForm({ services }) {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    const form = formRef.current;
    if (!form) {
      return;
    }

    if (!form.reportValidity()) {
      setStatus({
        type: "error",
        message: "Please complete the required fields before sending.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm("service_6aj8aq2", TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });

      form.reset();
      setStatus({
        type: "success",
        message:
          "Your quote request has been sent. We will be in touch shortly.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "We could not send your request right now. Please try again or call 0452066583.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="quote"
      className="border-b border-white/8 py-[var(--section-space)]"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label text-[11px] font-semibold">Get A Quote</p>
          <h2 className="section-heading mt-4 text-white">
            Send the details once. Get a practical response without chasing.
          </h2>
          <div className="mt-10 space-y-4 text-sm text-[var(--color-copy)]">
            <div className="glass-panel rounded-[1.6rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/48">Phone</p>
              <a href="tel:0452066583" className="mt-3 block text-[1.25rem] font-semibold tracking-[-0.02em] text-white">
                0452066583
              </a>
            </div>
            <div className="glass-panel rounded-[1.6rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/48">Location</p>
              <p className="mt-3 text-[1.12rem] leading-8 font-semibold tracking-[-0.02em] text-white">
                3/356 Lower Dandenong Rd, Braeside VIC 3195, Australia
              </p>
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="glass-panel rounded-[2rem] p-6 sm:p-9"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              required
            />
            <Field
              id="phone"
              label="Phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
            <Field
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm text-white/80">
                Service
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full rounded-2xl border border-white/10 bg-black/24 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-white/22 focus:bg-black/28"
              >
                <option value="" disabled className="bg-[var(--color-surface)]">
                  Select a service
                </option>
                {services.map((service) => (
                  <option
                    key={service.title}
                    value={service.title}
                    className="bg-[var(--color-surface)]"
                  >
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <Field
              id="car_model"
              label="Car Model"
              name="car_model"
              autoComplete="off"
              required
            />
          </div>

          <div className="mt-5 space-y-2">
            <label htmlFor="message" className="text-sm text-white/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              placeholder="Tell us what your vehicle needs, any symptoms, and your preferred timing."
              className="w-full rounded-[1.5rem] border border-white/10 bg-black/24 px-4 py-3.5 text-sm leading-7 text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-white/22 focus:bg-black/28"
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[var(--color-accent-soft)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Request Quote"}
            </button>
            <p className="text-sm text-[var(--color-muted)]">
              Required fields are validated before submission.
            </p>
          </div>

          {status.message ? (
            <p
              className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-100"
                  : "border-amber-500/25 bg-amber-500/10 text-amber-100"
              }`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm text-white/78">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-black/24 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-white/22 focus:bg-black/28"
      />
    </div>
  );
}
