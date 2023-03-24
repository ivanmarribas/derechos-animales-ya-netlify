import { z, defineCollection } from "astro:content";

const BlogPosts = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    category: z.string().trim(),
    author: z.string().trim(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    publishDate: z.string().transform((str) => new Date(str)).optional(),
  }),
});

export const collections = {
  blog: BlogPosts,
};
