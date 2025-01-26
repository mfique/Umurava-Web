"use client";
import Image from "next/image";
import Logo from "../../../../public/logo_3.svg";
import Link from "next/link";
import { useState } from "react";

const cardData = [
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
];

export default function Section5() {
  const [showAll, setShowAll] = useState(false);

  // Determine which cards to display
  const displayedCards = showAll ? cardData : cardData.slice(0, 3);

  return (
    <div className="mx-10 md:mx-16">
      <div className="text-center mx-10 md:mx-20">
        <h1 className="text-3xl md:text-[40px] font-bold md:font-extrabold p-3">
          Explore Challenges & Hackathons
        </h1>
        <p className="text-gray-800 text-[14px] sm:text-[16px] mt-2">
          Join Skills Challenges Program to accelerate your career growth and
          become part of Africa&apos;s largest workforce of digital
          professionals.
        </p>
      </div>

      {/* The cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-1 md:m-6 lg:m-10">
        {displayedCards.map((card, i) => (
          <div key={i} className="border border-gray-400 rounded-md">
            <div className="relative -z-10 bg-blue-light rounded-md flex items-center justify-center h-[170px] m-3">
              <Image src={card.logo} alt="logo" />
              <div className="absolute top-1 right-1 bg-green-700 px-3 py-1 rounded-lg text-center text-[12px] text-white">
                {card.status}
              </div>
            </div>
            <div className="mx-4">
              <p className="font-semibold text-16px py-1">{card.description}</p>
            </div>
            <div className="py-3 mx-3">
              <h1 className="font-semibold text-gray-800 text-[14px]">
                Skills needed:
              </h1>
              <div className="flex gap-1">
                {card.skills.map((skill, id) => (
                  <span
                    className="border border-blue-light rounded-md px-2 py-1 text-blue-light md:text-[10px]"
                    key={id}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="py-1 mx-4">
              <h1 className="font-semibold text-gray-800 text-[14px]">
                Seniority level:{" "}
                <span className="text-gray-600 font-extralight">
                  {card.level}
                </span>
              </h1>
            </div>
            <div className="py-1 mx-4">
              <p className="font-semibold text-gray-800 text-[14px]">
                Timeline:{" "}
                <span className="text-gray-600 font-extralight">
                  {card.time}
                </span>
              </p>
            </div>

            <hr />
            <div className="m-4">
              <Link
                href={""}
                className="text-[15px] bg-blue-light px-3 py-2 text-white font-medium rounded-md hover:bg-blue-dark duration-500"
              >
                View Challenge
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All / View Less Button */}
      <div className="flex justify-center my-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-[15px] border-[1px] text-blue-light border-blue-light hover:bg-blue-light hover:text-white px-6 py-2 lg:px-10 font-semibold rounded-md duration-500"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  );
}
