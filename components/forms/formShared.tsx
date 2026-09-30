"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";

export const COMPANY_ACTIVITIES = [
  "FMCG",
  "Pharmaceuticals",
  "Leasing",
  "Transportation",
  "Travel",
  "Retail",
  "Other",
];

export function req(value: string, message = "This field is required") {
  return value.trim() ? undefined : message;
}

export function validatePhone(value: string) {
  const v = value.trim();
  if (!v) return "Mobile number is required";
  // Egyptian mobile: 11 digits starting 01, optionally +20 country code.
  const digits = v.replace(/[\s()-]/g, "");
  if (!/^(\+?20)?0?1[0125]\d{8}$/.test(digits)) return "Enter a valid mobile number";
  return undefined;
}

/** Full-panel processing state shown briefly on submit (frontend demo only). */
export function Submitting() {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-20 text-center">
      <div className="relative h-14 w-14">
        <span className="absolute inset-0 rounded-full border-2 border-mist-200" />
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        />
      </div>
      <p className="mt-6 text-[15px] font-semibold text-starry">Submitting your request…</p>
    </div>
  );
}

export function SuccessState({
  title,
  message,
  onClose,
}: {
  title: string;
  message: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36 }}
      className="px-8 py-14 text-center sm:px-12"
    >
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blue/10 text-blue">
        <Icon name="check" size={30} strokeWidth={2} />
      </div>
      <h3 className="mt-6 text-h4">{title}</h3>
      <GradientLine className="mx-auto my-5" />
      <p className="mx-auto max-w-sm text-[15px] leading-relaxed text-ink-soft">{message}</p>
      <p className="mx-auto mt-6 max-w-sm text-[12px] text-ink-muted">
        Demo submission — this form is a frontend prototype and is not connected to a live system.
      </p>
      <button type="button" onClick={onClose} className="btn btn-primary mt-8">
        Done
      </button>
    </motion.div>
  );
}

/** Standard header block for the lead modals. */
export function ModalHeader({
  eyebrow,
  title,
  id,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  id: string;
  subtitle?: string;
}) {
  return (
    <div className="px-8 pt-10 sm:px-12">
      <span className="eyebrow text-blue">{eyebrow}</span>
      <h2 id={id} className="mt-4 text-h3">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">{subtitle}</p>}
    </div>
  );
}
