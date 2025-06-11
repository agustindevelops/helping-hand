"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Image imports
const bannerImages = {
  man: "/images/banner-image/man.png",
  code: "/images/banner-image/code.png",
  carpet: "/images/banner-image/carpet.png",
  bin: "/images/banner-image/bin.png",
  book: "/images/banner-image/book.png",
  dekstop: "/images/banner-image/dekstop.png",
  dot: "/images/banner-image/dot.png",
  flowerTopBig: "/images/banner-image/flower-top-big.png",
  flowerTop: "/images/banner-image/flower-top.png",
  keyboard: "/images/banner-image/keyboard.png",
  pen: "/images/banner-image/pen.png",
  table: "/images/banner-image/table.png",
  teaCup: "/images/banner-image/tea-cup.png",
  headphone: "/images/banner-image/headphone.png",
  mainPic: "/images/banner-image/main-pic.png"
};

const shapeImages = {
  shape1: "/images/shape1.png",
  shape2: "/images/shape2.svg",
  shape3: "/images/shape3.svg",
  shape4: "/images/shape4.svg",
  shape5: "/images/shape5.png"
};

const HeroBanner: React.FC = () => {
  return (
    <section className="pt-36 md:pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Your Business With AI That Works as Hard as You Do.
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              From idea to implementation — Helping Hand AI Solutions equips your business with the power of AI to scale, automate, and thrive.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://bdmbc5xfgbecmre2.canva-hosted-embed.com/codelet/AAEAEGJkbWJjNXhmZ2JlY21yZTIAAAAAAZdhRNMCJkIy9e3aCwob_qWR7_35e1Y27CuNAxakK2hMk_GL67g/#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
              >
                Get a Free Consultation
              </a>
              <a 
                href="https://bdmbc5xfgbecmre2.canva-hosted-embed.com/codelet/AAEAEGJkbWJjNXhmZ2JlY21yZTIAAAAAAZdhRNMCJkIy9e3aCwob_qWR7_35e1Y27CuNAxakK2hMk_GL67g/#projects" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 shadow-sm"
              >
                Explore Our Work
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <div className="main-banner">   
            <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                      <div className="col-lg-6 offset-lg-1">
                        <div className="banner-image">
                          {Object.entries(bannerImages).map(([key, src]) => (
                            <Image
                              key={key}
                              src={src}
                              className={`animate__animated animate__${getAnimationClass(key)} animate__delay-0.1s`}
                              alt={key}
                              width={getImageDimensions(key).width}
                              height={getImageDimensions(key).height}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Shape Images */}
              {Object.entries(shapeImages).map(([key, src], index) => (
                <div key={key} className={`${key} ${index % 2 === 0 ? 'rotateme' : ''}`}>
                  <Image 
                    src={src} 
                    alt="shape" 
                    width={getShapeDimensions(key).width} 
                    height={getShapeDimensions(key).height} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper functions
const getAnimationClass = (key: string): string => {
  const animations: { [key: string]: string } = {
    man: 'fadeInDown',
    code: 'fadeInUp',
    carpet: 'fadeInLeft',
    bin: 'zoomIn',
    book: 'bounceIn',
    dekstop: 'fadeInDown',
    dot: 'zoomIn',
    flowerTopBig: 'fadeInUp',
    flowerTop: 'rotateIn',
    keyboard: 'fadeInUp',
    pen: 'zoomIn',
    table: 'zoomIn',
    teaCup: 'fadeInLeft',
    headphone: 'rollIn',
    mainPic: 'fadeInUp'
  };
  return animations[key] || 'fadeIn';
};

const getImageDimensions = (key: string): { width: number; height: number } => {
  const dimensions: { [key: string]: { width: number; height: number } } = {
    man: { width: 371, height: 400 },
    code: { width: 174, height: 111 },
    carpet: { width: 510, height: 293 },
    bin: { width: 86, height: 112 },
    book: { width: 78, height: 74 },
    dekstop: { width: 105, height: 147 },
    dot: { width: 94, height: 70 },
    flowerTopBig: { width: 78, height: 291 },
    flowerTop: { width: 53, height: 87 },
    keyboard: { width: 121, height: 73 },
    pen: { width: 42, height: 77 },
    table: { width: 380, height: 342 },
    teaCup: { width: 44, height: 104 },
    headphone: { width: 62, height: 62 },
    mainPic: { width: 580, height: 560 }
  };
  return dimensions[key] || { width: 100, height: 100 };
};

const getShapeDimensions = (key: string): { width: number; height: number } => {
  const dimensions: { [key: string]: { width: number; height: number } } = {
    shape1: { width: 202, height: 202 },
    shape2: { width: 22, height: 22 },
    shape3: { width: 28, height: 28 },
    shape4: { width: 21, height: 20 },
    shape5: { width: 182, height: 146 }
  };
  return dimensions[key] || { width: 20, height: 20 };
};

export default HeroBanner;
