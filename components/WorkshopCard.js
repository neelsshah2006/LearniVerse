import React from "react";
import Image from "next/image";

const WorkshopCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4">
      <div className="hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col w-full md:w-[30%] bg-white gap-6 p-6 rounded-2xl max-w-md">
        <div className="flex gap-5 items-center">
          <Image src="/brandLogo.png" width={40} height={40} alt="Brand Logo" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Brand Partnership</span>
            <span className="text-gray-500">Upcoming Workshop</span>
          </div>
        </div>
        <span className="font-bold text-2xl text-gray-800">
          Introduction to Advanced React
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
              <span className="text-gray-600">Dec 15, 10 am</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/clock.svg" width={20} height={20} alt="Clock" />
              <span className="text-gray-600">120 min</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/video.svg" width={20} height={20} alt="Video" />
              <span className="text-gray-600">On LearniVerse</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/user.svg" width={20} height={20} alt="User" />
              <span className="text-gray-600">10 slots left</span>
            </div>
          </div>
        </div>
        <span className="bg-gray-300 text-gray-700 w-fit p-2 rounded-2xl">
          Advanced React
        </span>
        <div className="flex justify-between items-center">
          <span className="flex gap-2 bg-green-100 text-gray-800 p-2 rounded-2xl w-fit">
            <Image src="/rupee.svg" width={10} height={10} alt="Coins" />
            <span>200/-</span>
          </span>
          <button className="bg-blue-500 text-white p-2 rounded-2xl cursor-pointer hover:bg-blue-600 transition-colors">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
