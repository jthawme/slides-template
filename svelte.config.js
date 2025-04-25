import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { enhancedImages } from 'mdsvex-enhanced-images';
import * as path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		alias: {
			$slides: './src/slides'
		}
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [enhancedImages],
			layout: {
				full: path.resolve('./src/lib/components/layouts/Full.svelte'),
				_: path.resolve('./src/lib/components/layouts/Main.svelte')
			}
		})
	]
};

export default config;
