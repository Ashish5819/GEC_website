"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { searchItems } from "@/lib/site-data";

export function SearchExperience() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => query.trim().length < 2 ? [] : searchItems.filter((item) => `${item.title} ${item.path}`.toLowerCase().includes(query.toLowerCase())).slice(0, 12), [query]);
  return <div className="search-panel"><label htmlFor="site-search">Search public pages</label><div className="search-box"><input id="site-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try “Germany” or “IELTS” (D)" autoComplete="off"/><span aria-hidden="true">⌕</span></div><p className="search-help">Search runs only in this page and sends no information anywhere. (D)</p><div aria-live="polite">{query.trim().length > 1 && <p>{results.length} matching page{results.length === 1 ? "" : "s"}</p>}</div>{results.length > 0 && <ul className="search-results">{results.map((item) => <li key={item.path}><Link href={item.path}><strong>{item.title}</strong><span>{item.path}</span></Link></li>)}</ul>}{query.trim().length > 1 && results.length === 0 && <div className="empty-state"><h2>No matching page found</h2><p>Try a broader term or browse the main navigation. (D)</p></div>}</div>;
}
