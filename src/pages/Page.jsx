import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import OurWork from "../components/OurWork";
import OurSuccess from "../components/OurSuccess";
import MeetTeam from "../components/MeetTeam";
import ContactUs from "../components/ContactUs";

const Page = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurWork />
        <OurSuccess />
        <MeetTeam />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default Page;
