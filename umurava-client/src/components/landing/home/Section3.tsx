import Image from "next/image";
import Ellipse1 from "../../../../public/icons/ellipse1.svg";
import Ellipse2 from "../../../../public/icons/ellipse2.svg";

export default function Section3() {
  return (
    <div className="relative mx-10 md:mx-20 p-4 md:p-6 lg:p-10 bg-blue-light rounded-xl mt-5 mb-10 -z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold text-white">1+</h2>
          <p className="mt-2 text-gray-100">Year</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">500+</h2>
          <p className="mt-2 text-gray-100">Challenges Completed</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">10K+</h2>
          <p className="mt-2 text-gray-100">Users</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">6+</h2>
          <p className="mt-2 text-gray-100">Countries</p>
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
