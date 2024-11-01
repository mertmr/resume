import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
      devToolbar: {
        enabled: false
      },
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
