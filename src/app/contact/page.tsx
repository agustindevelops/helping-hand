import React from "react";
import Navbar from "../../components/legacy/Layout/Navbar";
import Footer from "../../components/legacy/Layout/Footer";
import PageBanner from "../../components/legacy/Common/PageBanner";
import ContactInfo from "../../components/legacy/Contact/ContactInfo";
import GoogleMap from "../../components/legacy/Contact/GoogleMap";
import ContactForm from "../../components/legacy/Contact/ContactForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <ContactForm />
    </>
  );
}
