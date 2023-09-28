import z from "zod";

const imageSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
  total_results: z.number(),
});

const photoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
});

export const imagesSchema = imageSchema.extend({
  photos: z.array(photoSchema),
});

export type Photo = z.infer<typeof photoSchema>;
export type Images = z.infer<typeof imagesSchema>;