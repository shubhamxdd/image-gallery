import fetchImages from "@/lib/fetchImages";
import type { Images } from "@/models/schema";

const Gallery = async () => {
  const url = "https://api.pexels.com/v1/curated";
  const images: Images | undefined = await fetchImages(url);

  if (!images)
    return <h1 className="m-4 text-3xl font-bold">No Images Found!!</h1>;

  return (
    <section>
      <ul>
        {images.photos.map((photo) => (
          <li key={photo.id}>{photo.src.large}</li>
        ))}
      </ul>
    </section>
  );
};

export default Gallery;
