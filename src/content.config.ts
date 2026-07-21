import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    author: z.string().default("Huy X. Dang"),
    // Posts not yet migrated in-house link out instead of rendering a local page
    external: z.string().url().optional(),
    // Heading slugs whose ToC entries get the hover arrow (emphasis)
    emphasize: z.array(z.string()).default([]),
    // Optional hero image, rendered between the title block and the body
    hero: z.string().optional(),
  }),
});

export const collections = { writing };
