import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://khoasolo.com',
  trailingSlash: 'never',
  integrations: [
    // https://docs.astro.build/en/guides/integrations-guide/tailwind/
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
  ],
})
