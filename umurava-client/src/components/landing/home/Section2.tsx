import Image from "next/image";
import Case from "../../../../public/icons/case.svg";

export default function Section2() {
  return (
    <div className="bg-[#F9FAFB] pt-16 lg:pt-24 px-10 pd:px-15 lg:px-20">
      <div className="flex items-center justify-center text-center flex-col gap-4 md:mx-10 lg:mx-28">
        <h1 className="text-3xl md:text-[40px] font-bold md:font-extrabold">
          Experience a New Way of Building Work Experience
        </h1>
        <p className="text-gray-800 text-[14px] sm:text-[16px]">
          Join Skills Challenges Program to accelerate your career growth and
          become part of Africa&apos;s largest workforce of digital
          professionals.
        </p>
      </div>

      <div className="grid gap-3 my-10 md:my-20 lg:grid-cols-2 md:grid-rows-2">
        <div className="bg-blue-light text-white rounded-lg p-6 md:col-span-2">
          <div className="bg-white rounded-md h-10 w-10 p-3">
            <Image src={Case} alt="Case icon" />
          </div>
          <div>
            <h1 className="font-bold text-xl md:text-2xl my-2">
              Build a Strong Portfolio and Hand-On Experience
            </h1>
            <p className="font-extralight text-[14px]">
              Tackle real-world projects through challenges and hackathons that
              mirror real world challenges faced by businesses and
              organizations. Therefore, showcase your skills and accomplishments
              to potential employers and clients through a portofolio of
              completed projects.
            </p>
          </div>
        </div>
        <div className="bg-blue-light text-white rounded-lg p-6">
          <div className="bg-white rounded-md h-10 w-10 p-3">
            <Image src={Case} alt="Case icon" />
          </div>
          <div>
            <h1 className="font-bold text-xl md:text-2xl my-2">
              Enhance Your Employment Path
            </h1>
            <p className="font-extralight text-[14px]">
              elop the in-demand skills and build a strong portofolio to
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
              hackathons from our partner companies & organizations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
