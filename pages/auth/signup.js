import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Signup failed");
        setMessageType("error");
        return;
      }
      else{
        setMessage(data.message || "Signup successful");
        setMessageType("success"); 
        window.location.href = "/auth/signUpFinal"; 
      }
     
    } catch (error) {
      setMessage(error.message || "An error occurred. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <>
      <Head>
        <title>LearniVerse - The Peer to Peer Learning Academy</title>
        <meta
          name="description"
          content="Sign up to join the LearniVerse community and start your learning journey."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <div className="flex h-15 w-full items-center px-3 bg-gray-200">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src={"/leftArrow.svg"} width={24} height={24} />
            <h4>Back to Main Page</h4>
          </Link>
        </div>
        <div className="bg-gray-200 min-h-screen flex justify-center items-center p-4">
          <div className="flex flex-col gap-8 bg-white shadow-2xl p-8 rounded-2xl w-full max-w-md">
            <div className="text-center gap-2">
              <h1 className="text-2xl font-bold">Create an account</h1>
              <span className="text-gray-500">
                Join the LearniVerse community
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3">
                <label className="font-bold">Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="p-2 rounded-md border border-gray-300"
                  required
                />
                <label className="font-bold">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-md border border-gray-300"
                  required
                />
                <label className="font-bold">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="p-2 rounded-md border border-gray-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white rounded-2xl p-2 cursor-pointer"
                >
                  Create account
                </button>
              </div>
            </form>
            {message && (
              <div
                className={`text-center ${
                  messageType === "error" ? "text-red-500" : "text-green-500"
                }`}
              >
                {message}
              </div>
            )}
            <span className="text-gray-500 text-center">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-orange-500">
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
