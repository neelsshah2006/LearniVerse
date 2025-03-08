import React from "react";
import Capsule from "./Capsule";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  const router = useRouter();
  const SignUpHandler = () => {
    router.push("/auth/signup");
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center gap-4 px-4">
      <div className="w-100 h-100 bg-orange-50 blur-lg rounded-full absolute z-[-1]"></div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
        <Capsule value="Learn" />
        <Capsule value="Mentor" />
        <Capsule value="Earn" />
      </h1>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        The Peer-to-Peer <br className="hidden md:block" />
        Learning Community
      </h2>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Join a community where knowledge has value. Earn coins by mentoring
        others, then spend them to learn new skills from experts.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          className="bg-black hover:scale-105 transition-all duration-200 ease-in-out text-white font-semibold py-3 px-8 rounded-lg"
          onClick={SignUpHandler}
        >
          Join Learniverse
        </button>
        <ScrollLink
          to="PopularCohort"
          smooth={true}
          duration={500}
          className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors cursor-pointer"
        >
          Browse Cohorts
        </ScrollLink>
      </div>
    </div>
  );
};

export default HeroSection;
