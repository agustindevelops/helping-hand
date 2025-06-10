// "use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const man = "/images/banner-image/man.png";
const code = "/images/banner-image/code.png";
const carpet = "/images/banner-image/carpet.png";
const bin = "/images/banner-image/bin.png";
const book = "/images/banner-image/book.png";
const dekstop = "/images/banner-image/dekstop.png";
const dot = "/images/banner-image/dot.png";
const flowerTopBig = "/images/banner-image/flower-top-big.png";
const flowerTop = "/images/banner-image/flower-top.png";
const keyboard = "/images/banner-image/keyboard.png";
const pen = "/images/banner-image/pen.png";
const table = "/images/banner-image/table.png";
const teaCup = "/images/banner-image/tea-cup.png";
const headphone = "/images/banner-image/headphone.png";
const mainPic = "/images/banner-image/main-pic.png";

const shape1 = "/images/shape1.png";
const shape2 = "/images/shape2.svg";
const shape3 = "/images/shape3.svg";
const shape4 = "/images/shape4.svg";
const shape5 = "/images/shape5.png";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-5">
                  <div className="hero-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      Helping Hand AI Solutions
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      For your AI challenges, Helping Hand AI Solutions is here
                      to lend a helping hand—streamlining processes, boosting
                      efficiency, and empowering your growth. Let`&apos;s
                      innovate together!
                    </p>

                    <Link
                      href="/contact"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 offset-lg-1">
                  <div className="banner-image">
                    <Image
                      src={man}
                      className="animate__animated animate__fadeInDown animate__delay-0.1s"
                      alt="man"
                      width={371}
                      height={400}
                    />

                    <Image
                      src={code}
                      className="animate__animated animate__fadeInUp animate__delay-0.1s"
                      alt="code"
                      width={174}
                      height={111}
                    />

                    <Image
                      src={carpet}
                      className="animate__animated animate__fadeInLeft animate__delay-0.1s"
                      alt="carpet"
                      width={510}
                      height={293}
                    />

                    <Image
                      src={bin}
                      className="animate__animated animate__zoomIn animate__delay-0.1s"
                      alt="bin"
                      width={86}
                      height={112}
                    />

                    <Image
                      src={book}
                      className="animate__animated animate__bounceIn animate__delay-0.1s"
                      alt="book"
                      width={78}
                      height={74}
                    />

                    <Image
                      src={dekstop}
                      className="animate__animated animate__fadeInDown animate__delay-0.1s"
                      alt="dekstop"
                      width={105}
                      height={147}
                    />

                    <Image
                      src={dot}
                      className="animate__animated animate__zoomIn animate__delay-0.1s"
                      alt="dot"
                      width={94}
                      height={70}
                    />

                    <Image
                      src={flowerTopBig}
                      className="animate__animated animate__fadeInUp animate__delay-0.1s"
                      alt="flower-top-big"
                      width={78}
                      height={291}
                    />

                    <Image
                      src={flowerTop}
                      className="animate__animated animate__rotateIn animate__delay-0.1s"
                      alt="flower-top"
                      width={53}
                      height={87}
                    />

                    <Image
                      src={keyboard}
                      className="animate__animated animate__fadeInUp animate__delay-0.1s"
                      alt="keyboard"
                      width={121}
                      height={73}
                    />

                    <Image
                      src={pen}
                      className="animate__animated animate__zoomIn animate__delay-0.1s"
                      alt="pen"
                      width={42}
                      height={77}
                    />

                    <Image
                      src={table}
                      className="animate__animated animate__zoomIn animate__delay-0.1s"
                      alt="table"
                      width={380}
                      height={342}
                    />

                    <Image
                      src={teaCup}
                      className="animate__animated animate__fadeInLeft animate__delay-0.1s"
                      alt="tea-cup"
                      width={44}
                      height={104}
                    />

                    <Image
                      src={headphone}
                      className="animate__animated animate__rollIn animate__delay-0.1"
                      alt="headphone"
                      width={62}
                      height={62}
                    />

                    <Image
                      src={mainPic}
                      className="animate__animated animate__fadeInUp animate__delay-0.1"
                      alt="main-pic"
                      width={580}
                      height={560}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image src={shape1} alt="shape" width={202} height={202} />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape5">
          <Image src={shape5} alt="shape" width={182} height={146} />
        </div>
        <div className="shape6 rotateme">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
