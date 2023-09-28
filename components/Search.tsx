"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search/${searchQuery}`);
          setSearchQuery("");
        }}
      >
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search"
        />
      </form>
    </>
  );
};

export default Search;
