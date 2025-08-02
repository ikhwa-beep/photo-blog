// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import Sojourn from "./pages/sojourn.astro";
import Crusade from "./pages/crusade.astro";
import Memories from "./pages/memories.astro";
import Syams from "./pages/syams.astro";
// 2. Define a `type` and `schema` for each collection
const sojourn = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**\/[^_]*.mdx", base: "./src/content/sojourn" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const crusade = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**\/[^_]*.mdx", base: "./src/content/crusade" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const memories = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**\/[^_]*.mdx", base: "./src/content/memories" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const syams = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**\/[^_]*.mdx", base: "./src/content/syams" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const authors = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**\/[^_]*.mdx", base: "./src/content/authors" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const cv = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**\/[^_]*.mdx", base: "./src/content/cv" }),
  schema: z.object({
    title: z.string(),
    fullName: z.string().optional(),
    sections: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
      })
    ).optional(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    contacts: z.array(
      z.object({
        type: z.string(),
        value: z.string(),
        url: z.string(),
        icon: z.string(),
      })
    ).optional(),
    skills: z.array(
      z.object({
        name: z.string(),
        level: z.enum(["beginner", "intermediate", "advanced", "expert"]),
        category: z.string().optional(),
      })
    ).optional(),
    languages: z.array(
      z.object({
        language: z.string(),
        proficiency: z.string(),
        level: z.enum(["beginner", "intermediate", "advanced", "expert"]).optional(),
      })
    ).optional(),
    education: z.array(
      z.object({
        institution: z.string(),
        degree: z.string(),
        dateRange: z.union([
          z.string(), 
          z.object({
            start: z.string(),
            end: z.string().optional()
          })
        ]),
      })
    ).optional(),
    companies: z.array(
      z.object({
        name: z.string(),
        positions: z.array(
          z.object({
            title: z.string(),
            dateRange: z.union([
              z.string(), 
              z.object({
                start: z.string(),
                end: z.string().optional()
              })
            ]),
            responsibilities: z.array(z.string()),
            achievements: z.array(z.string()).optional(),
          })
        ),
      })
    ).optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  Sojourn,
  Crusade,
  Memories,
  Syams,
  authors,
  cv,
};
