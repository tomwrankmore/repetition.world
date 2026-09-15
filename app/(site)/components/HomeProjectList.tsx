"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

type Project = {
  _id: string;
  title?: string;
  name?: string;
  slug: string;
  image?: string;
};

export default function HomeProjectList({ projects }: { projects: Project[] }) {
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "li > div",
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: {
            each: 0.08,
          },
          ease: "power3.out",
        },
      );
    },
    { scope: listRef },
  );

  return (
    <ul
      ref={listRef}
      className="projects_ul grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
    >
      {projects.map((project) => (
        <li key={project._id} className="overflow-hidden">
          <div>
            <Link
              href={`/projects/${project.slug}`}
              className="group relative block overflow-hidden text-xs break-words"
            >
              <Image
                src={project.image || "/default-image.jpg"}
                alt={project.name || "Project Image"}
                width={960}
                height={600}
                className="aspect-video h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/70 px-2 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                {project.name || "Untitled project"}
              </span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
