import type { Metadata } from "next";
import { SearchExperience } from "@/components/search-experience";

export const metadata: Metadata = { title: "Search", description: "Search GEC public website pages locally. (D)" };

export default function SearchPage() {
  return <section className="page-hero search-page"><div className="container narrow"><span className="eyebrow">Search</span><h1>Find a page or topic</h1><p className="lead">Search the local GEC website demonstration by destination, program, service or resource. (D)</p><SearchExperience/></div></section>;
}

