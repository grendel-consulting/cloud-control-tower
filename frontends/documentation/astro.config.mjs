// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Cloud Control Tower',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/grendel-consulting/cloud-control-tower' }],
			sidebar: [
			],
		}),
	],
});
