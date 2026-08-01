import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageView } from "@/components/page-view";
import { pageMap, publicPaths } from "@/lib/site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return publicPaths.map((path) => ({ slug: path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pageMap[`/${slug.join("/")}`];
  return page ? { title: page.title, description: page.intro, robots: { index: false, follow: false } } : {};
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  if (slug[0] === "admin") notFound();
  const page = pageMap[`/${slug.join("/")}`];
  if (!page) notFound();
  return <PageView page={page}/>;
}
