import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Works from "@/components/Works";

const index = () => {
  return (
    <>
      <Head>
        <title>Learni-Verse - The Peer to Peer Learning Academy</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <div className="sticky top-0">
          <Navbar />
        </div>
        <HeroSection />
        <Works />

      </div>
    </>
  );
};

export default index;
