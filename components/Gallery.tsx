import fetchImages from "@/lib/fetchImages";
import type { Images } from "@/models/schema";
import ImageContainer from "./ImageContainer";
import addBlurredDataUrls from "@/lib/getBase64";

interface Props {
  topic?: string | undefined;
}

const Gallery = async ({ topic }: Props) => {
  const url = topic
    ? `https://api.pexels.com/v1/search?query=${topic}`
    : "https://api.pexels.com/v1/curated";
  const images: Images | undefined = await fetchImages(url);

  if (!images)
    return <h1 className="m-4 text-3xl font-bold">No Images Found!!</h1>;

  const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {photosWithBlur.map((photo) => (
        <ImageContainer photo={photo} key={photo.id} />
      ))}
    </section>
  );
};

export default Gallery;
