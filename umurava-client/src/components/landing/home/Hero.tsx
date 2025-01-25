import Link from "next/link";
import Image from "next/image";

import hero from "../../../../public/hero.png";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 border border-red-500">
      <div className="flex flex-col gap-3 border border-red-500">
        <h1 className="text-blue-light text-3xl md:text-5xl font-bold md:font-extrabold">
          Build Work Experience through Skills Challenges Program
        </h1>
        <p className="text-gray-800">
          Enhance your Employability and Accelerate your Career Growth by
          working on Hands-on projects & hackathons from various businesses &
          organizations.
        </p>
        <Link
          href={""}
          className="px-3 py-2 md:py-4 w-[150px] text-white bg-blue-light rounded-md font-semibold text-center"
        >
          Get Started
        </Link>
      </div>

      <div className="md:h-[400px] md:w-[900px]  border border-red-500">
        <Image src={hero} alt="Umurava hero image" />
      </div>
    </div>
  );
}
