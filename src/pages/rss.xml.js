import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function get() {
  const allPosts = await getCollection('posts')
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://my-blog-site.netlify.app',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}
