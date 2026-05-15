"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Project = {
  _id: string;
  name?: string;
  slug: string;
  image?: string;
};

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slotTrackRef = useRef<HTMLDivElement>(null);
  const slotWindowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!slotWindowRef.current) return;
      const slotHeight = slotWindowRef.current.offsetHeight;

      gsap.to(slotTrackRef.current, {
        y: -(activeIndex * slotHeight),
        duration: 0.6,
        ease: "sine.inOut",
      });
    },
    { dependencies: [activeIndex], scope: slotTrackRef }
  );

  return (
    <div className="flex flex-col md:flex-row gap-12 w-full">

      {/* Left column */}
      <div className="flex-1 min-w-0">
        <h1 className="text-center md:text-left mb-12 text-base tracking-wide">
          London-based music producer, DJ and composer creating impactful, forward-thinking sound for brands, artists and screen.
        </h1>
        <h2 className="text-center md:text-left tracking-wide mb-2 underline">Selected Work</h2>
        <ul className="w-full md:w-fit mb-8">
          {projects.map((project, index) => (
            <li key={project._id} className="mb-2">
              <Link
                href={`/projects/${project.slug}`}
                className="text-xs block md:whitespace-nowrap hover:underline"
                onMouseEnter={() => setActiveIndex(index)}
              >
                {project?.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm mb-2">Get in touch</p>
        <p className="text-sm mb-6">eliphinomusic@gmail.com</p>
      </div>

      {/* Right column — slot window */}
      <div className="hidden md:block flex-1 min-w-0">
        <div
          ref={slotWindowRef}
          className="relative w-full aspect-square overflow-hidden"
        >
          <div ref={slotTrackRef} className="absolute inset-x-0 top-0 w-full">
            {projects.map((project) => (
              <div key={project._id} className="relative w-full aspect-square">
                {project?.image ? (
                  <Image
                    src={project.image}
                    alt={project?.name || "Project image"}
                    fill
                    className="object-contain object-left-top"
                  />
                ) : (
                  <div className="bg-slate-100 w-full h-full flex items-center justify-center text-sm text-slate-500">
                    No image
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}