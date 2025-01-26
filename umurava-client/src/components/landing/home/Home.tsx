import Navbar from "../shared/Navbar";
import Hero from "./Hero";
import Section2 from "./Section2";

export default function HomeLand() {
  return (
    <div className="md:mx-16">
      <Navbar />
      <Hero />
      <Section2 />
    </div>
  );
}
