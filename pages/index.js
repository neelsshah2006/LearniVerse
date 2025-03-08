import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Works from "@/components/Works";
import PopularCohort from "@/components/PopularCohort";
import Footer from "@/components/Footer";
import { Element } from "react-scroll";
import UpcomingWorkshops from "@/components/UpcomingWorkshops";

const index = () => {
  return (
    <>
      <Head>
        <title>LearniVerse - The Peer to Peer Learning Community</title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Join LearniVerse, the peer-to-peer learning academy where you can learn, mentor, and earn. Empower your skills and knowledge through our community-driven platform."
        />
        <meta
          name="keywords"
          content="LearniVerse, peer-to-peer learning, mentoring, online courses, education, learning, teaching, skills, knowledge"
        />
        <meta name="author" content="LearniVerse Team" />
        <meta
          property="og:title"
          content="LearniVerse - The Peer to Peer Learning Academy"
        />
        <meta
          property="og:description"
          content="Join LearniVerse, the peer-to-peer learning academy where you can learn, mentor, and earn. Empower your skills and knowledge through our community-driven platform."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.learniverse.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="LearniVerse - The Peer to Peer Learning Academy"
        />
        <meta
          name="twitter:description"
          content="Join LearniVerse, the peer-to-peer learning academy where you can learn, mentor, and earn. Empower your skills and knowledge through our community-driven platform."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <div>
        <div className="sticky top-0">
          <Navbar />
        </div>
        <HeroSection />
        <Works />
        <Element name="PopularCohort">
          <PopularCohort />
        </Element>
        <Element name="UpcomingWorkshops">
          <UpcomingWorkshops />
        </Element>
        <Footer />
      </div>
    </>
  );
};

export default index;
