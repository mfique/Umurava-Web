import Case from "../../../../public/icons/case1.svg";
import Badge from "../../../../public/icons/badge.svg";
import Prize from "../../../../public/icons/prize.svg";
import Trend from "../../../../public/icons/trend.svg";
import Banner from "../../../../public/hero/skillBanner.png";

import Image from "next/image";

export default function Section6() {
  return (
    <div className="bg-[#F9FAFB] my-10 md:my-16 lg:my-20 px-10 lg:px-20">
      <div className="text-center px-10 md:px-20 py-10 md:py-10">
        <h1 className="text-3xl md:text-[40px] font-bold md:font-extrabold p-3">
          What else can I gain from participating in Skills Challenges ?
        </h1>
        <p className="text-gray-800 text-[14px] sm:text-[16px] mt-2">
          Join Skills Challenges Program to accelerate your career growth and
          become part of Africa&apos;s largest workforce of digital
          professionals.
        </p>
      </div>

      {/* The cards */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-10">
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="rounded-lg p-3">
            <div className="bg-blue-light rounded-md h-10 w-10 p-3">
              <Image src={Case} alt="Case icon" />
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl my-2">
                Enhance your Employment Path
              </h1>
              <p className="font-extralight text-gray-700 text-[14px]">
                Network with other talented individuals and learn from their
                experiences
              </p>
            </div>
          </div>

          <div className="rounded-lg p-3">
            <div className="bg-blue-light rounded-md h-10 w-10 p-3">
              <Image src={Trend} alt="Case icon" />
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl my-2">
                Personal Growth
              </h1>
              <p className="font-extralight text-gray-700 text-[14px]">
                Challenge yourself, learn new skills, and expand your
                professional network.
              </p>
            </div>
          </div>

          <div className="rounded-lg p-3">
            <div className="bg-blue-light rounded-md h-10 w-10 p-3">
              <Image src={Prize} alt="Case icon" />
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl my-2">
                Earn Recognition and Prizes
              </h1>
              <p className="font-extralight text-gray-700 text-[14px]">
                Gain valuable experience and knowledge to advance your career in
                the digital economy:
              </p>
            </div>
          </div>

          <div className="rounded-lg p-3">
            <div className="bg-blue-light rounded-md h-10 w-10 p-3">
              <Image src={Badge} alt="Case icon" />
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl my-2">
                Learn from Industry Experts
              </h1>
              <p className="font-extralight text-gray-700 text-[14px]">
                Access valuable insights and guidance from experienced
                professionals in the digital careers fields and spaces
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-[1000px]">
          <Image src={Banner} alt="Umurava banner" />
        </div>
      </div>
    </div>
  );
}
