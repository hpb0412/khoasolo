import { defineConfig } from 'astro/config'
import lastmod from './lastmod.json'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

const DOMAIN = 'https://khoasolo.com'

// https://astro.build/config
export default defineConfig({
  site: DOMAIN,
  /* trailingSlash: 'never', */
  integrations: [
    // https://docs.astro.build/en/guides/integrations-guide/tailwind/
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap({
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const key = item.url.replace(DOMAIN, '')
        const foundDate = lastmod[key]

        if (foundDate) {
          item.lastmod = new Date(foundDate)
        }

        return item
      },
    }),
    robotsTxt({
      host: true,
    }),
  ],
  experimental: {
    assets: true,
  },
})
