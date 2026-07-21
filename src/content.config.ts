import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const people = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    nameZh: z.string().optional(),
    role: z.enum(['pi', 'graduate', 'undergrad', 'alumni']),
    years: z.string().optional(),
    researchArea: z.string().optional(),
    contact: z.string().optional(),
    photo: z.string().optional(),
    thesis: z.string().optional(),
    destination: z.string().optional(),
    order: z.number().default(100),
    active: z.boolean().default(true),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,yml,yaml}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    era: z.enum(['after-njust', 'before-njust']),
    url: z.string().optional(),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    pdf: z.string().optional(),
    bibtex: z.string().optional(),
    suppPdf: z.string().optional(),
    extraLinks: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .optional(),
    order: z.number().default(100),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(100),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    event: z.string().optional(),
    date: z.coerce.date().optional(),
    location: z.string().optional(),
    url: z.string().optional(),
    slides: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/teaching' }),
  schema: z.object({
    title: z.string(),
    semester: z.string().optional(),
    description: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { people, publications, research, talks, posts, teaching };
