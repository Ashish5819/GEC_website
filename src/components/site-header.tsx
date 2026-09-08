"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contact, primaryNav } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <div className="contact-bar"><div className="container contact-inner"><span>Global Education & Careers</span><span><a href={`tel:${contact.phone}`}>{contact.phone}</a><span aria-hidden="true"> · </span><a href={`mailto:${contact.email}`}>{contact.email}</a></span></div></div>
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Global Education and Careers home"><Image className="brand-logo" src="/images/gec-logo.webp" alt="" width={58} height={58} priority/><span className="brand-copy"><strong>Global Education</strong><small>& Careers</small></span></Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span aria-hidden="true">{open ? "×" : "☰"}</span><span>Menu</span></button>
        <nav id="primary-navigation" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
          {primaryNav.map((item) => <Link key={item.href} className={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "active" : ""} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link className="nav-search" href="/search" onClick={() => setOpen(false)}>Search</Link>
          <Link className="button button-small" href="/book-counselling" onClick={() => setOpen(false)}>Book counselling (D)</Link>
        </nav>
      </div>
    </header>
  </>;
}
