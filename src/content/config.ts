import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    /* author: z.string(), */
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
        w: z.number(),
        h: z.number(),
      })
      .optional(),
  }),
})

export const collections = {
  posts: postCollection,
}
