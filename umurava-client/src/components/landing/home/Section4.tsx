"use client";
import React, { useState } from "react";

export default function Section4() {
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

  const [activeSkill, setActiveSkill] = useState(skills[0]);

  return (
    <div className="p-4 md:p-8">
      <div className="text-center mx-10 md:mx-20">
        <h1 className="text-3xl md:text-[40px] font-bold md:font-extrabold p-3">
          Skills Challenges Cover various in-demand skills and Careers for the
          digital economy
        </h1>
        <p className="text-gray-800 text-[14px] sm:text-[16px] mt-2">
          Explore the projects that various talents are working on.
        </p>
      </div>
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
    </div>
  );
}
