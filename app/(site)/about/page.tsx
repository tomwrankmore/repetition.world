"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const about = () => {
  return (
    <div className="prose">
      <p className="text-sm mb-6">I am a professional producer, composer &amp; DJ with over a 10 years of experience. Clients include YouTube, Resident Advisor, Jagermeister, Untold Studios, &amp; Lacoste. If you&#39;d like chat about a project, don&#39;t hesitate to <Link href="/contact">get in touch</Link>.</p>
      {/* <ReactPlayer
        className=""
        url="https://soundcloud.com/joy-orbison/tentative-bidding-demo"
      /> */}
    </div>
  );
};

export default about;