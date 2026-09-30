"use client";

import * as React from "react";
import { Modal } from "@/components/ui/Modal";
import { TextField, LockedField } from "./fields";
import { ModalHeader, req, validatePhone, Submitting, SuccessState } from "./formShared";

type Phase = "form" | "submitting" | "success";

const initial = { name: "", phone: "", email: "", company: "", date: "" };

export function TestDriveModal({
  open,
  onClose,
  model,
}: {
  open: boolean;
  onClose: () => void;
  model?: string;
}) {
  const [phase, setPhase] = React.useState<Phase>("form");
  const [values, setValues] = React.useState(initial);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const set = (k: keyof typeof initial) => (v: string) => setValues((s) => ({ ...s, [k]: v }));

  const reset = () => {
    setValues(initial);
    setErrors({});
    setPhase("form");
  };
  const handleClose = () => {
    onClose();
    window.setTimeout(reset, 300);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    next.name = req(values.name, "Name is required") ?? "";
    next.phone = validatePhone(values.phone) ?? "";
    const cleaned = Object.fromEntries(Object.entries(next).filter(([, v]) => v));
    setErrors(cleaned);
    if (Object.keys(cleaned).length > 0) return;
    setPhase("submitting");
    window.setTimeout(() => setPhase("success"), 1200);
  };

  return (
    <Modal open={open} onClose={handleClose} labelledBy="testdrive-title">
      {phase === "submitting" && <Submitting />}
      {phase === "success" && (
        <SuccessState
          title="Thank you"
          message="Thanks for filling the form — our representative will contact you the soonest."
          onClose={handleClose}
        />
      )}
      {phase === "form" && (
        <form onSubmit={submit} noValidate>
          <ModalHeader
            id="testdrive-title"
            eyebrow="Experience it"
            title={model ? `Book your ${model} test drive` : "Book a test drive"}
            subtitle="Fill in this form and our representative will contact you."
          />
          <div className="grid gap-5 px-8 pb-10 pt-8 sm:px-12">
            <LockedField label="Request type" value={model ? `Test drive · ${model}` : "Book a test drive"} />
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField id="td-name" label="Name" value={values.name} onChange={set("name")} required error={errors.name} autoComplete="name" />
              <TextField id="td-phone" label="Phone number" value={values.phone} onChange={set("phone")} required error={errors.phone} type="tel" inputMode="tel" placeholder="01x xxxx xxxx" autoComplete="tel" />
              <TextField id="td-email" label="Work email" value={values.email} onChange={set("email")} type="email" inputMode="email" autoComplete="email" />
              <TextField id="td-company" label="Company name" value={values.company} onChange={set("company")} />
            </div>
            <TextField id="td-date" label="Preferred date" value={values.date} onChange={set("date")} type="date" />
            <div className="mt-2 flex flex-col gap-3 sm:flex-row-reverse sm:items-center sm:justify-between">
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Book a test drive
              </button>
              <p className="text-[12px] text-ink-muted">
                Fields marked <span className="text-orange">*</span> are required.
              </p>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
}
