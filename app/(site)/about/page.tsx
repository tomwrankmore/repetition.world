"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

gsap.registerPlugin(useGSAP, SplitText);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageAnimationRef = useRef<gsap.Context | null>(null);

  useGSAP(
    () => {
      const paragraphs =
        Array.from(containerRef.current?.querySelectorAll<HTMLParagraphElement>("p") ?? []);

      const splitInstances = paragraphs.map(
        (p) => new SplitText(p, {
          type: "lines",
          linesClass: "split-line",
          mask: "lines",
        })
      );

      const allLines = splitInstances.flatMap((s) => s.lines);

      gsap.from(allLines, {
        duration: 0.25,
        y: "100%",
        ease: "ease.inOut",
        stagger: {
          ease: "ease.inOut",
          each: 0.08,
        },
        delay: 0.15,
        onComplete: () => {
          splitInstances.forEach((s) => s.revert());
        },
      });

      imageAnimationRef.current = gsap.context(() => { });
    },

    { scope: containerRef }
  );

  const handleImageLoad = () => {
    gsap.from(imageRef.current, {
      clipPath: "inset(0 100% 0 0)",
      ease: "sine.inOut",
      duration: 1.2,
      delay: 0.15,
    });
  };

  return (
    <div ref={containerRef} className="flex flex-col-reverse sm:flex-row gap-8 w-full items-start justify-between">
      <div className="prose text-white flex-[2]">
        <p className="text-sm mb-6">Tom Wrankmore is a London-based producer, composer and DJ with over ten years&apos; experience creating music for brands, artists and screen. Originally emerging as an artist, his work has increasingly focused on composition and production in recent years.</p>
        <p className="text-sm mb-6">His practice spans advertising, sync and club culture, applying the same level of detail to a 30-second TV spot as to a full-length record.</p>
        <p className="text-sm mb-6">Clients include McDonald&apos;s, Squarespace, YouTube, Apple, Lacoste, Jägermeister and Resident Advisor. He composed music for a McDonald&apos;s 2025 Christmas TV campaign, and produced music for a major Squarespace brand refresh.</p>
        <p className="text-sm mb-6">Under the alias Eliphino, he releases original music and has performed internationally across the UK, Europe, India and Colombia. His releases span UK club music, broken beat, house and garage, with credits on Somethinksounds, Hypercolour and Brownswood Recordings.</p>
        <p className="text-sm mb-6">Alongside his solo work, he collaborates with leading music and media companies, including Somethin&apos; Else and Sony Music Entertainment, and maintains an ongoing relationship with Resident Advisor across multiple projects.</p>
        <p className="text-sm mb-6">If you&apos;re working on a project that needs a distinctive sound, <Link href="/contact" className="text-indigo-50">get in touch</Link>.</p>
      </div>
      <div ref={imageRef} className="sm:mb-8 flex-1 flex items-center justify-center sm:justify-end w-full">
        <Image
          src="/eliphino.jpeg"
          alt="Eliphino"
          width={450}
          height={450}
          className="rounded-full sm:rounded-xl object-cover"
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default About;