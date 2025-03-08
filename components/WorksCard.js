import Image from "next/image";
import React from "react";

const WorksCard = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-start bg-white p-5 rounded-2xl gap-5 max-w-100 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <div className="bg-black p-3 rounded-2xl">
          {<Image className="invert" src={props.img} width={24} height={24} />}
        </div>
        <h3 className="text-xl font-semibold">{props.name}</h3>
        <p>{props.para}</p>
      </div>
    </>
  );
};

export default WorksCard;
