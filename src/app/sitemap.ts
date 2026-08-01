import type { MetadataRoute } from "next";
import { publicPaths } from "@/lib/site-data";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", ...publicPaths, "/search"].map((path) => ({ url: `https://example.invalid${path}`, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.6 })); }

