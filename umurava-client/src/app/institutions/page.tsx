"use client";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import Image from "next/image";
import Banner from "../../../public/Frame.png";
import Case from "../../../public/icons/case.svg";
import SKill from "../../../public/skill.png";

// the icons
import ared from "../../../public/partners/ared.png";
import ciba from "../../../public/partners/ciba.png";
import edu from "../../../public/partners/edu.png";
import hiil from "../../../public/partners/hiil.png";
import igihe from "../../../public/partners/igihe.png";
import kepler from "../../../public/partners/kepler.png";
import kigali from "../../../public/partners/kigali.png";
import laterile from "../../../public/partners/laterile.png";
import soko from "../../../public/partners/soko.png";
import tori from "../../../public/partners/tori.png";
import viamo from "../../../public/partners/viamo.png";

interface IntegrationPoint {
  id: number;
  text: string;
}

const integrationPoints: IntegrationPoint[] = [
  {
    id: 1,
    text: "As Career Development and Job Readiness Program",
  },
  {
    id: 2,
    text: "As Skills Assessments Method after a course or a term",
  },
  {
    id: 3,
    text: "As extracurricular activities to complement academic courses",
  },
  {
    id: 4,
    text: "As the portfolio of the Students",
  },
  {
    id: 5,
    text: "As part of Capstone Projects or final-year assignments",
  },
];

export default function Page() {
  return (
    <MainLayout>
      {/* First section */}
      <div className="flex flex-col lg:flex-row items-center gap-[1rem] md:gap-[3rem] lg:gap-[6rem] mx-8 mt-[6rem] md:mt-[10rem]">
        <div className="flex flex-col gap-3 md:pl-[3rem]">
          <h1 className="text-blue-light text-3xl md:text-[40px] font-bold md:font-extrabold">
            Accelerate Your Students and Traineess Employability and Career
            Growth through Project-based Learning Solution
          </h1>
          <p className="text-gray-800 text-[14px] sm:text-[16px]">
            We partner with Universities, Schools, and Trainining Institutions
            to build the work experience of their students and trainees through
            project based learning challenges and hackathons
          </p>
          <Link
            href={""}
            className="px-3 py-2 md:p-3 mt-3 w-[150px] text-white bg-blue-light hover:bg-blue-dark duration-500 rounded-md font-semibold text-center"
          >
            Partner with us
          </Link>
        </div>

        <div className="">
          <div className="md:h-[430px] md:w-[520px]">
            <Image src={Banner} height={380} alt="Umurava hero image" />
          </div>
        </div>
      </div>

      {/* the second section */}
      <div className="bg-[#F9FAFB] my-20 px-10 md:px-20 lg:px-26">
        <div className="flex items-center justify-center text-center flex-col gap-4 md:mx-10 lg:mx-28">
          <h1 className="text-3xl md:text-[40px] font-bold md:font-extrabold">
            Key Offerings and benefits
          </h1>
        </div>

        <div className="grid gap-6 my-10 md:my-20 lg:grid-cols-3">
          <div className="bg-blue-light text-white rounded-lg p-6">
            <div className="bg-white rounded-md h-10 w-10 p-3">
              <Image src={Case} alt="Case icon" />
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl my-2">
                Build a Strong Portfolio and Hands-On Experience
              </h1>
              <p className="font-extralight text-[14px]">
                Tackle real-world projects through challenges and hackathons
                that mirror real world challenges faced by businesses and
                organizations. Therefore, showcase your skills and
                accomplishments to potential employers and clients through a
                portfolio of completed projects.
              </p>
            </div>
          </div>
          <div className="bg-blue-light text-white rounded-lg p-6">
            <div className="bg-white rounded-md h-10 w-10 p-3">
              <Image src={Case} alt="Case icon" />
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl my-2">
                Build a Strong Portfolio and Hands-On Experience
              </h1>
              <p className="font-extralight text-[14px]">
                Tackle real-world projects through challenges and hackathons
                that mirror real world challenges faced by businesses and
                organizations. Therefore, showcase your skills and
                accomplishments to potential employers and clients through a
                portfolio of completed projects.
              </p>
            </div>
          </div>
          <div className="bg-blue-light text-white rounded-lg p-6">
            <div className="bg-white rounded-md h-10 w-10 p-3">
              <Image src={Case} alt="Case icon" />
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl my-2">
                Build a Strong Portfolio and Hands-On Experience
              </h1>
              <p className="font-extralight text-[14px]">
                Tackle real-world projects through challenges and hackathons
                that mirror real world challenges faced by businesses and
                organizations. Therefore, showcase your skills and
                accomplishments to potential employers and clients through a
                portfolio of completed projects.
              </p>
            </div>
          </div>
          <div className="bg-blue-light text-white rounded-lg p-6 lg:col-span-2">
            <div className="bg-white rounded-md h-10 w-10 p-3">
              <Image src={Case} alt="Case icon" />
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl my-2">
                Enhance Your Employment Path
              </h1>
              <p className="font-extralight text-[14px]">
                Develop the in-demand skills and build a strong portfolio to
                increase your chances of landing your dream job or contract.
              </p>
            </div>
          </div>
          <div className="bg-blue-light text-white rounded-lg p-6">
            <div className="bg-white rounded-md h-10 w-10 p-3">
              <Image src={Case} alt="Case icon" />
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl my-2">
                Earn Recognition and Prizes
              </h1>
              <p className="font-extralight text-[14px]">
                Earn both Money and Knowledge Prizes by participating in various
                contests and competitions by working on real world projects and
                hackathons from our partner companies & organizations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The partners section */}
      <div className=" my-20 px-10 md:px-20 lg:px-26 relative z-[-1]">
        <h1 className="text-3xl md:text-[40px] font-bold md:font-extrabold text-center my-10">
          Join a few Educational Institutions using <br /> Skills Challenges by
          Umurava
        </h1>
        {/* The marquee */}
        <div className="overflow-hidden">
          <div className="flex space-x-10 animate-marquee">
            {[
              ared,
              ciba,
              edu,
              hiil,
              igihe,
              kepler,
              kigali,
              laterile,
              soko,
              tori,
              viamo,
            ].map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt="partner logo"
                className="h-10 w-auto"
              />
            ))}
          </div>
          <div className="flex space-x-10 animate-marquee-reverse mt-4">
            {[
              ared,
              ciba,
              edu,
              hiil,
              igihe,
              kepler,
              kigali,
              laterile,
              soko,
              tori,
              viamo,
            ].map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt="partner logo"
                className="h-10 w-auto"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee-reverse {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
      `}</style>

      {/* the other div */}
      <div className="max-w-7xl mx-auto p-8 md:p-12 my-20 px-10 md:px-20 lg:px-26">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4b] max-w-2xl mx-auto leading-tight">
            How Skills Challenges Program can Be Integrated into your Learning
            Institution
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {integrationPoints.map((point) => (
              <div key={point.id} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-light text-white flex items-center justify-center font-semibold">
                  {point.id}
                </div>
                <p className="text-gray-700 mt-1">{point.text}</p>
              </div>
            ))}
          </div>

          <div className="relative h-[400px] bg-blue-50 rounded-3xl overflow-hidden -z-10">
            <Image
              src={SKill}
              alt="Skills platform interface"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
