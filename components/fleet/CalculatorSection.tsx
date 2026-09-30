"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  calculators,
  getCalculator,
  SUCCESS,
  REVIEW_STATEMENT,
  type Calculator,
  type CalculatorId,
  type Field,
  type Step,
} from "@/lib/fleetCalculators";
import { Icon } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Values = Record<string, string>;
type Errors = Record<string, string>;

const VISUAL_BANDS: Record<Calculator["visual"], string[]> = {
  tco: ["Acquisition", "Energy", "Maintenance", "Operations"],
  energy: ["Diesel", "vs", "Electric"],
  timeline: ["Year 01", "Year 02", "Year 03", "Year 04", "Year 05"],
  carbon: ["Activity data", "CO₂e", "Defined boundary"],
};

const emptyGroup = (): Values => ({});

export function CalculatorSection() {
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = React.useState<CalculatorId>("tco");
  const [step, setStep] = React.useState(0);
  const [values, setValues] = React.useState<Values>({});
  const [groups, setGroups] = React.useState<Values[]>([emptyGroup()]);
  const [errors, setErrors] = React.useState<Errors>({});
  const [consent, setConsent] = React.useState(false);
  const [status, setStatus] = React.useState<"form" | "submitting" | "success">("form");
  const expRef = React.useRef<HTMLDivElement>(null);

  const calc = getCalculator(activeId)!;
  const steps = calc.steps;
  const reviewIndex = steps.length;
  const onReview = step === reviewIndex;

  const reset = React.useCallback(() => {
    setStep(0);
    setValues({});
    setGroups([emptyGroup()]);
    setErrors({});
    setConsent(false);
    setStatus("form");
  }, []);

  const selectCalc = React.useCallback(
    (id: CalculatorId, scroll = true) => {
      setActiveId(id);
      reset();
      if (scroll)
        requestAnimationFrame(() => {
          const headerH =
            parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 72;
          const el = expRef.current;
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - headerH - 24;
            window.scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
          }
        });
    },
    [reduced, reset]
  );

  // Deep links + in-page hash changes (nav/footer/chooser)
  React.useEffect(() => {
    const apply = () => {
      const h = window.location.hash.replace(/^#/, "");
      if (calculators.some((c) => c.id === h)) selectCalc(h as CalculatorId);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---- validation --------------------------------------------------------
  const validateStep = (s: Step): Errors => {
    const e: Errors = {};
    if (s.fields) {
      for (const f of s.fields) {
        if (!f.required) continue;
        if (f.dual) {
          if (!values[`${f.id}.a`]?.trim()) e[`${f.id}.a`] = "Required.";
          if (!values[`${f.id}.b`]?.trim()) e[`${f.id}.b`] = "Required.";
        } else if (!values[f.id]?.trim()) {
          e[f.id] = "This field is required.";
        }
      }
    }
    if (s.repeatable) {
      groups.forEach((g, i) => {
        for (const f of s.repeatable!.fields) {
          if (f.required && !g[f.id]?.trim()) e[`g${i}.${f.id}`] = "Required.";
        }
      });
    }
    return e;
  };

  const goNext = () => {
    if (onReview) return;
    const e = validateStep(steps[step]);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setStep((s) => s + 1);
      focusTop();
    } else {
      focusTop();
    }
  };
  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(0, s - 1));
    focusTop();
  };
  const focusTop = () =>
    requestAnimationFrame(() => {
      const headerH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 72;
      const el = expRef.current;
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - headerH - 24;
        if (window.scrollY > y) window.scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
      }
    });

  const submit = () => {
    if (!consent) {
      setErrors({ consent: "Please confirm before submitting." });
      return;
    }
    setStatus("submitting");
    // Frontend demo: no backend. A submit handler can be wired here later.
    window.setTimeout(() => setStatus("success"), 1100);
  };

  const set = (key: string, v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };
  const setGroup = (i: number, key: string, v: string) => {
    setGroups((prev) => prev.map((g, gi) => (gi === i ? { ...g, [key]: v } : g)));
    const ek = `g${i}.${key}`;
    if (errors[ek]) setErrors((prev) => ({ ...prev, [ek]: "" }));
  };

  return (
    <section id="calculators" aria-label="Fleet calculators" className="bg-white py-section">
      <div className="container-fluid">
        {/* 03 — Chooser */}
        <Reveal>
          <span className="eyebrow text-blue">Choose your fleet question</span>
          <h2 className="mt-5 max-w-2xl text-h2">What do you need to understand?</h2>
        </Reveal>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-mist-200 bg-mist-200 sm:grid-cols-2">
          {calculators.map((c, i) => (
            <li key={c.id}>
              <button
                onClick={() => selectCalc(c.id)}
                className="group flex h-full w-full flex-col items-start gap-4 bg-white p-7 text-left transition-colors hover:bg-mist-50 md:p-9"
              >
                <span className="text-[13px] font-bold text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-h5 text-starry">{c.title}</span>
                  <span className="mt-1 block text-[14px] font-semibold text-ink-muted">
                    {c.subtitle}
                  </span>
                </span>
                <span className="mt-1 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
                  {c.description.split(".")[0]}.
                </span>
                <span className="link-arrow mt-auto pt-2 text-blue">
                  {c.submitCta} <Icon name="arrow-right" size={15} />
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* 04 — Experience */}
        <div ref={expRef} id="calculator-experience" className="mt-16 scroll-mt-28 lg:mt-24">
          {/* Selector */}
          <div
            role="tablist"
            aria-label="Select a calculator"
            className="flex gap-x-7 overflow-x-auto whitespace-nowrap border-b border-mist-200 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {calculators.map((c) => {
              const active = c.id === activeId;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => active || selectCalc(c.id, false)}
                  className={`relative -mb-px py-4 text-[14px] font-bold uppercase tracking-[0.1em] transition-colors ${
                    active ? "text-starry" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {c.tab}
                  {active && (
                    <span
                      className="absolute inset-x-0 bottom-0 h-[3px] rounded-full"
                      style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Shell */}
          <div className="mt-10">
            {status === "success" ? (
              <FormSuccess onReset={() => selectCalc(activeId)} />
            ) : (
              <div className="grid gap-10 lg:grid-cols-[248px_1fr] lg:gap-16">
                {/* Step rail */}
                <StepRail calc={calc} steps={steps} step={step} onReview={onReview} reviewIndex={reviewIndex} />

                {/* Form */}
                <div>
                  <div className="border-b border-mist-200 pb-6">
                    <h3 className="text-h3 text-starry">{calc.title}</h3>
                    <p className="mt-2 text-[16px] font-semibold text-ink-muted">{calc.subtitle}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                      {VISUAL_BANDS[calc.visual].map((b, i) => (
                        <React.Fragment key={b}>
                          {i > 0 && (
                            <span
                              aria-hidden="true"
                              className="h-[2px] w-5 rounded-full"
                              style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
                            />
                          )}
                          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                            {b}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                    {calc.note && (
                      <p className="mt-5 flex gap-2.5 rounded-md bg-mist-50 p-4 text-[13px] leading-relaxed text-ink-soft">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-ink-muted/40 text-[10px] font-bold text-ink-muted"
                        >
                          i
                        </span>
                        {calc.note}
                      </p>
                    )}
                  </div>

                  <motion.div
                    key={activeId + "-" + step}
                    initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.2, 0.65, 0.3, 1] }}
                    className="pt-8"
                  >
                    {onReview ? (
                        <FormReview
                          calc={calc}
                          values={values}
                          groups={groups}
                          consent={consent}
                          setConsent={(v) => {
                            setConsent(v);
                            if (v) setErrors((p) => ({ ...p, consent: "" }));
                          }}
                          consentError={errors.consent}
                          onEdit={(i) => {
                            setStep(i);
                            focusTop();
                          }}
                        />
                      ) : (
                        <StepFields
                          step={steps[step]}
                          values={values}
                          groups={groups}
                          errors={errors}
                          set={set}
                          setGroup={setGroup}
                          addGroup={() => setGroups((g) => [...g, emptyGroup()])}
                          removeGroup={(i) =>
                            setGroups((g) => (g.length > 1 ? g.filter((_, gi) => gi !== i) : g))
                          }
                      />
                    )}
                  </motion.div>

                  {/* Nav */}
                  <div className="mt-10 flex items-center justify-between border-t border-mist-200 pt-6">
                    <button
                      onClick={goBack}
                      disabled={step === 0}
                      className="btn btn-ghost disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <span aria-hidden="true">←</span> Back
                    </button>
                    {onReview ? (
                      <button
                        onClick={submit}
                        disabled={status === "submitting"}
                        className="btn btn-blue disabled:opacity-70"
                      >
                        {status === "submitting" ? "Submitting…" : "Submit fleet information"}
                        {status !== "submitting" && <Icon name="arrow-right" size={18} />}
                      </button>
                    ) : (
                      <button onClick={goNext} className="btn btn-primary">
                        {step === steps.length - 1 ? "Review" : "Continue"}{" "}
                        <Icon name="arrow-right" size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Step rail ---------------- */
function StepRail({
  calc,
  steps,
  step,
  onReview,
  reviewIndex,
}: {
  calc: Calculator;
  steps: Step[];
  step: number;
  onReview: boolean;
  reviewIndex: number;
}) {
  const labels = [...steps.map((s) => s.title), "Review"];
  const current = onReview ? reviewIndex : step;
  return (
    <aside aria-label="Progress">
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="flex items-baseline justify-between">
          <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-ink-muted">
            Step {current + 1} of {labels.length}
          </span>
          <span className="text-[13px] font-bold text-starry">{labels[current]}</span>
        </div>
        <div className="mt-3 h-[3px] w-full rounded-full bg-mist-200">
          <div
            className="h-full rounded-full"
            style={{
              width: `${((current + 1) / labels.length) * 100}%`,
              background: "linear-gradient(90deg,#FFC832,#FF6432)",
            }}
          />
        </div>
      </div>
      {/* Desktop */}
      <ol className="hidden lg:sticky lg:top-[calc(var(--header-h)+24px)] lg:block">
        {labels.map((l, i) => {
          const active = i === current;
          const done = i < current;
          return (
            <li key={l} className="flex items-center gap-3 py-2.5">
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[12px] font-bold ${
                  active
                    ? "bg-starry text-white"
                    : done
                      ? "bg-mist-200 text-starry"
                      : "border border-mist-300 text-ink-muted"
                }`}
              >
                {done ? <Icon name="check" size={13} strokeWidth={2.4} /> : String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-[14px] ${active ? "font-bold text-starry" : "font-semibold text-ink-muted"}`}
              >
                {l}
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}

/* ---------------- Step fields ---------------- */
function StepFields({
  step,
  values,
  groups,
  errors,
  set,
  setGroup,
  addGroup,
  removeGroup,
}: {
  step: Step;
  values: Values;
  groups: Values[];
  errors: Errors;
  set: (k: string, v: string) => void;
  setGroup: (i: number, k: string, v: string) => void;
  addGroup: () => void;
  removeGroup: (i: number) => void;
}) {
  return (
    <div>
      <h4 className="text-h4 text-starry">{step.title}</h4>
      {step.intro && <p className="mt-2 max-w-prose text-[15px] text-ink-soft">{step.intro}</p>}

      {step.fields && (
        <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {step.fields.map((f) => (
            <FieldControl
              key={f.id}
              field={f}
              getVal={(k) => values[k] ?? ""}
              onChange={(k, v) => set(k, v)}
              errors={errors}
            />
          ))}
        </div>
      )}

      {step.repeatable && (
        <div className="mt-8 space-y-6">
          {groups.map((g, i) => (
            <div key={i} className="rounded-lg border border-mist-200 p-6 md:p-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-starry">
                  {step.repeatable!.itemLabel} {String(i + 1).padStart(2, "0")}
                </span>
                {groups.length > step.repeatable!.min && (
                  <button
                    onClick={() => removeGroup(i)}
                    className="text-[13px] font-semibold text-ink-muted transition-colors hover:text-orange"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {step.repeatable!.fields.map((f) => (
                  <FieldControl
                    key={f.id}
                    field={f}
                    getVal={(k) => g[k] ?? ""}
                    onChange={(k, v) => setGroup(i, k, v)}
                    errors={errors}
                    keyPrefix={`g${i}.`}
                  />
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={addGroup}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-mist-300 py-4 text-[14px] font-bold uppercase tracking-[0.08em] text-starry transition-colors hover:border-starry hover:bg-mist-50"
          >
            <Icon name="plus" size={18} /> {step.repeatable.addLabel}
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------------- Field control ---------------- */
function FieldControl({
  field,
  getVal,
  onChange,
  errors,
  keyPrefix = "",
}: {
  field: Field;
  getVal: (k: string) => string;
  onChange: (k: string, v: string) => void;
  errors: Errors;
  keyPrefix?: string;
}) {
  const base =
    "h-12 w-full rounded-sm border bg-white px-3.5 text-[15px] text-ink outline-none transition-colors focus:border-starry";
  const wide = field.dual;

  const inputClass = (err?: string) =>
    `${base} ${err ? "border-orange" : "border-mist-300"}`;

  const Label = (
    <label
      htmlFor={keyPrefix + field.id}
      className="flex items-baseline gap-2 text-[13px] font-bold text-starry"
    >
      {field.label}
      {field.required ? (
        <span className="text-[11px] font-semibold uppercase tracking-wide text-blue">Required</span>
      ) : (
        <span className="text-[11px] font-normal uppercase tracking-wide text-ink-muted/70">
          Optional
        </span>
      )}
    </label>
  );

  const renderControl = (key: string, colLabel?: string) => {
    const err = errors[key];
    const id = keyPrefix + key;
    const val = getVal(key);
    if (field.type === "select") {
      return (
        <div>
          <select
            id={id}
            value={val}
            onChange={(e) => onChange(key, e.target.value)}
            aria-invalid={!!err}
            aria-describedby={err ? id + "-err" : undefined}
            className={`${inputClass(err)} appearance-none bg-[length:14px] bg-[right_0.9rem_center] bg-no-repeat pr-9`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236E6E7A' stroke-width='1.6'><path d='m5 9 7 7 7-7'/></svg>\")",
            }}
          >
            <option value="" disabled>
              Select…
            </option>
            {field.options?.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {err && <FieldError id={id + "-err"} msg={err} />}
        </div>
      );
    }
    if (field.type === "toggle") {
      return (
        <div>
          <div className="flex gap-2" role="group" aria-label={field.label}>
            {(field.options ?? ["Yes", "No"]).map((o) => {
              const on = val === o;
              return (
                <button
                  key={o}
                  type="button"
                  aria-pressed={on}
                  onClick={() => onChange(key, o)}
                  className={`h-12 flex-1 rounded-sm border text-[14px] font-semibold transition-colors ${
                    on
                      ? "border-starry bg-starry text-white"
                      : "border-mist-300 bg-white text-ink-soft hover:border-starry"
                  }`}
                >
                  {o}
                </button>
              );
            })}
          </div>
          {err && <FieldError id={id + "-err"} msg={err} />}
        </div>
      );
    }
    // text / number / percent / date
    const isNum = field.type === "number" || field.type === "percent";
    return (
      <div>
        <div className="relative">
          {colLabel && (
            <span className="mb-1.5 block text-[12px] font-semibold text-ink-muted">{colLabel}</span>
          )}
          <input
            id={id}
            type={field.type === "date" ? "date" : isNum ? "text" : "text"}
            inputMode={isNum ? "decimal" : undefined}
            value={val}
            placeholder={field.placeholder}
            onChange={(e) => onChange(key, e.target.value)}
            aria-invalid={!!err}
            aria-describedby={err ? id + "-err" : field.hint ? id + "-hint" : undefined}
            className={`${inputClass(err)} ${field.unit || field.type === "percent" ? "pr-14" : ""}`}
          />
          {(field.unit || field.type === "percent") && (
            <span className="pointer-events-none absolute right-3.5 top-0 flex h-12 items-center text-[13px] font-semibold text-ink-muted"
              style={{ top: colLabel ? "1.75rem" : 0 }}
            >
              {field.type === "percent" ? "%" : field.unit}
            </span>
          )}
        </div>
        {err && <FieldError id={id + "-err"} msg={err} />}
      </div>
    );
  };

  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      {Label}
      {field.hint && (
        <p id={keyPrefix + field.id + "-hint"} className="mt-1 text-[12.5px] text-ink-muted">
          {field.hint}
        </p>
      )}
      <div className={`mt-2 ${wide ? "grid gap-4 sm:grid-cols-2" : ""}`}>
        {field.dual
          ? [0, 1].map((n) => (
              <React.Fragment key={n}>
                {renderControl(`${field.id}.${n === 0 ? "a" : "b"}`, field.cols?.[n])}
              </React.Fragment>
            ))
          : renderControl(field.id)}
      </div>
    </div>
  );
}

function FieldError({ id, msg }: { id: string; msg: string }) {
  return (
    <p id={id} role="alert" className="mt-1.5 text-[12.5px] font-semibold text-orange">
      {msg}
    </p>
  );
}

/* ---------------- Review ---------------- */
function FormReview({
  calc,
  values,
  groups,
  consent,
  setConsent,
  consentError,
  onEdit,
}: {
  calc: Calculator;
  values: Values;
  groups: Values[];
  consent: boolean;
  setConsent: (v: boolean) => void;
  consentError?: string;
  onEdit: (stepIndex: number) => void;
}) {
  const fmt = (f: Field, get: (k: string) => string) => {
    if (f.dual) {
      const a = get(`${f.id}.a`);
      const b = get(`${f.id}.b`);
      if (!a && !b) return null;
      return `${f.cols?.[0] ?? "A"}: ${a || "—"}${f.type === "percent" ? "%" : ""}   ·   ${
        f.cols?.[1] ?? "B"
      }: ${b || "—"}${f.type === "percent" ? "%" : ""}`;
    }
    const v = get(f.id);
    if (!v) return null;
    return `${v}${f.type === "percent" ? "%" : f.unit ? " " + f.unit : ""}`;
  };

  return (
    <div>
      <h4 className="text-h4 text-starry">Review your information</h4>
      <p className="mt-2 max-w-prose text-[15px] text-ink-soft">
        Check the details below before submitting them to the Farizon Egypt team.
      </p>

      <div className="mt-8 space-y-8">
        {calc.steps.map((s, si) => {
          const rows: { label: string; value: string }[] = [];
          if (s.fields) {
            for (const f of s.fields) {
              const val = fmt(f, (k) => values[k] ?? "");
              if (val) rows.push({ label: f.label, value: val });
            }
          }
          const groupBlocks =
            s.repeatable &&
            groups.map((g, gi) => ({
              title: `${s.repeatable!.itemLabel} ${String(gi + 1).padStart(2, "0")}`,
              rows: s.repeatable!.fields
                .map((f) => {
                  const val = fmt(f, (k) => g[k] ?? "");
                  return val ? { label: f.label, value: val } : null;
                })
                .filter(Boolean) as { label: string; value: string }[],
            }));

          const hasContent = rows.length > 0 || (groupBlocks && groupBlocks.some((b) => b.rows.length));
          if (!hasContent) return null;

          return (
            <div key={s.id} className="border-t border-mist-200 pt-6">
              <div className="flex items-center justify-between">
                <h5 className="text-[13px] font-bold uppercase tracking-[0.14em] text-starry">
                  {s.title}
                </h5>
                <button onClick={() => onEdit(si)} className="link-arrow text-blue">
                  Edit
                </button>
              </div>
              {rows.length > 0 && (
                <dl className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {rows.map((r) => (
                    <div key={r.label}>
                      <dt className="text-[12.5px] text-ink-muted">{r.label}</dt>
                      <dd className="mt-0.5 text-[15px] font-semibold text-starry">{r.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {groupBlocks?.map(
                (b) =>
                  b.rows.length > 0 && (
                    <div key={b.title} className="mt-5 rounded-md bg-mist-50 p-5">
                      <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-starry">
                        {b.title}
                      </span>
                      <dl className="mt-3 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {b.rows.map((r) => (
                          <div key={r.label}>
                            <dt className="text-[12.5px] text-ink-muted">{r.label}</dt>
                            <dd className="mt-0.5 text-[14.5px] font-semibold text-starry">
                              {r.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 border-t border-mist-200 pt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={!!consentError}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#000FD7]"
          />
          <span className="text-[14px] leading-relaxed text-ink-soft">{REVIEW_STATEMENT}</span>
        </label>
        {consentError && (
          <p role="alert" className="mt-2 text-[12.5px] font-semibold text-orange">
            {consentError}
          </p>
        )}
      </div>
    </div>
  );
}

/* ---------------- Success ---------------- */
function FormSuccess({ onReset }: { onReset: () => void }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto max-w-xl py-10 text-center sm:py-16"
    >
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-starry text-white">
        <Icon name="check" size={30} strokeWidth={2.2} />
      </span>
      <h3 className="mt-8 text-h2 text-starry">{SUCCESS.heading}</h3>
      <GradientLine className="mx-auto mt-6" width={72} />
      <p className="mt-6 text-[17px] font-semibold text-starry">{SUCCESS.primary}</p>
      <p className="mx-auto mt-3 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
        {SUCCESS.body}
      </p>
      <p className="mt-4 text-[13px] text-ink-muted">{SUCCESS.secondary}</p>
      <button onClick={onReset} className="btn btn-primary mt-9">
        Back to Fleet Solutions <Icon name="arrow-right" size={18} />
      </button>
    </div>
  );
}
