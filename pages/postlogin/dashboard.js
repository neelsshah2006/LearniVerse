import Image from "next/image";
import Navbar from "@/components/Navbar";
import Learningcohorts from "@/components/Learningcohorts";
import Upcomingsessions from "@/components/Upcomingsessions";
import Mentoringsessions from "@/components/Mentoringsessions";
import AddSession from "@/components/AddSession";
import Head from "next/head";

const dashboard = () => {
  return (
    <>
      <Head>
        <title>LearniVerse - Dashboard</title>
        <meta
          name="description"
          content="Dashboard of LearniVerse with your learning and mentoring sessions."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="bg-gray-100 px-4 flex flex-col gap-12">
        <Navbar />
        <div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex gap-3 items-center">
              <Image src="/man.svg" width={20} height={20} />
              <span className="text-2xl md:text-3xl font-bold">
                Welcome back, Parth Gandhi
              </span>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <span className="flex gap-2 bg-amber-100 p-1 rounded-2xl items-center">
                <Image
                  src="/coins.svg"
                  width={20}
                  height={20}
                  className="rounded-b-4xl"
                />{" "}
                <span>275 coins</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="bg-white w-full md:w-[30%] flex gap-5 p-3 rounded-2xl items-center">
            <div className="bg-blue-400 rounded-full w-10 h-10 flex justify-center">
              <Image src="/calendar.svg" width={20} height={20} />
            </div>
            <div className="flex flex-col">
              <span>Enrolled Cohorts</span>
              <span className="text-3xl font-semibold">2</span>
            </div>
          </div>
          <div className="bg-white w-full md:w-[30%] flex gap-5 p-3 rounded-2xl items-center">
            <div className="bg-amber-400 rounded-full w-10 h-10 flex justify-center">
              <Image src="/clock.svg" width={20} height={20} />
            </div>
            <div className="flex flex-col">
              <span>Hours Mentored</span>
              <span className="text-3xl font-semibold">5</span>
            </div>
          </div>
          <div className="bg-white w-full md:w-[30%] flex gap-5 p-3 rounded-2xl items-center">
            <div className="bg-green-400 rounded-full w-10 h-10 flex justify-center">
              <Image src="/card.svg" width={20} height={20} />
            </div>
            <div className="flex flex-col">
              <span>Coins Earned</span>
              <span className="text-3xl font-semibold">350</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <span className="text-2xl">Your Learning Cohorts</span>
          <Learningcohorts />
        </div>

        <div className="flex flex-col gap-7">
          <span className="text-2xl">Your Upcoming Sessions</span>
          <Upcomingsessions />
        </div>

        <div className="flex flex-col gap-7">
          <span className="text-2xl">Your Mentoring Sessions</span>
          <Mentoringsessions />
          <AddSession />
        </div>
      </div>
    </>
  );
};

export default dashboard;
