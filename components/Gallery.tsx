import fetchImages from "@/lib/fetchImages";
import type { Images } from "@/models/schema";
import ImageContainer from "./ImageContainer";

const Gallery = async () => {
  const url = "https://api.pexels.com/v1/curated";
  const images: Images | undefined = await fetchImages(url);

  if (!images)
    return <h1 className="m-4 text-3xl font-bold">No Images Found!!</h1>;

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {images.photos.map((photo) => (
        <ImageContainer photo={photo} key={photo.id} />
      ))}
    </section>
  );
};

export default Gallery;
