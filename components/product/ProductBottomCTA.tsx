"use client";

import * as React from "react";
import Link from "next/link";
import { Modal } from "@/components/ui/Modal";
import { GradientLine } from "@/components/ui/GradientLine";

/**
 * Reusable bottom-of-page CTA for product pages.
 * Additive only — sits immediately above the footer.
 *
 * When a real brochure becomes available, set BROCHURE_URL to its path
 * (e.g. "/brochures/farizon.pdf"). Nothing else needs to change: a non-null
 * value turns the demo button into a real download in one place.
 */
const BROCHURE_URL: string | null = null;

/** Existing SV Passenger product route (verified from app router). */
const SV_PASSENGER_ROUTE = "/vehicles/sv-passenger";

type Phase = "form" | "success";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  "w-full h-[52px] rounded-sm border border-[rgba(51,51,51,0.18)] bg-white px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-blue focus:ring-2 focus:ring-blue/20";

export function ProductBottomCTA() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [phase, setPhase] = React.useState<Phase>("form");
  const [values, setValues] = React.useState({ firstName: "", lastName: "", email: "", consent: false });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [brochureMsg, setBrochureMsg] = React.useState(false);
  const brochureTimer = React.useRef<number | undefined>(undefined);

  const reset = () => {
    setValues({ firstName: "", lastName: "", email: "", consent: false });
    setErrors({});
    setPhase("form");
  };

  const closeModal = () => {
    setModalOpen(false);
    // Reset after the close transition so content doesn't flash back to the form.
    window.setTimeout(reset, 320);
  };

  React.useEffect(() => () => window.clearTimeout(brochureTimer.current), []);

  const handleBrochure = (e: React.MouseEvent) => {
    e.preventDefault();
    setBrochureMsg(true);
    window.clearTimeout(brochureTimer.current);
    // Real download path: if BROCHURE_URL is set, trigger it instead of the demo notice.
    if (BROCHURE_URL) {
      window.location.href = BROCHURE_URL;
      return;
    }
    brochureTimer.current = window.setTimeout(() => setBrochureMsg(false), 4000);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.firstName.trim()) next.firstName = "First name is required";
    if (!values.lastName.trim()) next.lastName = "Last name is required";
    if (!values.email.trim()) next.email = "Email address is required";
    else if (!emailPattern.test(values.email.trim())) next.email = "Enter a valid email address";
    if (!values.consent) next.consent = "Please tick the box to continue";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Frontend demo only — no data is sent anywhere.
    setPhase("success");
  };

  return (
    <>
      {/* ---------------------------------- CTA band ---------------------------------- */}
      <section aria-labelledby="learn-more-heading" className="bg-white py-section">
        <div className="container-fluid">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left — headline */}
            <h2 id="learn-more-heading" className="text-h1 leading-[1.02]">
              LEARN MORE
              <br />
              ABOUT FARIZON
            </h2>

            {/* Right — copy + buttons */}
            <div>
              <p className="max-w-prose text-[16.5px] leading-relaxed text-ink-soft">
                Check out all the Farizon details in one place with our downloadable brochure, or sign
                up to our newsletter for all the latest Farizon electric van news.
              </p>
              <GradientLine className="mt-7" width={72} />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#" onClick={handleBrochure} className="btn btn-primary w-full sm:w-auto">
                  Download a brochure
                </a>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="btn btn-ghost w-full sm:w-auto"
                >
                  Newsletter sign up
                </button>
              </div>
              {/* Brochure demo feedback */}
              <p
                role="status"
                aria-live="polite"
                className={`mt-4 text-[14px] font-semibold text-blue transition-opacity duration-base ${
                  brochureMsg ? "opacity-100" : "opacity-0"
                }`}
              >
                {brochureMsg ? "Brochure download will be available soon." : " "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------- Newsletter modal --------------------------------- */}
      <Modal open={modalOpen} onClose={closeModal} labelledBy="newsletter-title">
        {phase === "form" && (
          <form onSubmit={submit} noValidate>
            <div className="px-8 pt-12 sm:px-12">
              <h2 id="newsletter-title" className="text-h3">
                THANK YOU FOR SIGNING UP
              </h2>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                Sign up to our newsletter for the latest Farizon electric van news.
              </p>
            </div>

            <div className="grid gap-5 px-8 pb-10 pt-8 sm:px-12">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nl-first" className="mb-2 block text-[13px] font-semibold text-ink">
                    First Name <span className="text-orange">*</span>
                  </label>
                  <input
                    id="nl-first"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={values.firstName}
                    onChange={(e) => setValues((s) => ({ ...s, firstName: e.target.value }))}
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? "nl-first-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.firstName && (
                    <p id="nl-first-error" role="alert" className="mt-1.5 text-[12px] font-semibold text-orange">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="nl-last" className="mb-2 block text-[13px] font-semibold text-ink">
                    Last Name <span className="text-orange">*</span>
                  </label>
                  <input
                    id="nl-last"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={values.lastName}
                    onChange={(e) => setValues((s) => ({ ...s, lastName: e.target.value }))}
                    aria-invalid={!!errors.lastName}
                    aria-describedby={errors.lastName ? "nl-last-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.lastName && (
                    <p id="nl-last-error" role="alert" className="mt-1.5 text-[12px] font-semibold text-orange">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="nl-email" className="mb-2 block text-[13px] font-semibold text-ink">
                  Email Address <span className="text-orange">*</span>
                </label>
                <input
                  id="nl-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => setValues((s) => ({ ...s, email: e.target.value }))}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "nl-email-error" : undefined}
                  className={fieldClass}
                />
                {errors.email && (
                  <p id="nl-email-error" role="alert" className="mt-1.5 text-[12px] font-semibold text-orange">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Consent */}
              <div>
                <label htmlFor="nl-consent" className="flex items-start gap-3">
                  <input
                    id="nl-consent"
                    name="consent"
                    type="checkbox"
                    checked={values.consent}
                    onChange={(e) => setValues((s) => ({ ...s, consent: e.target.checked }))}
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "nl-consent-error" : undefined}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-blue"
                  />
                  <span className="text-[13px] leading-relaxed text-ink-soft">
                    I&rsquo;m happy for Farizon to send me the latest news and offers. By submitting this
                    form I acknowledge Farizon&rsquo;s{" "}
                    <Link href="/legal" className="font-semibold text-blue underline underline-offset-2">
                      Privacy Policy
                    </Link>{" "}
                    and agree to Farizon&rsquo;s{" "}
                    <Link href="/legal" className="font-semibold text-blue underline underline-offset-2">
                      Terms &amp; Conditions
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p id="nl-consent-error" role="alert" className="mt-1.5 text-[12px] font-semibold text-orange">
                    {errors.consent}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn-blue mt-2 w-full">
                Submit
              </button>
            </div>
          </form>
        )}

        {phase === "success" && (
          <div className="px-8 py-14 text-center sm:px-12">
            <h2 id="newsletter-title" className="text-h3">
              STAY UP TO DATE
            </h2>
            <GradientLine className="mx-auto my-6" width={72} />
            <p className="mx-auto max-w-sm text-[15px] leading-relaxed text-ink-soft">
              You&rsquo;ll be the first to hear about the latest news and vehicle launches from Farizon.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href={SV_PASSENGER_ROUTE}
                onClick={closeModal}
                className="btn btn-primary w-full sm:w-auto"
              >
                Explore the Farizon SV
              </Link>
              <button type="button" onClick={closeModal} className="btn btn-ghost w-full sm:w-auto">
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
