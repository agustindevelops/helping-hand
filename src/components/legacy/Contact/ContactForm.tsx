"use client";

import React from "react";
import Image from "next/image";
import contactImg from "/public/images/contact-img.png";
import FreeConsultation from "@/components/Form/FreeConsultation";

const ContactForm: React.FC = () => {
  return (
    <>
      <div className="contact-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch With Us</h2>
            <div className="bar"></div>
            <p>Anything On your Mind. We'll Be Glad To Assist You!</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <Image src={contactImg} alt="image" width={685} height={494} />
            </div>

            <div className="col-lg-6 col-md-12">
              <FreeConsultation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
