import type { Images } from "@/models/schema";
import { imagesSchema } from "@/models/schema";

export default async function fetchImages(
  url: string
): Promise<Images | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: process.env.PEXELS_API!,
      },
    });
    if (!res.ok) throw new Error("Image Fetch failed!!\n");

    const imagesResult: Images = await res.json();

    // console.log(imagesResult);

    const parsedData = imagesSchema.parse(imagesResult);

    // TODO CHANGE ERROR
    if (parsedData.total_results === 0) throw new Error("No images found!!\n");
    // console.log(parsedData);

    return parsedData;
  } catch (error) {
    console.log(error);
  }
}
