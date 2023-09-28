import { GrGallery } from "react-icons/gr";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto py-3 px-[7px] flex justify-between">
      <Link href="/">
        <p className="max-md:hidden text-2xl ml-1">imgGallery</p>
        <div className="max-md:flex hidden ml-5 py-1">
          <GrGallery size={30} />
        </div>
      </Link>
      <input
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Search"
      />
    </div>
  );
};

export default Navbar;
