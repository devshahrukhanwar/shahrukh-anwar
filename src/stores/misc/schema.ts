import { z } from 'zod';

const githubSchema = z.object({
	url: z.string(),
	banner: z.string()
});

export type GitHubSchema = z.infer<typeof githubSchema>;
