import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex items-center sticky top-0 px-4 py-2 bg-white shadow-md z-10">
      <Link
        className="flex gap-2 items-center justify-center text-2xl font-bold mr-4"
        href="/"
      >
        <Image src="/logo.png" alt="LearniVerse Logo" width={50} height={50} />
        LearniVerse
      </Link>
      <div className="hidden md:flex flex-grow justify-center gap-10 font-semibold">
        <Link className="hover:text-blue-700" href="/">
          Cohorts
        </Link>
        <Link className="hover:text-blue-700" href="/">
          Doubts
        </Link>
        <Link className="hover:text-blue-700" href="/">
          WorkShops
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <button className="border-2 rounded-2xl px-3 py-1 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105">
          Login
        </button>
        <button className="border-2 rounded-2xl px-3 py-1 cursor-pointer bg-black text-white transition-all duration-200 ease-in-out hover:scale-105">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;