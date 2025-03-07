import Image from "next/image";

const dashboard = () => {
  return (
    <div className="bg-gray-200 p-12 flex gap-12 flex-col">
      {/* import navigation bar */}
      <div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Image src="/man.svg" width={20} height={20} className="rounded-b-4xl" />
            <span className="text-2xl font-bold">Welcome back, Parth Gandhi</span>
          </div>
          <div className="flex gap-2">
            <span className="flex gap-2 bg-amber-100 p-1 rounded-2xl">
              <Image src="/coins.svg" width={20} height={20} className="rounded-b-4xl" />
              <span>275 coins</span>
            </span>
            <span className="bg-white p-2 rounded-2xl">Get more coins</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="bg-white w-[30%] flex gap-5 p-3 rounded-2xl">
          <Image src="/calendar.svg" width={20} height={20} />
          <div className="flex flex-col">
            <span>Enrolled contents</span>
            <span className="text-3xl">2</span>
          </div>
        </div>
        <div className="bg-white w-[30%] flex gap-5 p-3 rounded-2xl">
          <Image src="/calendar.svg" width={20} height={20} />
          <div className="flex flex-col">
            <span>Active Sessions</span>
            <span className="text-3xl">5</span>
          </div>
        </div>
        <div className="bg-white w-[30%] flex gap-5 p-3 rounded-2xl">
          <Image src="/calendar.svg" width={20} height={20} />
          <div className="flex flex-col">
            <span>Completed Courses</span>
            <span className="text-3xl">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;