import Link from "next/link";
import Image from "next/image";

import hero1 from "../../../../public/hero/hero1.png";
import hero2 from "../../../../public/hero/hero2.png";
import hero3 from "../../../../public/hero/hero3.png";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-[2rem] md:gap-[9rem] mx-8 mt-5 md:mt-10">
      <div className="flex flex-col gap-3 md:pl-[3rem]">
        <h1 className="text-blue-light text-3xl md:text-[40px] font-bold md:font-extrabold">
          Build Work Experience <br /> through Skills Challenges <br /> Program
        </h1>
        <p className="text-gray-800 text-[14px] sm:text-[16px]">
          Enhance your Employability and Accelerate your Career <br /> Growth by
          working on Hands-on projects & hackathons <br /> from various
          businesses & organizations.
        </p>
        <Link
          href={""}
          className="px-3 py-2 mt-3 md:py-4 w-[150px] text-white bg-blue-light rounded-md font-semibold text-center"
        >
          Get Started
        </Link>
      </div>

      <div className="relative flex gap-3">
        <div className="md:h-[330px] md:w-[220px]">
          <Image src={hero1} height={380} alt="Umurava hero image" />
        </div>
        <div className="md:h-[330px] md:w-[220px]">
          {" "}
          <Image src={hero2} height={380} alt="Umurava hero image" />
        </div>
        <div className="absolute bottom-0 -left-[30px] md:-left-[60px]">
          {" "}
          <Image src={hero3} height={50} alt="Umurava hero image" />
        </div>
      </div>
    </div>
  );
}
