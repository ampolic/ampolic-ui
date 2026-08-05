// Astro config exists ONLY for the local playground + `astro check` smoke test.
// The published package is plain .astro source; nothing here ships.
import { defineConfig, passthroughImageService } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  srcDir: './playground',
  // Playground-only: no sharp dependency here — components using astro:assets
  // <Image> (TeamMemberCard, WorkCard) render via passthrough in the smoke build;
  // consuming sites bring their own image service.
  image: { service: passthroughImageService() },
  integrations: [icon()],
  vite: { plugins: [tailwindcss()] },
});
