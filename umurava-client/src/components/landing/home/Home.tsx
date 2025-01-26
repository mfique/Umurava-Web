import Navbar from "../shared/Navbar";
import Hero from "./Hero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

export default function HomeLand() {
  return (
    <div className="md:mx-16">
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
