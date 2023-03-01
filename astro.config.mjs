import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    // https://docs.astro.build/en/guides/integrations-guide/tailwind/
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
})
