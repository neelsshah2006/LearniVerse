import React from "react";
import Link from "next/link";
import Image from "next/image";

const AddSession = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4">
      <div className="hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col w-full md:w-[30%] bg-white gap-6 p-6 rounded-2xl max-w-md">
        <div className="flex gap-5 items-center">
          <Image src="/add.svg" width={40} height={40} alt="Add Session" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Create New Session</span>
            <span className="text-gray-500">Start a new mentoring session</span>
          </div>
        </div>
        <span className="font-bold text-2xl text-gray-800">
          Add a New Mentoring Session
        </span>
        <div className="flex justify-between items-center">
          <Link href="/createSession">
            <button className="bg-blue-500 text-white p-2 rounded-2xl cursor-pointer hover:bg-blue-600 transition-colors">
              Create Session
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddSession;