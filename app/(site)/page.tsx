import { getProjects } from "@/sanity/sanity-utils";
import HomeProjectList from "./components/HomeProjectList";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-center md:text-left mb-12 text-base w-full md:w-[40rem] tracking-wide">London-based music producer, DJ and composer creating impactful, forward-thinking sound for brands, artists and screen.</h1>
      <h2 className="text-center md:text-left tracking-wide mb-2 underline">Selected Work</h2>
      <HomeProjectList projects={projects} />
    </div>
  );
}
