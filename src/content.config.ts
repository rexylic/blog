import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
	loader: glob({ base: './src/content', pattern: '*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			math: z.boolean().optional(),
			'no-nav': z.boolean().optional(),
		}),
});

export const collections = { pages };
