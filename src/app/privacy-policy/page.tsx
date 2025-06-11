import React from "react";
import Navbar from "../../components/legacy/Layout/Navbar";
import Footer from "../../components/legacy/Layout/Footer";
import PageBanner from "../../components/legacy/Common/PageBanner";
import PrivacyPolicyContent from "../../components/legacy/PrivacyPolicy/PrivacyPolicyContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Privacy Policy" />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
};
