import React from 'react'
import Image from "next/image";

const Learningcohorts = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div className="bg-white flex flex-col gap-5 p-4 rounded-2xl w-full md:w-[30%]">
        <span className="font-bold text-2xl">Data Science Fundamentals</span>
        <div className="flex gap-2 items-center">
          <Image src="/calendar.svg" width={12} height={12} />
          <span>Next session: Tomorrow 3pm</span>
        </div>
        <div>
          <button className="hover:bg-orange-300 font-semibold border p-2 rounded-md">Continue Learning</button>
        </div>
      </div>
    </div>
  )
}

export default Learningcohorts