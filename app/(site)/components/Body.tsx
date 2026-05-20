"use client";

import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { PortableText } from "@portabletext/react";
import type {
  PortableTextTypeComponentProps,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { Spotify } from "react-spotify-embed";

type UrlValue = { url: string };
type LinkValue = { _type: string; href: string };

const myPortableTextComponents = {
  types: {
    break: () => <br />,
    youtube: ({ value }: PortableTextTypeComponentProps<UrlValue>) => (
      <div className="relative pt-[56.25%] mb-12">
        <ReactPlayer
          className="absolute top-0 left-0"
          url={value.url}
          width="100%"
          height="100%"
        />
      </div>
    ),
    soundcloud: ({ value }: PortableTextTypeComponentProps<UrlValue>) => (
      <div className="mb-12">
        <ReactPlayer url={value.url} width="100%" height={166} />
      </div>
    ),
    spotify: ({ value }: PortableTextTypeComponentProps<UrlValue>) => (
      <div className="mb-12">
        <Spotify wide link={value.url} />
      </div>
    ),
  },
  marks: {
    strong: ({ children }: PortableTextMarkComponentProps) => (
      <strong className="text-white">{children}</strong>
    ),
    link: ({ children, value }: PortableTextMarkComponentProps<LinkValue>) => (
      <a href={value?.href} rel="noreferrer noopener" target="_blank" className="text-white">
        {children}
      </a>
    ),
  },
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-sm leading-relaxed mb-4 text-white">{children}</p>
    ),
  },
};

function Body({ blocks }: { blocks: PortableTextBlock[] }) {
  return <PortableText value={blocks} components={myPortableTextComponents} />;
}

export default Body;
