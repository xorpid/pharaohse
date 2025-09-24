// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Define a schema for dynasty metadata
const dynastySchema = z.object({
	title: z.string(), // e.g., "Dynasty 1"
	period: z.string().optional(), // e.g., "c. 3100–3000 BCE"
	description: z.string().optional(),
});

// Explicitly type dynastyCollections to resolve TS(7053)
const dynastyCollections: Record<string, any> = {};
for (let i = 1; i <= 31; i++) {
	dynastyCollections[`dynasty${i}`] = defineCollection({
		// Remove 'type' if using Astro 5.0+; it's optional and defaults to 'content'
		loader: glob({
			base: `./src/dynasty/${i}`,
			pattern: "info.md", // Only load info.md for dynasty metadata
		}) as any, // Temporary type assertion to bypass TS(2322)
		schema: dynastySchema,
	});
}

export const collections = dynastyCollections;
