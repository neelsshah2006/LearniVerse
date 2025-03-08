import React from "react";
import Image from "next/image";

const Mentoringsessions = () => {
  return (

    <div className="flex flex-col md:flex-row items-center gap-4 p-4">
      <div className="hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col w-full md:w-[30%] bg-white gap-6 p-6 rounded-2xl max-w-md">
        <div className="flex gap-5 items-center">
          <Image src="/man.svg" width={40} height={40} alt="Mentor" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Alex OZ</span>
            <span className="text-gray-500">You're the mentor</span>
          </div>
        </div>
        <span className="font-bold text-2xl text-gray-800">
          Introduction to Machine Learning
        </span>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-2 items-center">
              <Image
                src="/calendar.svg"
                width={20}
                height={20}
                alt="Calendar"
              />
              <span className="text-gray-600">Nov 12, 3 pm</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/clock.svg" width={20} height={20} alt="Clock" />
              <span className="text-gray-600">90 min</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/video.svg" width={20} height={20} alt="Video" />
              <span className="text-gray-600">WebRTC video</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/user.svg" width={20} height={20} alt="User" />
              <span className="text-gray-600">4 slots left</span>
            </div>
          </div>
        </div>
        <span className="bg-gray-300 text-gray-700 w-fit p-2 rounded-2xl">
          Machine Learning
        </span>
        <div className="flex justify-between items-center">
          <span className="flex gap-2 bg-amber-100 text-gray-800 p-2 rounded-2xl w-fit">
            <Image src="/coins.svg" width={20} height={20} alt="Coins" />
            <span>275 coins</span>
          </span>
          <button className="bg-orange-400 text-white p-2 rounded-2xl cursor-pointer hover:bg-orange-500 transition-colors">
            Manage Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mentoringsessions;
