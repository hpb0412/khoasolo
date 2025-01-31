import { defineConfig } from 'astro/config'
import lastmod from './lastmod.json'

// https://astro.build/config
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

const DOMAIN = 'https://khoasolo.com'

// https://astro.build/config
export default defineConfig({
  site: DOMAIN,
  /* trailingSlash: 'never', */
  integrations: [
    mdx(),
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
  experimental: {},
})
