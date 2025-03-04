import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    tailwind({
      config: { path: './tailwind.config.cjs' }
    }),
    alpinejs(),
    react()
  ],
  site: 'https://your-domain.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
    ssr: {
      noExternal: ['@fontsource/*'],
    },
    optimizeDeps: {
      exclude: ['@astrojs/image', 'sharp']
    },
    plugins: [
      // ... other plugins
    ],
    assetsInclude: ['**/*.svg']
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    remotePatterns: [{ protocol: "https" }]
  }
});