import Link from "next/link";
import { contact, PageData } from "@/lib/site-data";
import { LocalForm } from "./local-form";

export function Breadcrumbs({ path }: { path: string }) {
  const parts = path.split("/").filter(Boolean);
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li>{parts.map((part, index) => { const href = `/${parts.slice(0, index + 1).join("/")}`; const last = index === parts.length - 1; return <li key={href}>{last ? <span aria-current="page">{part.replaceAll("-", " ")}</span> : <Link href={href}>{part.replaceAll("-", " ")}</Link>}</li>; })}</ol></nav>;
}

export function PageView({ page }: { page: PageData }) {
  return <>
    <section className="page-hero"><div className="container narrow"><Breadcrumbs path={page.path}/><span className="eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p className="lead">{page.intro}</p><div className="hero-actions"><Link className="button" href="/book-counselling">Start a conversation (D)</Link><Link className="text-link" href="/contact">Contact GEC <span aria-hidden="true">→</span></Link></div></div></section>
    {page.kind === "form" ? <section className="section"><div className="container form-layout"><div><span className="eyebrow">Sample interface</span><h2>Share sample details for local review (D)</h2><p>No appointment is confirmed, and the entry never leaves this browser session. (D)</p></div><LocalForm /></div></section> : <PageBody page={page}/>}
  </>;
}
function PageBody({ page }: { page: PageData }) {
  return <>
    <section className="section"><div className="container narrow"><span className="eyebrow">Plan with clarity</span><h2>{page.kind === "legal" ? "Important draft status (D)" : "A practical place to begin (D)"}</h2><p>{page.kind === "legal" ? "This page is not approved legal advice and must be reviewed by a qualified professional before publication. (D)" : "Every education journey is different. GEC’s planned approach begins by understanding academic background, interests, priorities and constraints before suggesting possible next steps. (D)"}</p>{page.items && <div className="feature-grid">{page.items.map((item, i) => <article className="feature-card" key={item}><span className="card-number">0{i + 1}</span><h3>{item}</h3><p>Review relevant questions and build an informed shortlist before taking action. (D)</p></article>)}</div>}</div></section>
    <section className="section section-tint"><div className="container steps"><div><span className="eyebrow">How guidance is planned (D)</span><h2>Move forward one clear step at a time (D)</h2></div><ol><li><strong>Understand your goals (D)</strong><span>Start with your academic interests, experience and priorities. (D)</span></li><li><strong>Explore suitable directions (D)</strong><span>Compare credible options and identify questions that need verification. (D)</span></li><li><strong>Build an action plan (D)</strong><span>Organise the next steps without promises or outcome guarantees. (D)</span></li></ol></div></section>
    <section className="section"><div className="container callout"><div><span className="eyebrow">Talk with GEC (D)</span><h2>Ready to organise your next questions? (D)</h2><p>Speak with {contact.owner} using the confirmed contact details, or review the local counselling form demonstration. (D)</p></div><Link className="button button-gold" href="/book-counselling">Book counselling (D)</Link></div></section>
  </>;
}
