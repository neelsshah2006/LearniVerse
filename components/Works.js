import React from "react";
import WorksCard from "./WorksCard";

const Works = () => {
  let data = [
    {
      img: "/earn.svg",
      main: "Earn by Teaching",
      para: "Mentor others in your area of expertise and earn coins for every successful session.",
    },
    {
      img: "/cohort.svg",
      main: "Join Learning Cohorts",
      para: "Participate in structured learning paths with peers who share your goals.",
    },
    {
      img: "/mentoring.svg",
      main: "Live Mentoring",
      para: "Connect with mentors through high-quality video sessions for personalized learning.",
    },
    {
      img: "/workshop.svg",
      main: "Professional Workshops",
      para: "Access exclusive workshops hosted by industry-leading companies.",
    },
    {
      img: "/knowledge.svg",
      main: "Knowledge Marketplace",
      para: "Use your earned coins to access premium content and mentoring sessions.",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-around items-center gap-3 p-3">
        <div className="flex flex-col gap-5 justify-center items-center p-10 md:max-w-[60%]">
          <h2 className="text-3xl font-bold">How LearniVerse Works?</h2>
          <p className="text-center">
            Our platform creates a sustainable learning ecosystem where
            knowledge sharing is rewarded and everyone has access to quality
            education.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3  justify-center items-center gap-5">
          {data.map((val) => {
            return <WorksCard img={val.img} name={val.main} para={val.para} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Works;
