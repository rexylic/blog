// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeMdxJsxHeadings from './src/rehype-mdx-jsx-headings.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.rexylic.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMdxJsxHeadings, rehypeKatex],
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Condensed Mono',
			cssVariable: '--font-cm',
			fallbacks: ['monospace'],
			display: 'swap',
			subsets: ['latin'],
			// unicodeRange: ['U+25CA'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/cm/r.woff2'],
						weight: 'normal',
						style: 'normal',
					},
					{
						src: ['./src/assets/fonts/cm/i.woff2'],
						weight: 'normal',
						style: 'italic',
					},
					{
						src: ['./src/assets/fonts/cm/b.woff2'],
						weight: 'bold',
						style: 'normal',
					},
					{
						src: ['./src/assets/fonts/cm/z.woff2'],
						weight: 'bold',
						style: 'italic',
					},
				],
			},
		},
		{
			provider: fontProviders.google(),
			name: 'LXGW WenKai Mono TC',
			cssVariable: '--font-lxgw',
			fallbacks: ['serif'],
			subsets: ['latin', 'chinese-traditional'],
			display: 'swap',
		}
	],
});
