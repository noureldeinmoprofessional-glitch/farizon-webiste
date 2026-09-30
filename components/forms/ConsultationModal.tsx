"use client";

import * as React from "react";
import { Modal } from "@/components/ui/Modal";
import { TextField, SelectField, LockedField } from "./fields";
import {
  COMPANY_ACTIVITIES,
  ModalHeader,
  req,
  validatePhone,
  Submitting,
  SuccessState,
} from "./formShared";

type Phase = "form" | "submitting" | "success";

const initial = {
  name: "",
  mobile: "",
  city: "",
  activity: "",
  activityOther: "",
  company: "",
  fleet: "",
};

export function ConsultationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [phase, setPhase] = React.useState<Phase>("form");
  const [values, setValues] = React.useState(initial);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const set = (k: keyof typeof initial) => (v: string) =>
    setValues((s) => ({ ...s, [k]: v }));

  const reset = () => {
    setValues(initial);
    setErrors({});
    setPhase("form");
  };

  const handleClose = () => {
    onClose();
    // Reset after the close transition so content doesn't flash.
    window.setTimeout(reset, 300);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    next.name = req(values.name, "Name is required") ?? "";
    next.mobile = validatePhone(values.mobile) ?? "";
    next.city = req(values.city, "City is required") ?? "";
    next.activity = req(values.activity, "Select your company activity") ?? "";
    if (values.activity === "Other")
      next.activityOther = req(values.activityOther, "Please specify your activity") ?? "";
    const cleaned = Object.fromEntries(Object.entries(next).filter(([, v]) => v));
    setErrors(cleaned);
    if (Object.keys(cleaned).length > 0) return;

    setPhase("submitting");
    window.setTimeout(() => setPhase("success"), 1200);
  };

  return (
    <Modal open={open} onClose={handleClose} labelledBy="consultation-title">
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
            id="consultation-title"
            eyebrow="Let's talk"
            title="Ask for a consultation"
            subtitle="Tell us about your operation and a Farizon Egypt representative will get in touch."
          />
          <div className="grid gap-5 px-8 pb-10 pt-8 sm:px-12">
            <LockedField label="Request type" value="Asking for a consultation" />
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField id="name" label="Name" value={values.name} onChange={set("name")} required error={errors.name} autoComplete="name" />
              <TextField id="mobile" label="Mobile number" value={values.mobile} onChange={set("mobile")} required error={errors.mobile} type="tel" inputMode="tel" placeholder="01x xxxx xxxx" autoComplete="tel" />
              <TextField id="city" label="City" value={values.city} onChange={set("city")} required error={errors.city} autoComplete="address-level2" />
              <SelectField id="activity" label="Company activity" value={values.activity} onChange={set("activity")} options={COMPANY_ACTIVITIES} required error={errors.activity} />
            </div>
            {values.activity === "Other" && (
              <TextField id="activityOther" label="Please specify your activity" value={values.activityOther} onChange={set("activityOther")} required error={errors.activityOther} />
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField id="company" label="Company name" value={values.company} onChange={set("company")} />
              <TextField id="fleet" label="Fleet size" value={values.fleet} onChange={set("fleet")} inputMode="numeric" />
            </div>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row-reverse sm:items-center sm:justify-between">
              <button type="submit" className="btn btn-blue w-full sm:w-auto">
                Submit request
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
