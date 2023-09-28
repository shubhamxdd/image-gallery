import Gallery from "@/components/Gallery";
import React from "react";

interface Props {
  params: { params: (string | undefined)[] };
}

export function generateMetadata({ params: { params } }: Props) {
  const topic = params?.[0] ?? "curated";
  const page = params?.[1] ?? "1";
  return {
    title: `Results for: ${topic} - page: ${page}`,
  };
}

const Search = ({ params: { params } }: Props) => {
  const topic = params?.[0] ?? "curated";
  const page = params?.[1] ?? "1";
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold capitalize dark:text-white">
        Images for: {params}
      </h1>
      <Gallery topic={topic} page={page} />
    </div>
  );
};

export default Search;
