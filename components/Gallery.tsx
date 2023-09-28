import fetchImages from "@/lib/fetchImages";
import type { Images } from "@/models/schema";
import ImageContainer from "./ImageContainer";
import addBlurredDataUrls from "@/lib/getBase64";
import pagination from "@/lib/pagination";
import Footer from "./Footer";

interface Props {
  topic?: string | undefined;
  page?: string | undefined;
}

const Gallery = async ({ topic = "curated", page }: Props) => {
  let url;
  if (topic === "curated" && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (topic === "curated") {
    url = `https://api.pexels.com/v1/curated`;
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }

  const images: Images | undefined = await fetchImages(url);

  if (!images || images.per_page === 0)
    return (
      <h1 className="m-4 text-3xl font-bold dark:text-white">
        No Images Found!!
      </h1>
    );

  const photosWithBlur = await addBlurredDataUrls(images);

  const { prevPage, nextPage } = pagination(images);

  const footerProps = { topic, page, nextPage, prevPage };

  return (
    <>
      <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
        {photosWithBlur.map((photo) => (
          <ImageContainer photo={photo} key={photo.id} />
        ))}
      </section>
      <Footer {...footerProps} />
    </>
  );
};

export default Gallery;
