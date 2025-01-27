import MainLayout from "@/layouts/MainLayout";
import image from "../../../public/video.png";
import Image from "next/image";
import Case from "../../../public/icons/case.svg";
import Challenge from "../../../public/challenge.png";
import Link from "next/link";

export default function Page() {
  return (
    <MainLayout>
      <div className="py-[6rem] md:py-[10rem] px-6 sm:px-10 md:px-16 lg:px-24 gap-9 md:gap-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl md:text-[40px] font-bold md:font-extrabold text-blue-light">
              Our Story
            </h1>
            <p className="text-gray-800 text-[14px] sm:text-[16px]">
              With 3 years of experience matching African digital talents to
              local and global job markets, we still remain with a big number of
              jobs that remain unfilled due to the lack of experienced African
              Talents.
            </p>
            <p className="text-gray-800 text-[14px] sm:text-[16px]">
              Driven by our mission to place skilled and professional digital
              talent, we created Skills Challenges as a project-based learning
              solution for talents to gain real-world experience, solve
              problems, and build portfolios so that they become ready for
              global job markets.
            </p>
          </div>

          <div className="w-full flex justify-center mx-10 my-4">
            <Image
              src={image}
              height={500}
              width={500}
              alt="Umurava banner"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-[#F9FAFB] my-20">
          <div className="flex items-center justify-center text-center flex-col gap-4 md:mx-10 lg:mx-28">
            <h1 className="text-3xl md:text-[40px] font-bold md:font-extrabold">
              Why are we solving this problem
            </h1>
          </div>

          <div className="grid gap-6 my-10 md:my-20 lg:grid-cols-2">
            <div className="bg-blue-light text-white rounded-lg p-6 md:col-span-2">
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
                  Earn both Money and Knowledge Prizes by participating in
                  various contests and competitions by working on real world
                  projects and hackathons from our partner companies &
                  organizations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-[2rem] md:gap-[5rem] lg:gap-[9rem] mx-8 mt-[6rem] md:mt-[10rem]">
          <div className="flex flex-col gap-3 md:pl-[3rem]">
            <h1 className="text-blue-light text-3xl md:text-[40px] font-bold md:font-extrabold">
              Skills Challenges Program is built on the Umurava Talent
              Marketplace Platform
            </h1>
            <p className="text-gray-800 text-[14px] sm:text-[16px]">
              A Project-based Learning Solution aimed at providing young and
              senior talents with an opportunity to showcase their skills to
              real-world projects and challenges from our partner companies and
              organizations.
            </p>
            <p className="text-gray-800 text-[14px] sm:text-[16px]">
              Umurava Skills Challenges enables young talents to build a
              portfolio and experience that increases their readiness to access
              job opportunities and projects.
            </p>
            <Link
              href={""}
              className="px-3 py-2 md:p-3 mt-3 w-[150px] text-white bg-blue-light hover:bg-blue-dark duration-500 rounded-md font-semibold text-center"
            >
              Get Started
            </Link>
          </div>

          <div className="">
            <div className="md:h-[430px] md:w-[320px]">
              <Image src={Challenge} height={380} alt="Umurava hero image" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
