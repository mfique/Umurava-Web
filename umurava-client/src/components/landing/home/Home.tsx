import MainLayout from "@/layouts/MainLayout";
import Hero from "./Hero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section9 from "./Section9";

export default function HomeLand() {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section9 />
      </MainLayout>
    </div>
  );
}
