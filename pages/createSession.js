import React from "react";
import Head from "next/head";
import SessionForm from "@/components/SessionForm";

const createSession = () => {
  return (
    <>
      <Head>
        <title>Create Session - LearniVerse</title>
        <meta
          name="description"
          content="Create a new learning session on LearniVerse."
        />
      </Head>
      <div>
        <SessionForm />
      </div>
    </>
  );
};

export default createSession;
