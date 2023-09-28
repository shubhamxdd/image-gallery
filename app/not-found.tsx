import Link from "next/link";

const notFound = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center text-3xl font-medium">
        404 Not Found
      </h1>
      <h1 className="flex justify-center items-center">Please check URL</h1>
      <div className="flex justify-center items-center">
        <button className="flex justify-center items-center font-semibold bg-zinc-500 hover:bg-zinc-600 hover:scale-[1.06] transform transition duration-200 text-white px-3 py-2 mt-1 rounded-md">
          <Link href="/">Go To homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default notFound;
