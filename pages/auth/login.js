import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Head from "next/head";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Head>
        <title>Login - LearniVerse</title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Login to LearniVerse, the peer-to-peer learning academy where you can learn, mentor, and earn. Empower your skills and knowledge through our community-driven platform."
        />
        <meta
          name="keywords"
          content="LearniVerse, login, peer-to-peer learning, mentoring, online courses, education, learning, teaching, skills, knowledge"
        />
        <meta name="author" content="LearniVerse Team" />
        <meta property="og:title" content="Login - LearniVerse" />
        <meta
          property="og:description"
          content="Login to LearniVerse, the peer-to-peer learning academy where you can learn, mentor, and earn. Empower your skills and knowledge through our community-driven platform."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.learniverse.com/login" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login - LearniVerse" />
        <meta
          name="twitter:description"
          content="Login to LearniVerse, the peer-to-peer learning academy where you can learn, mentor, and earn. Empower your skills and knowledge through our community-driven platform."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <div className="bg-gray-200 w-screen h-screen flex flex-col gap-10 p-4 md:p-8">
        <div className="flex h-15 w-full items-center px-3">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src={"/leftArrow.svg"} width={24} height={24} />
            <h4>Back to Main Page</h4>
          </Link>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="bg-white flex flex-col p-6 md:p-10 justify-center items-center gap-6 md:gap-10 rounded-2xl shadow-2xs">
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-2xl md:text-3xl font-extrabold">
                Welcome Back
              </h1>
              <p className="text-center">Sign in to Continue to LearniVerse</p>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <div>
                <p>Email :</p>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <p>Password :</p>
                <div className="flex relative w-full">
                  <input
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <Link href={"/"} className="text-amber-400">
                  Forget Password?
                </Link>
              </div>
            </div>
            <div className="flex w-full justify-center items-center bg-black text-white py-2 text-xl rounded-xl">
              <button className="cursor-pointer w-full">Log In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
