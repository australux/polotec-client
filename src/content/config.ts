import { z, defineCollection } from "astro:content";

const newsShema = z.object({
    title: z.string(),
    headline: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
    }),
});

const coursesSchema = z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
    }),
});

const offersSchema = z.object({
    title: z.string(),
    description: z.string(),
    toDate: z.string(),
    url: z.string(),
});

const newsCollection = defineCollection({
    type: "content",
    schema: newsShema,
});

const coursesCollection = defineCollection({
    type: "content",
    schema: coursesSchema,
});

const offersCollection = defineCollection({
    type: "content",
    schema: offersSchema,
});

export const collections = {
    news: newsCollection,
    courses: coursesCollection,
    offers: offersCollection,
};
