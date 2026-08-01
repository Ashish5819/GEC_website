"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="status-page"><div className="container narrow"><span className="eyebrow">Something needs attention (D)</span><h1>This page could not be displayed</h1><p>No information was submitted. Try loading the local page again. (D)</p><button className="button" onClick={() => reset()}>Try again</button></div></section>;
}

