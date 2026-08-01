import Link from "next/link";
import { LocalForm } from "@/components/local-form";
import { destinations, programs, services, toSlug } from "@/lib/site-data";

const routeFor = (group: string, value: string) => `/${group}/${toSlug(value)}`;

export default function Home() {
  return <>
    <section className="home-hero"><div className="container hero-grid"><div><span className="eyebrow light">Global possibilities. Personal direction. (D)</span><h1>Your education journey, planned with clarity (D)</h1><p>Explore overseas study and career pathways with thoughtful, student-centred guidance being developed from Hyderabad. (D)</p><div className="hero-actions"><Link className="button button-gold" href="/book-counselling">Book counselling (D)</Link><Link className="button button-ghost" href="/study-abroad">Explore destinations</Link></div><div className="trust-row"><span>No outcome guarantees</span><span>Official-source verification planned (D)</span><span>Pre-launch website (D)</span></div></div><div className="hero-panel" aria-label="GEC planning pathway"><span className="mini-label">Your planning pathway (D)</span><div className="path-card"><b>01</b><span>Understand your goals (D)</span></div><div className="path-card"><b>02</b><span>Explore informed options (D)</span></div><div className="path-card"><b>03</b><span>Prepare clear next steps (D)</span></div></div></div></section>

    <section className="section intro-section"><div className="container split"><div><span className="eyebrow">About GEC</span><h2>A considered approach to global education planning (D)</h2></div><div><p className="lead-small">Global Education & Careers is in pre-launch development, with an intended base in Hyderabad. GEC plans to help learners organise complex study-abroad choices into practical next steps. (D)</p><Link className="text-link" href="/about">Discover our planned approach (D) <span aria-hidden="true">→</span></Link></div></div></section>

    <CardSection eyebrow="Explore destinations" title="Where could your learning take you? (D)" intro="Use these destination pages as planning starting points. Current visa, cost, work-right and admission information must be verified with official sources. (D)" items={destinations.slice(0, 6)} group="study-abroad" />
    <CardSection eyebrow="Study pathways" title="Choose the level that matches your ambition (D)" intro="Explore broad study levels before building a course and institution shortlist. (D)" items={programs} group="programs" tint />

    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Planned support</span><h2>Guidance designed around the whole journey (D)</h2></div><Link className="text-link" href="/services">View all planned services (D) <span aria-hidden="true">→</span></Link></div><div className="service-list">{services.slice(0, 8).map((item, i) => <Link href={routeFor("services", item)} key={item}><span>{String(i + 1).padStart(2, "0")}</span><strong>{item} (D)</strong><i aria-hidden="true">↗</i></Link>)}</div></div></section>

    <section className="section section-navy"><div className="container steps light-steps"><div><span className="eyebrow light">A clear process (D)</span><h2>From first questions to an organised plan (D)</h2><p>Each stage remains personalised and subject to accurate, current information. (D)</p></div><ol><li><strong>Discovery conversation (D)</strong><span>Clarify interests, background and priorities. (D)</span></li><li><strong>Research and shortlist (D)</strong><span>Compare potential study directions and constraints. (D)</span></li><li><strong>Preparation roadmap (D)</strong><span>Organise responsible next steps without guarantees. (D)</span></li></ol></div></section>

    <section className="section section-tint"><div className="container form-layout"><div><span className="eyebrow">Quick enquiry (D)</span><h2>What would you like to explore? (D)</h2><p>This local form lets you review the planned experience safely. Please use only sample information; no entry is sent or stored. (D)</p><ul className="tick-list"><li>Visible, clear form labels</li><li>Local validation only (D)</li><li>No appointment confirmation (D)</li></ul></div><LocalForm compact/></div></section>

    <section className="section"><div className="container callout"><div><span className="eyebrow">Start with a conversation (D)</span><h2>Bring your questions. Build your direction. (D)</h2><p>Contact GEC using the confirmed phone or email details, or explore the local counselling interface. (D)</p></div><Link className="button button-gold" href="/contact">Contact GEC</Link></div></section>
  </>;
}

function CardSection({ eyebrow, title, intro, items, group, tint = false }: { eyebrow: string; title: string; intro: string; items: string[]; group: string; tint?: boolean }) {
  return <section className={`section ${tint ? "section-tint" : ""}`}><div className="container"><div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{intro}</p></div><Link className="text-link" href={`/${group}`}>Explore all <span aria-hidden="true">→</span></Link></div><div className="tile-grid">{items.map((item, i) => <Link className="tile" href={routeFor(group, item)} key={item}><span className="tile-icon" aria-hidden="true">{["✦", "◇", "○", "△"][i % 4]}</span><h3>{item}</h3><p>Explore planning considerations and questions to verify. (D)</p><span className="tile-link">View pathway <b aria-hidden="true">→</b></span></Link>)}</div></div></section>;
}
