"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const about = () => {
  return (
    <div className="prose">
      <p className="text-sm mb-6">I&#39;ve been a professional producer and DJ for over a decade and have more recently started working as a composer. So far I&#39;ve worked with clients such as YouTube, Untold Studios, Resident Advisor, Jagermeister &amp; Lacoste. If you&#39;d like chat about a project, don&#39;t hesitate to <Link href="/contact">get in touch</Link>.</p>
      {/* <ReactPlayer
        className=""
        url="https://soundcloud.com/joy-orbison/tentative-bidding-demo"
      /> */}
    </div>
  );
};

export default about;