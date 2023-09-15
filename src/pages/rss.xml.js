import rss from '@astrojs/rss'
import { getAllBlogPosts } from '@/data/content'

export async function get() {
  const posts = await getAllBlogPosts()

  return rss({
    title: 'Khoa Solo | Blog',
    description: 'Khoa\'s corner on Internet',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}
