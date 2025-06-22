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

const postSchema = z.object({
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

export const twitterSchema = z.object({
	twitter: z.object({
		user: userSchema,
		tweets: z.array(postSchema)
	})
});

export type TwitterSchema = z.infer<typeof twitterSchema>;
