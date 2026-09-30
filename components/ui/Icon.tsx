import * as React from "react";

/**
 * Farizon-aligned linear icon set.
 * Equal 1.6 stroke weight, flat (butt) terminals, single linear structure,
 * minimal geometry — derived from the Farizon icon language.
 */

export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "search"
  | "close"
  | "menu"
  | "plus"
  | "minus"
  | "chevron-down"
  | "chevron-right"
  | "play"
  | "check"
  | "bolt"
  | "route"
  | "leaf"
  | "shield"
  | "gauge"
  | "wrench"
  | "parts"
  | "truck"
  | "calculator"
  | "cpu"
  | "instagram"
  | "facebook"
  | "phone"
  | "mail"
  | "map-pin"
  | "whatsapp";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const paths: Record<IconName, React.ReactNode> = {
  "arrow-right": <path d="M4 12h15M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  "chevron-down": <path d="m5 9 7 7 7-7" />,
  "chevron-right": <path d="m9 5 7 7-7 7" />,
  play: <path d="M7 5v14l12-7z" />,
  check: <path d="m4 12 5 5L20 6" />,
  bolt: <path d="M13 3 5 13h6l-1 8 8-11h-6z" />,
  route: (
    <>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H14a4 4 0 0 0 0-8H10a4 4 0 0 1 0-8h.5" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 6-14 16-14 0 10-6 14-14 14a6 6 0 0 1-2 0z" />
      <path d="M4 20C8 14 12 11 17 9" />
    </>
  ),
  shield: <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" />,
  gauge: (
    <>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18 15 9" />
    </>
  ),
  wrench: <path d="M14.5 6a3.5 3.5 0 0 0-4.6 4.3L4 16.2 6.8 19l5.9-5.9A3.5 3.5 0 0 0 17 8.5L14.7 11l-1.8-1.8z" />,
  parts: (
    <>
      <path d="M3 8l9-5 9 5-9 5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h12v10H2zM14 9h4l3 3v4h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15v2" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" />
    </>
  ),
  facebook: <path d="M14 8h2V5h-2c-2 0-3 1-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8c0-.5.3-1 1-1z" />,
  phone: <path d="M6 3h3l1.5 5-2 1.5a11 11 0 0 0 5 5l1.5-2 5 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 5.2 2 2 0 0 1 6 3z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  whatsapp: <path d="M20 12a8 8 0 0 1-11.8 7L4 20l1-4.2A8 8 0 1 1 20 12z" />,
};

/** Icons drawn as filled shapes rather than strokes. */
const filled = new Set<IconName>(["play", "bolt", "facebook", "phone"]);

export function Icon({ name, size = 24, strokeWidth = 1.6, ...rest }: IconProps & { strokeWidth?: number }) {
  const isFilled = filled.has(name);
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
