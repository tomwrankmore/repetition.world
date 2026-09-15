import { getProjects } from "@/sanity/sanity-utils";
import HomeProjectList from "./components/HomeProjectList";
import SplitTextReveal from "./components/SplitTextReveal";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <SplitTextReveal
        as="h1"
        className="text-center md:text-left font-black py-24"
      >
        London-based music producer, DJ and composer creating impactful,
        forward-thinking sound for brands, artists and screen.
      </SplitTextReveal>
      <h2 className="text-center md:text-left tracking-wide mb-4 underline">
        Selected Work
      </h2>
      <HomeProjectList projects={projects} />
    </div>
  );
}
