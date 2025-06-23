import { z } from 'zod';

const hashtagSchema = z.object({
	start: z.number(),
	end: z.number(),
	tag: z.string()
});

const urlSchema = z.object({
	start: z.number(),
	end: z.number(),
	url: z.string(),
	expanded_url: z.string(),
	display_url: z.string(),
	unwound_url: z.string(),
	status: z.number(),
	title: z.string(),
	description: z.string()
});

const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	profile_image_url: z.string(),
	username: z.string()
});

const twitterSchema = z.object({
	author_id: z.string(),
	created_at: z.string(),
	// edit_history_tweet_ids: z.array(z.string()),
	// entities: z.object({
	// 	hashtags: z.array(hashtagSchema),
	// 	urls: z.array(urlSchema)
	// }),
	id: z.string(),
	text: z.string()
});

const blogSchema = z.object({
	url: z.string(),
	date: z.string().optional(),
	title: z.string(),
	source: z.string().optional(),
	banner: z.string(),
	subtitle: z.string().optional()
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
