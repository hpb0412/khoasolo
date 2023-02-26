import { getCollection } from 'astro:content'

export function getAllBlogPosts() {
  return getCollection('posts')
}
