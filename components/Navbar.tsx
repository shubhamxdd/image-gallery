"use client";

import { GrGallery } from "react-icons/gr";
import Link from "next/link";
import Search from "./Search";
import { useState } from "react";

const Navbar = () => {
  const darkMode = () => {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  };
  return (
    <div className="max-w-6xl mx-auto py-3 px-[7px] flex justify-between">
      <Link href="/">
        <p className="max-md:hidden text-2xl ml-1 dark:text-white ">
          imgGallery
        </p>
        <div className="max-md:flex hidden ml-5 py-1">
          <GrGallery size={30} />
        </div>
      </Link>
      <Search />
      <button
        onClick={darkMode}
        className="flex justify-center items-center font-semibold bg-zinc-500 hover:bg-zinc-600 hover:scale-[1.06] transform transition duration-200 text-white px-3 py-2 mt-1 rounded-md"
      >
        Toggle mode
      </button>
    </div>
  );
};

export default Navbar;
