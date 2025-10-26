import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Define a schema for dynasty metadata
const dynastySchema = z.object({
	title: z.string(), // e.g., "Dynasty 1"
	period: z.string().optional(), // e.g., "c. 3100–3000 BCE"
	description: z.string().optional(),
});

// Define a single collection for all dynasty Markdown files
const dynastyCollection = defineCollection({
	loader: glob({
		base: "./src/pages/dynasty",
		pattern: "*.md", // Load all .md files in src/dynasty/
	}),
	schema: dynastySchema,
});

export const collections = {
	dynasty: dynastyCollection,
};
