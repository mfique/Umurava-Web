import Breadcrumbs from "@/components/ui/BreadCrumb";
import MainLayout from "@/layouts/MainLayout";

import Logo from "../../../public/logo_3.svg";
import Link from "next/link";
import Image from "next/image";

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

export default function Page() {
  return (
    <MainLayout>
      <div className="my-[3rem] md:my-[5rem] mx-10 md:mx-16">
        <Breadcrumbs />
        {/* The cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-1 md:m-6 lg:m-10">
          {cardData.map((card, i) => (
            <div key={i} className="border border-gray-400 rounded-md">
              <div className="relative -z-10 bg-blue-light rounded-md flex items-center justify-center h-[170px] m-3">
                <Image src={card.logo} alt="logo" />
                <div className="absolute top-1 right-1 bg-green-700 px-3 py-1 rounded-lg text-center text-[12px] text-white">
                  {card.status}
                </div>
              </div>
              <div className="mx-4">
                <p className="font-semibold text-16px py-1">
                  {card.description}
                </p>
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
      </div>
    </MainLayout>
  );
}
