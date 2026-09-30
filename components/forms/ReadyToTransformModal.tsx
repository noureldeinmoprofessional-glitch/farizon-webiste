"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "@/components/ui/Modal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { TextField, SelectField, TextArea, LockedField } from "./fields";
import {
  COMPANY_ACTIVITIES,
  ModalHeader,
  req,
  validatePhone,
  Submitting,
  SuccessState,
} from "./formShared";

/**
 * Value-added service offers — each is grounded in the supplied website content
 * (vehicle/fleet quotes, charging units, depot site assessment, preventive
 * maintenance). No offers are invented beyond the source material.
 */
const OFFERS: { id: string; icon: IconName; title: string; body: string }[] = [
  {
    id: "fleet-quote",
    icon: "truck",
    title: "Vehicle & fleet quote",
    body: "From a single vehicle to a complete fleet, quoted for your operation.",
  },
  {
    id: "charging",
    icon: "bolt",
    title: "Charging units & installation",
    body: "Farizon value-added charging units supplied for your vehicles.",
  },
  {
    id: "site-assessment",
    icon: "route",
    title: "Depot site assessment",
    body: "On-site assessment with a detailed quotation for depot charging.",
  },
  {
    id: "maintenance",
    icon: "wrench",
    title: "Preventive maintenance",
    body: "Planned maintenance that monitors vehicle and battery health.",
  },
];

type Phase = "offer" | "form" | "submitting" | "success";

const initial = {
  name: "",
  city: "",
  mobile: "",
  activity: "",
  activityOther: "",
  company: "",
  fleet: "",
  comments: "",
  preferredTime: "",
};

export function ReadyToTransformModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [phase, setPhase] = React.useState<Phase>("offer");
  const [offer, setOffer] = React.useState<string | null>(null);
  const [values, setValues] = React.useState(initial);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const set = (k: keyof typeof initial) => (v: string) => setValues((s) => ({ ...s, [k]: v }));

  const reset = () => {
    setPhase("offer");
    setOffer(null);
    setValues(initial);
    setErrors({});
  };
  const handleClose = () => {
    onClose();
    window.setTimeout(reset, 300);
  };

  const chooseOffer = (id: string) => {
    setOffer(id);
    setPhase("form");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    next.name = req(values.name, "Name is required") ?? "";
    next.city = req(values.city, "City is required") ?? "";
    next.mobile = validatePhone(values.mobile) ?? "";
    next.activity = req(values.activity, "Select your company activity") ?? "";
    if (values.activity === "Other")
      next.activityOther = req(values.activityOther, "Please specify your activity") ?? "";
    const cleaned = Object.fromEntries(Object.entries(next).filter(([, v]) => v));
    setErrors(cleaned);
    if (Object.keys(cleaned).length > 0) return;
    setPhase("submitting");
    window.setTimeout(() => setPhase("success"), 1200);
  };

  const selectedOffer = OFFERS.find((o) => o.id === offer);

  return (
    <Modal open={open} onClose={handleClose} labelledBy="transform-title" size="lg">
      {phase === "submitting" && <Submitting />}
      {phase === "success" && (
        <SuccessState
          title="Thank you"
          message="Thanks for filling the form — our representative will contact you the soonest."
          onClose={handleClose}
        />
      )}

      {(phase === "offer" || phase === "form") && (
        <>
          <ModalHeader
            id="transform-title"
            eyebrow="Ready to transform"
            title={phase === "offer" ? "Choose what suits your business" : "Request your quote"}
            subtitle={
              phase === "offer"
                ? "Select the offer that best matches your operation. You can refine the details with our team."
                : undefined
            }
          />

          {/* Step indicator */}
          <div className="flex items-center gap-3 px-8 pt-6 text-[12px] font-semibold sm:px-12">
            <StepDot active index={1} label="Select offer" done={phase === "form"} />
            <span className="h-px w-8 bg-mist-200" />
            <StepDot active={phase === "form"} index={2} label="Your details" />
          </div>

          <AnimatePresence mode="wait">
            {phase === "offer" ? (
              <motion.div
                key="offer"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.28 }}
                className="grid gap-4 px-8 pb-10 pt-6 sm:grid-cols-2 sm:px-12"
              >
                {OFFERS.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => chooseOffer(o.id)}
                    className="group flex flex-col items-start rounded-md border border-[rgba(51,51,51,0.14)] p-6 text-left transition-all duration-base ease-standard hover:border-blue hover:shadow-s focus-visible:border-blue"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-sm bg-mist-50 text-starry transition-colors group-hover:bg-blue group-hover:text-white">
                      <Icon name={o.icon} size={24} />
                    </span>
                    <span className="mt-4 flex items-center gap-2 text-[16px] font-bold text-starry">
                      {o.title}
                    </span>
                    <span className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{o.body}</span>
                    <span className="link-arrow mt-4 text-blue">
                      Select <Icon name="arrow-right" size={16} />
                    </span>
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.28 }}
                onSubmit={submit}
                noValidate
                className="grid gap-5 px-8 pb-10 pt-6 sm:px-12"
              >
                <button
                  type="button"
                  onClick={() => setPhase("offer")}
                  className="flex items-center gap-2 text-[13px] font-semibold text-ink-muted transition-colors hover:text-blue"
                >
                  <span className="rotate-180">
                    <Icon name="arrow-right" size={16} />
                  </span>
                  Back to offers
                </button>

                <div className="grid gap-5 sm:grid-cols-2">
                  <LockedField label="Request type" value="Quote request" />
                  {selectedOffer && (
                    <div>
                      <span className="mb-2 block text-[13px] font-semibold text-ink">Selected offer</span>
                      <div className="flex h-[52px] items-center gap-3 rounded-sm border border-[rgba(51,51,51,0.18)] bg-white px-4">
                        <Icon name={selectedOffer.icon} size={20} className="text-blue" />
                        <span className="text-[15px] font-semibold text-starry">{selectedOffer.title}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField id="t-name" label="Name" value={values.name} onChange={set("name")} required error={errors.name} autoComplete="name" />
                  <TextField id="t-mobile" label="Mobile number" value={values.mobile} onChange={set("mobile")} required error={errors.mobile} type="tel" inputMode="tel" placeholder="01x xxxx xxxx" autoComplete="tel" />
                  <TextField id="t-city" label="City" value={values.city} onChange={set("city")} required error={errors.city} autoComplete="address-level2" />
                  <SelectField id="t-activity" label="Company activity" value={values.activity} onChange={set("activity")} options={COMPANY_ACTIVITIES} required error={errors.activity} />
                </div>
                {values.activity === "Other" && (
                  <TextField id="t-activityOther" label="Please specify your activity" value={values.activityOther} onChange={set("activityOther")} required error={errors.activityOther} />
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField id="t-company" label="Company name" value={values.company} onChange={set("company")} />
                  <TextField id="t-fleet" label="Fleet size" value={values.fleet} onChange={set("fleet")} inputMode="numeric" />
                  <TextField id="t-time" label="Preferred time for a call" value={values.preferredTime} onChange={set("preferredTime")} placeholder="e.g. Weekdays, 10am–2pm" />
                </div>
                <TextArea id="t-comments" label="Comments" value={values.comments} onChange={set("comments")} placeholder="Anything you'd like us to know about your operation." />

                <div className="mt-2 flex flex-col gap-3 sm:flex-row-reverse sm:items-center sm:justify-between">
                  <button type="submit" className="btn btn-blue w-full sm:w-auto">
                    Submit request
                  </button>
                  <p className="text-[12px] text-ink-muted">
                    Fields marked <span className="text-orange">*</span> are required.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </>
      )}
    </Modal>
  );
}

function StepDot({
  active,
  index,
  label,
  done,
}: {
  active?: boolean;
  index: number;
  label: string;
  done?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2 ${active || done ? "text-blue" : "text-ink-muted"}`}>
      <span
        className={`grid h-6 w-6 place-items-center rounded-full text-[11px] ${
          active || done ? "bg-blue text-white" : "bg-mist-100 text-ink-muted"
        }`}
      >
        {done ? <Icon name="check" size={13} strokeWidth={2.4} /> : index}
      </span>
      <span className="hidden sm:inline">{label}</span>
    </span>
  );
}
