import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    dek: z.string(),
    date: z.coerce.date(),
    readingTime: z.string(),
    honey: z.enum(['white-clover', 'linden', 'tupelo', 'florida-red']),
    author: z.string().default('Hunny Farm'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
