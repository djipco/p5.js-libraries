import { z, defineCollection } from "astro:content";
import { author, image } from "../shared";

const categories = [
  "drawing",
  "color",
  "ui",
  "math",
  "physics",
  "algorithms",
  "3d",
  "ai-ml-cv",
  "animation",
  "filters",
  "language",
  "hardware",
  "sound",
  "data",
  "networking",
  "export",
  "utils",
] as const;

/**
 * Content collection for the Libraries section of the site.
 */
export const librariesCollection = defineCollection({
  type: "data",
  schema: z.object({
    // Name of the library
    name: z.string(),
    // Description of the library
    description: z.string(),
    // Which category the library falls in
    category: z.enum(categories),
    // Url to the source of the library (for example: on GitHub)
    sourceUrl: z.string().url(),
    // Url to a website for the library
    websiteUrl: z.string().url().optional(),
    // 1500x1000
    featuredImage: image(),
    author: author(),
    // What license is the library licensed with?
    license: z.string().optional(),
    npm: z.string().optional(),
    npmFilePath: z.string().optional(),
  }),
});
