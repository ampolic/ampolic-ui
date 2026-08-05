// Astro config exists ONLY for the local playground + `astro check` smoke test.
// The published package is plain .astro source; nothing here ships.
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  srcDir: './playground',
  integrations: [icon()],
  vite: { plugins: [tailwindcss()] },
});
