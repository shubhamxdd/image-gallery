import { getPlaiceholder } from "plaiceholder";
import type { Photo, Images } from "@/models/schema";

const getBase64 = async (imageUrl: string) => {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    console.log(error);
  }
};

export default async function addBlurredDataUrls(
  images: Images
): Promise<Photo[]> {
  const base64Promises = images.photos.map((photo) =>
    getBase64(photo.src.large)
  );
  const base64Result = await Promise.all(base64Promises);

  const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
    photo.blurredDataUrl = base64Result[i];
    return photo;
  });
  return photosWithBlur;
}
