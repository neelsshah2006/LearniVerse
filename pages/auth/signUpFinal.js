import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const signUpFinal = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); 
    if (token) {
      try {
        const decoded = jwt.decode(token); 
        setUserId(decoded.id); 
      } catch (error) {
        console.error("Invalid token", error);
        alert("Invalid token. Please login again.");
        router.push("/auth/login");
      }
    } else {
      alert("Token not found! Redirecting...");
      router.push("/auth/login");
    }
  }, []);

  const [education, setEducation] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [gender, setGender] = useState("");
  const [skillInput, setSkillInput] = useState("");

  const allSkills = [
    "JavaScript", "Python", "Java", "C++", "React", "Node.js", "HTML", "CSS",
    "Ruby", "PHP", "Swift", "Kotlin", "Go", "Rust", "TypeScript", "SQL",
    "NoSQL", "GraphQL", "Docker", "Kubernetes", "AWS", "Azure", "GCP",
    "Machine Learning", "Data Science", "DevOps", "Cybersecurity",
    "Blockchain", "AI", "Big Data", "English", "Hindi",
  ];

  const handleSkillChange = (e) => {
    setSkillInput(e.target.value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("User ID not found!");
      return;
    }

    try {
      const response = await fetch("/api/updateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, education, bio, skills, gender }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to save data.");
        return;
      }

      alert("Profile updated successfully!");
      router.push("/auth/dashboard"); // Redirect to dashboard or another page
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const filteredSkills = allSkills.filter(
    (skill) =>
      skill.toLowerCase().includes(skillInput.toLowerCase()) &&
      !skills.includes(skill)
  );

  return (
    <>
      <Head>
        <title>Complete Sign Up - LearniVerse</title>
      </Head>
      <div className="bg-gray-200 w-screen h-screen flex flex-col gap-3 p-4 md:p-8">
        <div className="mx-auto w-full max-w-md">
          <div className="bg-white flex flex-col p-6 md:p-10 justify-center items-center gap-6 md:gap-10 rounded-2xl shadow-2xs">
            <h1 className="text-2xl md:text-3xl font-extrabold">Basic Details</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
              <div>
                <label className="block mb-2">Educational Details:</label>
                <input
                  type="text"
                  placeholder="Enter your educational details"
                  className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2">Bio:</label>
                <textarea
                  placeholder="Tell us about yourself"
                  className="w-full outline rounded-md h-20 outline-gray-300 px-3"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2">Skills:</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {skills.map((skill) => (
                    <div key={skill} className="bg-gray-300 px-2 py-1 rounded-full flex items-center">
                      {skill}
                      <button type="button" className="ml-2 text-red-500" onClick={() => removeSkill(skill)}>x</button>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Add a skill"
                  className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                  value={skillInput}
                  onChange={handleSkillChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && skillInput) {
                      e.preventDefault();
                      addSkill(skillInput);
                    }
                  }}
                />
                {skillInput && (
                  <div className="bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto">
                    {filteredSkills.map((skill) => (
                      <div key={skill} className="px-3 py-2 cursor-pointer hover:bg-gray-200" onClick={() => addSkill(skill)}>
                        {skill}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="block mb-2">Gender:</label>
                <select
                  className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="flex w-full justify-center items-center bg-black text-white py-2 text-xl rounded-xl">
                <button type="submit" className="cursor-pointer w-full">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default signUpFinal;

