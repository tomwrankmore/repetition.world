// "use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

gsap.registerPlugin(useGSAP, SplitText);

export default async function About() {
  const content = await getPage("about");
  // const containerRef = useRef<HTMLDivElement>(null);
  // const imageRef = useRef<HTMLDivElement>(null);
  // const imageAnimationRef = useRef<gsap.Context | null>(null);

  // useGSAP(
  //   () => {
  //     const paragraphs =
  //       Array.from(containerRef.current?.querySelectorAll<HTMLParagraphElement>("p") ?? []);

  //     const splitInstances = paragraphs.map(
  //       (p) => new SplitText(p, {
  //         type: "lines",
  //         linesClass: "split-line",
  //         mask: "lines",
  //       })
  //     );

  //     const allLines = splitInstances.flatMap((s) => s.lines);

  //     gsap.from(allLines, {
  //       duration: 0.25,
  //       y: "100%",
  //       ease: "ease.inOut",
  //       stagger: {
  //         ease: "ease.inOut",
  //         each: 0.08,
  //       },
  //       delay: 0.15,
  //       onComplete: () => {
  //         splitInstances.forEach((s) => s.revert());
  //       },
  //     });

  //     imageAnimationRef.current = gsap.context(() => { });
  //   },

  //   { scope: containerRef }
  // );

  // const handleImageLoad = () => {
  //   gsap.from(imageRef.current, {
  //     clipPath: "inset(0 100% 0 0)",
  //     ease: "sine.inOut",
  //     duration: 1.2,
  //     delay: 0.15,
  //   });
  // };

  console.log("content from about page", content);

  return (
    <div
      // ref={containerRef}
      className="flex flex-col-reverse sm:flex-row gap-8 w-full items-start justify-between"
    >
      <div className="prose text-white flex-[2]">
        <PortableText
          value={content.content}
          components={{
            block: {
              normal: ({ children }) => (
                <p className="text-sm mb-6">{children}</p>
              ),
            },
          }}
        />
      </div>
      <div
        // ref={imageRef}
        className="sm:mb-8 flex-1 flex items-center justify-center sm:justify-end w-full"
      >
        <Image
          src="/eliphino.jpeg"
          alt="Eliphino"
          width={450}
          height={450}
          className="rounded-full sm:rounded-xl object-cover"
          // onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
}
