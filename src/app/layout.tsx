import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.invalid"),
  title: { default: "Global Education & Careers | GEC", template: "%s | GEC" },
  description: "Local pre-launch website demonstration for Global Education & Careers in Hyderabad. (D)",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></body></html>;
}
