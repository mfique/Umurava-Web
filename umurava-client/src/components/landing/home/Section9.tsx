import Image from "next/image";
import Ellipse1 from "../../../../public/icons/ellipse1.svg";
import Ellipse2 from "../../../../public/icons/ellipse2.svg";
import Banner3 from "../../../../public/hero/banner3.png";
import Link from "next/link";

export default function Section9() {
  return (
    <div className="relative text-white mx-10 md:mx-20 p-4 md:p-6 lg:p-10 lg:mx-36 bg-blue-light rounded-2xl mt-5 mb-10 -z-10">
      <div className="flex flex-col gap-3 md:flex-row md:gap-10 lg:gap-20">
        <div className="w-[50%] h-[50%]">
          <Image src={Banner3} alt="Umurava banner" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold ">
            Ready to Unlock Your Career Potential Today!
          </h1>
          <p className="text-[14px]">
            Join a challenge or a hackathon to gain valuable work experience,
            build an impressive portofolio and increase your chances to land job
            opportunities and accelerate your career growth
          </p>
          <Link
            href={"/"}
            className="px-3 py-2 md:p-3 mt-3 w-[150px] text-blue-light bg-white hover:bg-blue-light duration-500 rounded-md font-semibold text-center"
          >
            View Challenge
          </Link>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <Image src={Ellipse1} height={90} alt="ellipse icon" />
      </div>
      <div className="absolute bottom-0 left-0 ">
        <Image src={Ellipse2} height={70} alt="ellipse icon" />
      </div>
    </div>
  );
}
