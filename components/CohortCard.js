import React from "react";
import Image from "next/image";

const CohortCard = () => {
  return (
    <>
      <div className="hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col w-full md:w-[30%] bg-white gap-6 p-4 rounded-2xl outline oultine-gray-100">
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
          <button className="bg-black text-white p-2 rounded-2xl cursor-pointer">
            Book seat
          </button>
        </div>
      </div>
    </>
  );
};

export default CohortCard;
