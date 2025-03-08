import Link from "next/link";
import { useState } from "react";
import Head from "next/head";

const signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <Head>
        <title>Learni-Verse - The Peer to Peer Learning Academy</title>
        <meta
          name="description"
          content="Sign up to join the LearniVerse community and start your learning journey."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="bg-gray-200 min-h-screen flex justify-center items-center p-4">
        <div className="flex flex-col gap-8 bg-white shadow-2xl p-8 rounded-2xl w-full max-w-md">
          <div className="text-center gap-2">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <span className="text-gray-500">
              Join the Learniverse community
            </span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col gap-3">
              <label className="font-bold">Full Name</label>
              <input
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="p-2 rounded-md border border-gray-300"
                required
              />
              <label className="font-bold">Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-2 rounded-md border border-gray-300"
                required
              />
              <label className="font-bold">Password</label>
              <input
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
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
          <span className="text-gray-500 text-center">
            Already have an account?
            <Link href="/auth/login" className="text-orange-500">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default signup;
