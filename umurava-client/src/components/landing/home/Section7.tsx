"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
  {
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
  {
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
  {
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
  {
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
  {
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
  {
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
  {
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
];

export default function Section7() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Function to handle dot clicks
  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index);
    const testimonialElement = document.getElementById(`testimonial-${index}`);
    testimonialElement?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div className="px-10 md:px-20">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold md:font-extrabold">
          Users are in Love with Skills <br /> Challenges Program
        </h1>
        <p className="text-gray-800 text-[14px] sm:text-[16px] mt-2">
          See what our clients say about working with us. Their success <br />{" "}
          speaks for our dedication and expertise.
        </p>
      </div>

      {/* Testimonials Scrollable Container */}
      <div className="pt-10 overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {testimonials.map((test, i) => (
            <div
              key={i}
              id={`testimonial-${i}`}
              className="border border-gray-300 rounded-md py-3 px-5 flex-shrink-0 w-[300px]"
            >
              <div className="bg-blue-light h-[150px] rounded-md"></div>
              <div className="flex gap-1 items-center mt-3">
                <div className="h-10 w-10 bg-blue-light rounded-full"></div>
                <div>
                  <h1 className="font-semibold">{test.name}</h1>
                  <p className="text-sm text-gray-600">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Buttons (Carousel Dots) */}
      <div className="flex justify-center space-x-2 py-5">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentTestimonial === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
