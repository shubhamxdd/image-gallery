import fetchImages from "@/lib/fetchImages";
import type { Images } from "@/models/schema";

const Gallery = async () => {
  const url = "https://api.pexels.com/v1/curated";
  const images: Images | undefined = await fetchImages(url);

  if (!images)
    return <h1 className="m-4 text-3xl font-bold">No Images Found!!</h1>;

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
        {images.photos.map((photo) => (
          <div key={photo.id} className="h-64 bg-gray-200 rounded-xl">{photo.src.large}</div>
        ))}
    </section>
  );
};

export default Gallery;
