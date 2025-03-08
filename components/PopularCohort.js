import React from "react";
import CohortCard from "./CohortCard";

const PopularCohort = () => {
  return (
    <div className="flex gap-3 flex-col p-10 lg:px-30">
      <div className="text-3xl font-bold">Popular Cohorts</div>
      <p>
        Join structured learning paths with peers who share your goals and
        interests.
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <CohortCard />
      </div>
    </div>
  );
};

export default PopularCohort;
