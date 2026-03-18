"use client";

import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { PortableText } from "@portabletext/react";
import { Spotify } from "react-spotify-embed";

const myPortableTextComponents = {
  types: {
    break: () => {
      return <br/>;
    },
    youtube: ({value}:any) => {
      const { url } = value;
      return (
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            className="absolute top-0 left-0 mb-12"
            url={url}
            width="100%"
            height="100%"
          />
        </div>
      );
    },
    soundcloud: ({value}:any) => {
      const { url } = value;
      return (
        <div>
          <ReactPlayer
            className=""
            url={url}
            width="100%"
            height="100%"
          />
        </div>
      );
    },
    spotify: ({value}:any) => {
      const { url } = value;
      return (
        <div className="mb-12">
          <Spotify wide link={url} />
        </div>
      );
    },
  },
  marks: {
    link: ({children, value}:any) => {
      return (
        <a href={value.href} rel='noreferrer noopener' target="_blank">
          {children}
        </a>
      )
    },
  },
  block: {
    normal: ({ children }: any) => (
      <p className="text-sm leading-relaxed mb-4">
        {children}
      </p>
    ),
  },
};

function Body({ blocks }:any) {
  return <PortableText value={blocks} components={myPortableTextComponents} />;
}

export default Body;
