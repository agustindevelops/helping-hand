import React from "react";
import Navbar from "../components/legacy/Layout/Navbar";
import MainBanner from "../components/legacy/ITStartup/MainBanner";
import Features from "../components/legacy/ITStartup/Features";
import About from "./About";
import Services from "./Services";
import Projects from "../components/Projects";
import Team from "../components/Team";
import FreeConsultation from "../components/Form/FreeConsultation";
import ContactForm from "@/components/legacy/Contact/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <About />
      <Services />
      <Projects />
      <Team />
      <div className="flex justify-center items-center"><ContactForm /></div>
    </>
  );
}
