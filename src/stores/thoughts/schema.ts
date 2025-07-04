import { z } from 'zod';

const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	profile_image_url: z.string(),
	username: z.string()
});

const twitterSchema = z.object({
	author_id: z.string(),
	created_at: z.string(),
	id: z.string(),
	text: z.string()
});

const blogSchema = z.object({
	url: z.string(),
	date: z.string().optional(),
	title: z.string(),
	source: z.string().optional(),
	banner: z.string(),
	subtitle: z.string().optional(),
	tags: z.array(z.string()).optional()
});

export const socialSchema = z.object({
	blogs: z.array(blogSchema),
	twitter: z.object({
		user: userSchema,
		tweets: z.array(twitterSchema)
	})
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type SocialSchema = z.infer<typeof socialSchema>;
