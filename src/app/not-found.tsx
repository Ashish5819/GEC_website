import Link from "next/link";

export default function NotFound() {
  return <section className="status-page"><div className="container narrow"><span className="status-code">404</span><span className="eyebrow">Page not found</span><h1>That pathway is not available</h1><p>The address may be incorrect, or the page may not be part of the public website. (D)</p><Link className="button" href="/">Return home</Link></div></section>;
}
