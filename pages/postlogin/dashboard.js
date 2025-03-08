import Image from "next/image";
import Navbar from "@/components/Navbar";
import Learningcohorts from "@/components/Learningcohorts";
import Upcomingsessions from "@/components/Upcomingsessions";
import Mentoringsessions from "@/components/Mentoringsessions";
import AddSession from "@/components/AddSession";
import Head from "next/head";
import clientPromise from "@/lib/mongodb";
import Cookies from "js-cookie";

const Dashboard = ({ user }) => {
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
              <Image src="/man.svg" width={20} height={20} alt="User" />
              <span className="text-2xl md:text-3xl font-bold">
                Welcome back, {user.name}
              </span>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <span className="flex gap-2 bg-amber-100 p-1 rounded-2xl items-center">
                <Image
                  src="/coins.svg"
                  width={20}
                  height={20}
                  className="rounded-b-4xl"
                  alt="Coins"
                />{" "}
                <span>{user.coins} coins</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="bg-white w-full md:w-[30%] flex gap-5 p-3 rounded-2xl items-center">
            <div className="bg-blue-400 rounded-full w-10 h-10 flex justify-center">
              <Image
                src="/calendar.svg"
                width={20}
                height={20}
                alt="Calendar"
              />
            </div>
            <div className="flex flex-col">
              <span>Enrolled Cohorts</span>
              <span className="text-3xl font-semibold">
                {user.enrolledCohorts}
              </span>
            </div>
          </div>
          <div className="bg-white w-full md:w-[30%] flex gap-5 p-3 rounded-2xl items-center">
            <div className="bg-amber-400 rounded-full w-10 h-10 flex justify-center">
              <Image src="/clock.svg" width={20} height={20} alt="Clock" />
            </div>
            <div className="flex flex-col">
              <span>Hours Mentored</span>
              <span className="text-3xl font-semibold">
                {user.hoursMentored}
              </span>
            </div>
          </div>
          <div className="bg-white w-full md:w-[30%] flex gap-5 p-3 rounded-2xl items-center">
            <div className="bg-green-400 rounded-full w-10 h-10 flex justify-center">
              <Image src="/card.svg" width={20} height={20} alt="Card" />
            </div>
            <div className="flex flex-col">
              <span>Coins Earned</span>
              <span className="text-3xl font-semibold">{user.coinsEarned}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <span className="text-2xl">Your Learning Cohorts</span>
          <Learningcohorts cohorts={user.learningCohorts} />
        </div>

        <div className="flex flex-col gap-7">
          <span className="text-2xl">Your Upcoming Sessions</span>
          <Upcomingsessions sessions={user.upcomingSessions} />
        </div>

        <div className="flex flex-col gap-7">
          <span className="text-2xl">Your Mentoring Sessions</span>
          <Mentoringsessions sessions={user.mentoringSessions} />
          <AddSession />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const client = await clientPromise;
  const db = client.db("learniverse");

  const user = await db.collection("users").findOne({ token });

  if (!user) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default Dashboard;
