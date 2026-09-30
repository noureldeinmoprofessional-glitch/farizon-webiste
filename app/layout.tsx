import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farizon-egypt.local"),
  title: {
    default: "Farizon Egypt | Electric Commercial Vehicles by National Motors",
    template: "%s | Farizon Egypt",
  },
  description:
    "Leading the Green Commercial Revolution through Innovation and Intelligent Connectivity. Farizon electric commercial vehicles in Egypt, brought to you by National Motors.",
  openGraph: {
    title: "Farizon Egypt | Electric Commercial Vehicles",
    description:
      "Purpose-built electric commercial vehicles for business. Lower costs. Zero emissions.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#51516A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body>{children}</body>
    </html>
  );
}
