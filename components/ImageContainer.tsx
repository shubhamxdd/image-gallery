import type { Photo } from "@/models/schema";
import Image from "next/image";

type Props = {
  photo: Photo;
};

const ImageContainer = ({ photo }: Props) => {
  return (
    <>
      <div key={photo.id} className="h-64 bg-gray-200 rounded-xl">
        <Image src={photo.src.large} alt={photo.alt} width={250} height={250} />
      </div>
    </>
  );
};

export default ImageContainer;
