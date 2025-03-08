import React from "react";
import Image from "next/image";

const Mentoringsessions = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col w-full md:w-[30%] bg-white gap-6 p-4 rounded-2xl">
          <div className="flex gap-5">
            <Image src="/man.svg" width={15} height={15} />
            <div className="flex flex-col">
              <span className="font-semibold">Alex OZ</span>
              <span>You're the mentor</span>
            </div>
          </div>
          <span className="font-bold text-2xl">
            Introduction to Machine Learning
          </span>

          <div className="flex flex-col gap-3">
            <div className="flex justify-around">
              <div className="flex gap-2">
                <Image src="/calendar.svg" width={12} height={12} />
                <span>Nov 12, 3 pm</span>
              </div>
              <div className="flex gap-2">
                <Image src="/clock.svg" width={12} height={12} />
                <span>90 min</span>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <Image src="/video.svg" width={12} height={12} />
                <span>WebRTC video</span>
              </div>
              <div className="flex gap-2">
                <Image src="/user.svg" width={12} height={12} />
                <span>4 slots left</span>
              </div>
            </div>
          </div>

          <span className="bg-gray-300 w-fit p-1 rounded-2xl">
            Machine Learning
          </span>

          <div className="flex justify-between">
            <span className="flex gap-2 bg-amber-100 p-1 rounded-2xl w-fit">
              <Image
                src="/coins.svg"
                width={20}
                height={20}
                className="rounded-b-4xl"
              />
              <span>275 coins</span>
            </span>
            <button className="bg-orange-400 text-white p-2 rounded-2xl cursor-pointer">
              Manage Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentoringsessions;
