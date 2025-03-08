import React from "react";
import Link from "next/link";
import Head from "next/head";

const Verification = () => {
  return (
    <>
      <Head>
        <title>Email Verification - LearniVerse</title>
        <meta
          name="description"
          content="Verify your email address to complete the registration process on LearniVerse."
        />
      </Head>
      <div className="bg-gray-200 w-screen h-screen flex flex-col justify-center items-center p-4 md:p-8">
        <div className="bg-white flex flex-col p-6 md:p-10 justify-center items-center gap-6 md:gap-10 rounded-2xl shadow-2xs max-w-md w-full">
          <h1 className="text-2xl md:text-3xl font-extrabold text-center">
            Email Verification
          </h1>
          <p className="text-center">
            An email has been sent to your email address. Please click the link
            in the email to verify your account.
          </p>
          <Link href="/">
            <div className="text-amber-400">Back to Home</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Verification;
