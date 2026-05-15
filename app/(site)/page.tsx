import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-center md:text-left mb-12 text-base w-full md:w-[40rem] tracking-wide">London-based music producer, DJ and composer creating impactful, forward-thinking sound for brands, artists and screen.</h1>
      <h2 className="text-center md:text-left tracking-wide mb-2 underline">Selected Work</h2>
      <ul className="w-full md:w-fit">
        {projects.map((project) => {
          return (
            <li key={project._id} className="mb-2">
              <Link href={`/projects/${project.slug}`} className="text-xs block md:whitespace-nowrap hover:underline">
                {project?.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
