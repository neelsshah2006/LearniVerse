import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Buttons from "./Buttons";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="w-full h-20 flex items-center sticky top-0 px-4 py-2 bg-white shadow-md z-10">
      <Link
        className="flex gap-2 items-center justify-center text-2xl font-bold mr-4"
        href={isLoggedIn ? "/postLogin/dashboard" : "/"}
      >
        <Image src="/logo.png" alt="LearniVerse Logo" width={50} height={50} />
        LearniVerse
      </Link>
      <div className="hidden md:flex flex-grow justify-center gap-10 font-semibold">
        <ScrollLink
          to="PopularCohort"
          smooth={true}
          duration={500}
          className="hover:text-blue-700 cursor-pointer"
        >
          Cohorts
        </ScrollLink>
        <Link className="hover:text-blue-700" href="/">
          Doubts
        </Link>
        <ScrollLink
          to="UpcomingWorkshops"
          smooth={true}
          duration={500}
          className="hover:text-blue-700"
          href="/"
        >
          WorkShops
        </ScrollLink>
      </div>
      <div className="flex gap-5 items-center">
        {!isLoggedIn && <Buttons />}
      </div>
    </div>
  );
};

export default Navbar;
