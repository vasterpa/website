import node from "@sveltejs/adapter-node";
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: node({ env: { port: process.env.PORT } }),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			server: {
				fs: {
					allow: [".."]
				}
			}
		}
	}
};

export default config;
