import React from "react";
import WorkshopCard from "./WorkshopCard";
import Image from "next/image";
import Link from "next/link";

const UpcomingWorkshops = () => {
  return (
    <div className="flex gap-3 flex-col p-10 lg:px-30 mb-10 bg-gray-100">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Brand Workshops</h2>
        <Link href="/contact" className="cursor-pointer">
          <Image src={"/add.svg"} width={50} height={50} />
        </Link>
      </div>
      <WorkshopCard />
    </div>
  );
};

export default UpcomingWorkshops;
