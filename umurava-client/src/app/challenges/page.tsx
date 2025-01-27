import Breadcrumbs from "@/components/ui/BreadCrumb";
import MainLayout from "@/layouts/MainLayout";

const cardData = [
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
  {
    logo: Logo,
    status: "Open",
    description: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    level: "(Junior, Intermediate, Senior)",
    time: "15 days",
  },
];

export default function Page() {
  return (
    <MainLayout>
      <div className="mt-[3rem] md:mt-[5rem]">
        <Breadcrumbs />
        <h1>Hello world</h1>
      </div>
    </MainLayout>
  );
}
