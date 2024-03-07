// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { build } from 'vite';

const env = process.env.NODE_ENV;

console.log(process.env.NODE_ENV)

/** @type {import('@sveltejs/kit').Config} */
const config = {
 
  
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(), 
	},
  preprocess: preprocess({
    scss: {
      prependData: `@import './src/styles/app.scss';`
    }
  }),
  prerender: {
    entries: [
      '/work/ford-drive/index.html',
      '/work/canon-photobooth/index.html',
      '/work/aptiv-sva/index.html',
      '/work/ford-specpods/index.html',
      '/work/saudi/index.html',
      '/work/canon-passport/index.html',
      '/about/',
      '/work/index.html'
    ]
  }
};

export default config;
