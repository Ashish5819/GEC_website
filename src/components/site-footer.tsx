import Link from "next/link";
import { contact } from "@/lib/site-data";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div><div className="footer-brand">GEC</div><p>Global Education & Careers</p><p className="muted-light">Thoughtful overseas education and career guidance is being planned from Hyderabad. (D)</p></div>
      <div><h2>Explore</h2><Link href="/study-abroad">Study abroad</Link><Link href="/programs">Programs</Link><Link href="/services">Planned services</Link><Link href="/resources">Resources</Link></div>
      <div><h2>Organisation</h2><Link href="/about">About GEC</Link><Link href="/university-partnerships">University partnerships (D)</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy policy (D)</Link></div>
      <div><h2>Contact</h2><p>{contact.owner}</p><a href={`tel:${contact.phone}`}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><p>{contact.city}<br/><span className="muted-light">Exact office address unconfirmed (D)</span></p></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Global Education & Careers</span><span>Pre-launch local website demonstration (D)</span></div>
  </footer>;
}
