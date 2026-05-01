import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},
	devServer: {
		host: '127.0.0.1',
		port: 3000,
	},
	nitro: {
		compressPublicAssets: true,
		minify: true,
	},
	modules: ['@nuxt/image', '@nuxt/eslint'],
	css: ['@assets/scss/main.scss'],
	components: [
		{
			path: '@/components/ui',
			pathPrefix: false,
		},
		{
			path: '@/components/feature',
			pathPrefix: false,
		},
		{
			path: '@/components/layout',
			pathPrefix: false,
		},
	],
	appConfig: {
		head: {
			link: [
				{
					rel: 'preload',
					href: '/fonts/manrope-300.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: 'anonymous',
				},
				{
					rel: 'preload',
					href: '/fonts/manrope-400.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: 'anonymous',
				},
				{
					rel: 'preload',
					href: '/fonts/manrope-500.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: 'anonymous',
				},
				{
					rel: 'preload',
					href: '/fonts/playfair-display-600.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: 'anonymous',
				},
				{
					rel: 'preload',
					href: '/fonts/playfair-display-700.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: 'anonymous',
				},
			],
		},
	},
	alias: {
		'@app': fileURLToPath(new URL('./app', import.meta.url)),
		'@assets': fileURLToPath(new URL('./app/assets', import.meta.url)),
		'@components': fileURLToPath(new URL('./app/components', import.meta.url)),
		'@ui': fileURLToPath(new URL('./app/components/ui', import.meta.url)),
		'@feature': fileURLToPath(
			new URL('./app/components/feature', import.meta.url),
		),
		'@layout': fileURLToPath(
			new URL('./app/components/layout', import.meta.url),
		),
		'@composables': fileURLToPath(
			new URL('./app/composables', import.meta.url),
		),
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
					@use '@assets/scss/tokens' as *;
					`,
				},
			},
		},
		optimizeDeps: {
			include: ['@vue/devtools-core', '@vue/devtools-kit'],
		},
	},
	eslint: {
		config: {
			stylistic: true,
		},
	},
	image: {
		quality: 80,
		format: ['webp'],
	},
	compatibilityDate: '2025-07-15',
});
