"use client";
import React, { useEffect, useState } from "react";
import Dash from "../../../../public/slider/payrolldash.png";
import SokoLogo from "../../../../public/slider/sokoLogo.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// the data
const skills = [
  "UI/UX Design",
  "Data Science",
  "Graphic Design",
  "Data Analysis & Research",
  "Animation",
  "Videography & Photography",
  "AI & Machine Learning",
  "Web3",
  "Digital Marketing & Communications",
];

const slides = [
  {
    id: 1,
    image: Dash,
    logo: SokoLogo,
    description:
      "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
  },
  {
    id: 2,
    image: Dash,
    logo: SokoLogo,
    description:
      "Streamline your HR and payroll processes with our state-of-the-art solutions designed for modern businesses.",
  },
  {
    id: 3,
    image: Dash,
    logo: SokoLogo,
    description:
      "Empowering organizations with seamless financial management tools and workforce solutions.",
  },
];

export default function Section4() {
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 md:p-8">
      {/* message header */}
      <div className="text-center mx-10 md:mx-20">
        <h1 className="text-3xl md:text-[40px] font-bold md:font-extrabold p-3">
          Skills Challenges Cover various in-demand skills and Careers for the
          digital economy
        </h1>
        <p className="text-gray-800 text-[14px] sm:text-[16px] mt-2">
          Explore the projects that various talents are working on.
        </p>
      </div>

      {/* The tabs */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-10 lg:mt-16 mx-10 md:mx-20">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => setActiveSkill(skill)}
            className={`px-6 py-2 text-sm sm:text-base font-medium rounded-md cursor-pointer transition-all duration-300 ${
              skill === activeSkill
                ? "bg-blue-light text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {skill}
          </div>
        ))}
      </div>

      {/* The carousel */}
      <div className="p-4 md:p-8 mt-8 md:mt-16">
        <div className="relative flex flex-col items-center overflow-hidden -z-10">
          {/* Carousel container */}
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col md:flex-row gap-6 items-center bg-gray-100 rounded-lg shadow-lg p-6"
              >
                {/* Left side: Logo and description */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white rounded-md h-16 w-16 p-4">
                    <Image src={slide.logo} alt="company logo" />
                  </div>
                  <p className="text-gray-600 text-[14px] sm:text-[16px] my-2 font-[100]">
                    {slide.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-light font-bold mt-4 inline-flex items-center"
                  >
                    Learn more
                    <span className="ml-4 h-8 w-8 rounded-full bg-blue-light text-white inline-flex items-center justify-center">
                      <ArrowRight size={16} />
                    </span>
                  </a>
                </div>

                {/* Right side: Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src={slide.image}
                    alt="slide image"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Carousel dots */}
          <div className="flex mt-4 space-x-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
