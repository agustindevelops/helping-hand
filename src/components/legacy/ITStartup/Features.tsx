"use client";

import React from "react";
import * as Icon from "react-feather";

const Features = () => {
  return (
    <>
      <div className="boxes-area">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box h-100">
                <div className="icon">
                  <Icon.TrendingUp />
                </div>
                <h3>AI Strategy Development</h3>
                <p>
                  Develop a clear and actionable AI strategy tailored to drive
                  your business success, from conceptualization to execution.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box h-100 bg-f78acb">
                <div className="icon">
                  <Icon.Cpu />
                </div>
                <h3>Custom AI Solutions</h3>
                <p>
                  Tailor-made AI applications that solve specific challenges,
                  enhance efficiency, and create new opportunities for
                  innovation.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box h-100 bg-c679e3">
                <div className="icon">
                  <Icon.Database />
                </div>
                <h3>Data Infrastructure and Management</h3>
                <p>
                  Build and manage a scalable and secure data infrastructure to
                  support your AI initiatives, ensuring optimal performance.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box h-100 bg-eb6b3d">
                <div className="icon">
                  <Icon.Shield />
                </div>
                <h3>AI Governance and Ethics</h3>
                <p>
                  Ensure responsible use of AI with robust governance frameworks
                  and ethical guidelines that protect both your business and
                  your customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
