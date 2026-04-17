import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md'],
      layout: {
        _: resolve(__dirname, 'src/lib/components/blog/PostLayout.svelte')
      }
    })
  ],
  kit: {
    adapter: adapter()
  }
};

export default config;
