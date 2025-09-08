import { defineCollection, z } from "astro:content";

const dynasties = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		period: z.string(),
		description: z.string(),
	}),
});

export const collections = {
	dynasties,
};
