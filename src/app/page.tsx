import React from "react";
import Navbar from "../components/Layout/Navbar";
import MainBanner from "../components/ITStartup/MainBanner";
import Features from "../components/ITStartup/Features";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />
    </>
  );
}
