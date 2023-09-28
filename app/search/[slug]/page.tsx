import Gallery from "@/components/Gallery";
import React from "react";

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `Results for: ${slug}`,
  };
}

const Search = ({ params: { slug } }: Props) => {
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold capitalize">
        Images for: {slug}
      </h1>
      <Gallery topic={slug} />
    </div>
  );
};

export default Search;
