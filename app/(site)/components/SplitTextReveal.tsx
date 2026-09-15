"use client";
import { ComponentPropsWithRef, ElementType, ReactNode, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText, useGSAP);
type SplitTextRevealOwnProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  stagger?: number;
  yPercent?: number;
};
type SplitTextRevealProps<T extends ElementType> = SplitTextRevealOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithRef<T>, keyof SplitTextRevealOwnProps | "as">;
export default function SplitTextReveal<T extends ElementType = "div">({
  as,
  children,
  delay = 0,
  duration = 0.8,
  stagger = 0.08,
  yPercent = 100,
  ...props
}: SplitTextRevealProps<T>) {
  const Tag = as ?? "div";
  const element = useRef<Element | null>(null);
  useGSAP(
    () => {
      if (!element.current) return;
      gsap.set(element.current, { visibility: "hidden" });
      const split = SplitText.create(element.current, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit: (self) => {
          gsap.set(element.current, { visibility: "visible" });
          return gsap.fromTo(
            self.lines,
            { yPercent },
            { yPercent: 0, duration, delay, stagger, ease: "power3.out" },
          );
        },
      });
      return () => {
        split.revert();
      };
    },
    { dependencies: [delay, duration, stagger, yPercent] },
  );
  return (
    <Tag
      ref={(node) => {
        element.current = node;
      }}
      {...props}
    >
      {" "}
      {children}{" "}
    </Tag>
  );
}
