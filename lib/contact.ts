/**
 * Single source of truth for Farizon Egypt contact details.
 * Values are the existing published contact points — do not invent new ones.
 */

export const contactDetails = {
  email: "info@nationalmotorsco.com",
  /** Short-code hotline as published site-wide (e.g. footer "Call 16302"). */
  phone: "16302",
  /** Display value for WhatsApp. */
  whatsapp: "01066673747",
} as const;

/** Ready-to-use hrefs derived from the details above. */
export const contactLinks = {
  email: `mailto:${contactDetails.email}`,
  phone: `tel:${contactDetails.phone}`,
  /** wa.me needs international format with no leading 0 or +. Egypt: 0 -> 20. */
  whatsapp: `https://wa.me/20${contactDetails.whatsapp.replace(/^0/, "")}`,
} as const;
