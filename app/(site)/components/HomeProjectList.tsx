"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Project = {
  _id: string;
  name?: string;
  slug: string;
};

export default function HomeProjectList({ projects }: { projects: Project[] }) {
  const listRef = useRef<HTMLUListElement>(null);

  // useGSAP(
  //   () => {
  //     gsap.from("li", {
  //       opacity: 0,
  //       y: 16,
  //       duration: 0.5,
  //       stagger: 0.08,
  //       ease: "power2.out",
  //     });
  //   },
  //   { scope: listRef }
  // );

  return (
    <ul ref={listRef} className="w-full md:w-fit">
      {projects.map((project) => (
        <li key={project._id} className="mb-2">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs block md:whitespace-nowrap hover:underline"
          >
            {project?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
