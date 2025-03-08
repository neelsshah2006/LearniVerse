import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SessionForm = () => {
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [frequency, setFrequency] = useState("");

  const allSkills = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Ruby",
    "PHP",
    "Swift",
    "Kotlin",
    "Go",
    "Rust",
    "TypeScript",
    "SQL",
    "NoSQL",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "Machine Learning",
    "Data Science",
    "DevOps",
    "Cybersecurity",
    "Blockchain",
    "AI",
    "Big Data",
    "English",
    "Hindi",
  ];

  const handleSkillChange = (e) => {
    const value = e.target.value;
    setSkillInput(value);
  };

  const addSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setSkillInput("");
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, skills, time, duration, frequency });
  };

  return (
    <div className="bg-gray-200 w-screen h-fit flex flex-col gap-10 p-4 md:p-8">
      <div className="flex h-15 w-full items-center px-3">
        <Link href={"/postLogin/dashboard"} className="flex items-center gap-3">
          <Image src={"/leftArrow.svg"} width={24} height={24} alt="Back" />
          <h4>Back to Dashboard</h4>
        </Link>
      </div>
      <div className="mx-auto w-full max-w-md">
        <div className="bg-white flex flex-col p-6 md:p-10 justify-center items-center gap-6 md:gap-10 rounded-2xl shadow-2xs">
          <h1 className="text-2xl md:text-3xl font-extrabold">
            Create Session
          </h1>
          <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2">Title:</label>
              <input
                type="text"
                placeholder="Enter session title"
                className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2">Skills it belongs to:</label>
              <input
                type="text"
                placeholder="Enter skills"
                className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                value={skillInput}
                onChange={handleSkillChange}
              />
              {skillInput && (
                <div className="bg-white border border-gray-300 rounded-md mt-2 max-h-40 overflow-y-auto">
                  {allSkills
                    .filter((skill) =>
                      skill.toLowerCase().includes(skillInput.toLowerCase())
                    )
                    .map((skill) => (
                      <div
                        key={skill}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => addSkill(skill)}
                      >
                        {skill}
                      </div>
                    ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-300 text-gray-700 p-2 rounded-2xl flex items-center gap-2"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="text-red-500"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-2">Time of session:</label>
              <input
                type="time"
                className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2">
                Total duration of each session:
              </label>
              <input
                type="text"
                placeholder="Enter duration (e.g., 90 min)"
                className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2">Classes will be how:</label>
              <select
                className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              >
                <option value="">Select frequency</option>
                <option value="everyday">Everyday</option>
                <option value="alternate days">Alternate days</option>
                <option value="weekly">Weekends</option>
              </select>
            </div>
            <div className="flex w-full justify-center items-center bg-black text-white py-2 text-xl rounded-xl">
              <button type="submit" className="cursor-pointer w-full">
                Create Session
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SessionForm;
