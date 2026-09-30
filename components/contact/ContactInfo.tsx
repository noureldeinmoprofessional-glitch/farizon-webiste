import * as React from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { contactDetails, contactLinks } from "@/lib/contact";

const items: { label: string; value: string; href: string; icon: IconName; external?: boolean }[] = [
  { label: "Email", value: contactDetails.email, href: contactLinks.email, icon: "mail" },
  { label: "Phone", value: contactDetails.phone, href: contactLinks.phone, icon: "phone" },
  {
    label: "WhatsApp",
    value: contactDetails.whatsapp,
    href: contactLinks.whatsapp,
    icon: "whatsapp",
    external: true,
  },
];

export function ContactInfo() {
  return (
    <section aria-label="Contact information" className="bg-white pb-section">
      <div className="container-fluid">
        <div className="grid gap-6 border-t border-mist-200 pt-12 sm:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-4 rounded-lg border border-mist-200 bg-mist-50 p-5 transition-colors hover:border-blue/40"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-blue">
                <Icon name={item.icon} size={22} />
              </span>
              <span className="min-w-0">
                <span className="block text-[12px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                  {item.label}
                </span>
                <span className="mt-1 block truncate text-[15px] font-semibold text-starry transition-colors group-hover:text-blue">
                  {item.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
