import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts live in src/blog/*.md. The filename is the slug, so
// `bigquery-slot-reservations.md` renders at /blog/bigquery-slot-reservations/.
//
// `draft` defaults to true: a new file is invisible in production until it is
// explicitly marked draft: false. Drafts still render in `astro dev` so a post
// can be reviewed before it ships. See src/data/blog.ts for the filter.
//
// The files sit outside src/content/ on purpose: a glob base inside that
// legacy directory makes Astro warn about duplicate ids on every build.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog };
