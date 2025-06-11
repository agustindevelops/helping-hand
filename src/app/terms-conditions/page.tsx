import React from "react";
import Navbar from "../../components/legacy/Layout/Navbar";
import Footer from "../../components/legacy/Layout/Footer";
import PageBanner from "../../components/legacy/Common/PageBanner";
import TermsConditionsContent from "../../components/legacy/TermsConditions/TermsConditionsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Term & Condition" />

      <TermsConditionsContent />

      <Footer />
    </>
  );
};
 
