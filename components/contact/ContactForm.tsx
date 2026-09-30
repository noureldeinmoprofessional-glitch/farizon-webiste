"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TextField, TextArea } from "@/components/forms/fields";
import { Icon } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";

type Phase = "form" | "submitting" | "success" | "error";

const initial = { fullName: "", email: "", phone: "", company: "", message: "" };
type Values = typeof initial;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Placeholder submission. No backend/email integration exists yet, so this does
 * NOT send anything — it only resolves after a short delay to drive the UI.
 * To connect a real endpoint later, replace the body with a fetch/POST and let
 * it throw on failure; the error state below already handles a rejection.
 */
async function submitContact(_values: Values): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1100));
}

export function ContactForm() {
  const [phase, setPhase] = React.useState<Phase>("form");
  const [values, setValues] = React.useState<Values>(initial);
  const [errors, setErrors] = React.useState<Partial<Record<keyof Values, string>>>({});

  const set = (k: keyof Values) => (v: string) => setValues((s) => ({ ...s, [k]: v }));

  const validate = () => {
    const next: Partial<Record<keyof Values, string>> = {};
    if (!values.fullName.trim()) next.fullName = "Full name is required";
    if (!values.email.trim()) next.email = "Email address is required";
    else if (!emailPattern.test(values.email.trim())) next.email = "Enter a valid email address";
    if (!values.message.trim()) next.message = "Please enter a message";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phase === "submitting") return; // prevent duplicate submissions
    if (!validate()) return;
    setPhase("submitting");
    try {
      await submitContact(values);
      setPhase("success");
    } catch {
      setPhase("error");
    }
  };

  if (phase === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.36 }}
        role="status"
        aria-live="polite"
        className="flex h-full flex-col justify-center rounded-lg border border-mist-200 bg-mist-50 p-10 text-center"
      >
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blue/10 text-blue">
          <Icon name="check" size={30} strokeWidth={2} />
        </div>
        <h3 className="mt-6 text-h4">Thank you for contacting us.</h3>
        <GradientLine className="mx-auto my-5" width={72} />
        <p className="mx-auto max-w-md text-[15px] leading-relaxed text-ink-soft">
          We&rsquo;ve received your message and our team will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      <h2 className="text-h3">Send us a message</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
        Fill out the form below and our team will get back to you.
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5">
        <TextField
          id="fullName"
          label="Full Name"
          value={values.fullName}
          onChange={set("fullName")}
          required
          error={errors.fullName}
          autoComplete="name"
        />
        <TextField
          id="email"
          label="Email Address"
          value={values.email}
          onChange={set("email")}
          required
          error={errors.email}
          type="email"
          inputMode="email"
          autoComplete="email"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="phone"
            label="Phone Number"
            value={values.phone}
            onChange={set("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
          />
          <TextField
            id="company"
            label="Company"
            value={values.company}
            onChange={set("company")}
            autoComplete="organization"
          />
        </div>
        <TextArea
          id="message"
          label="Message"
          value={values.message}
          onChange={set("message")}
          required
          error={errors.message}
          rows={5}
        />

        {phase === "error" && (
          <p role="alert" className="text-[13px] font-semibold text-orange">
            Something went wrong. Please try again.
          </p>
        )}

        <div className="mt-1">
          <button
            type="submit"
            disabled={phase === "submitting"}
            aria-busy={phase === "submitting"}
            className="btn btn-blue w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {phase === "submitting" ? (
              <>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                />
                Sending…
              </>
            ) : (
              <>
                Send Message <Icon name="arrow-right" size={18} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
