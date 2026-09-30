"use client";

import * as React from "react";

const baseField =
  "w-full h-[52px] rounded-sm border border-[rgba(51,51,51,0.18)] bg-white px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-blue focus:ring-2 focus:ring-blue/20";

interface FieldWrapProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  hint?: string;
}

function FieldWrap({ id, label, required, error, children, hint }: FieldWrapProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] font-semibold text-ink">
        {label}
        {required && <span className="ml-1 text-orange">*</span>}
        {!required && <span className="ml-1 text-ink-muted/70">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-[12px] text-ink-muted">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[12px] font-semibold text-orange" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  id,
  label,
  value,
  onChange,
  required,
  error,
  type = "text",
  placeholder,
  inputMode,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
  type?: string;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
}) {
  return (
    <FieldWrap id={id} label={label} required={required} error={error}>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={baseField}
      />
    </FieldWrap>
  );
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  required,
  error,
  placeholder = "Select an option",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
  error?: string;
  placeholder?: string;
}) {
  return (
    <FieldWrap id={id} label={label} required={required} error={error}>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseField} appearance-none pr-11 ${value ? "text-ink" : "text-ink-muted/70"}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-ink">
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="m5 9 7 7 7-7" />
          </svg>
        </span>
      </div>
    </FieldWrap>
  );
}

export function TextArea({
  id,
  label,
  value,
  onChange,
  required,
  error,
  placeholder,
  rows = 3,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <FieldWrap id={id} label={label} required={required} error={error}>
      <textarea
        id={id}
        name={id}
        value={value}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-sm border border-[rgba(51,51,51,0.18)] bg-white p-4 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-blue focus:ring-2 focus:ring-blue/20"
      />
    </FieldWrap>
  );
}

/** A read-only "locked" field, e.g. the request type the flow is scoped to. */
export function LockedField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="mb-2 block text-[13px] font-semibold text-ink">{label}</span>
      <div className="flex h-[52px] items-center gap-3 rounded-sm border border-blue/25 bg-mist-50 px-4">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-blue text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 11V8a5 5 0 0 1 10 0v3" />
            <rect x="5" y="11" width="14" height="9" rx="1.5" />
          </svg>
        </span>
        <span className="text-[15px] font-semibold text-starry">{value}</span>
      </div>
    </div>
  );
}
