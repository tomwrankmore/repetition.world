import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-center md:text-left text-xl md:text-xl mb-12 w-full md:w-[40rem] tracking-wide">Tom / Eliphino is a London based music producer, DJ &amp; composer.</h1>
      
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
