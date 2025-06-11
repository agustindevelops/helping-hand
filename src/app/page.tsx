import React from "react";
import Navbar from "../components/legacy/Layout/Navbar";
import MainBanner from "../components/legacy/ITStartup/MainBanner";
import Features from "../components/legacy/ITStartup/Features";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Team from "./Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <About />
      <Services />
      <Projects />
      <Team />
    </>
  );
}
