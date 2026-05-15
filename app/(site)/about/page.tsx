"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const about = () => {
  return (
    <div className="prose text-white">
      <p className="text-sm mb-6">Tom Wrankmore is a London-based producer, composer and DJ with over ten years of experience creating music for brands, artists and screen. Working across advertising, sync and club culture, he brings the same ear for detail to a 30-second TV spot as to a full-length record.</p>

      <p className="text-sm mb-6">Commercial clients include McDonald&apos;s, Squarespace, YouTube, Apple, Lacoste, Jägermeister and Resident Advisor. For McDonald&apos;s he composed the score for their 2024 Christmas TV campaign. For Squarespace he produced the music for a brand refresh campaign, placing his sound at the centre of one of the world&apos;s most recognised design platforms.</p>
      <p className="text-sm mb-6">Under the alias Eliphino, Tom releases original music on [Label name] and has performed DJ sets across the globe from UK, across Europe, to India and Columbia. </p>
      <p className="text-sm mb-6">His recorded output spans UK club music, broken beat, house, garage and has appeared on Somethinksounds, Hypercolour &amp; Brownswood Recordings.</p>
      <p className="text-sm mb-6">He also collaborates closely with the music industry — recent projects include work with Somethin&apos; Else and Sony Music Entertainment, and a long - running relationship with Resident Advisor across multiple brand partnerships.</p >
      <p className="text-sm mb-6">If you&apos;re working on a project that needs a distinctive sound, <Link href="/contact" className="text-indigo-50">get in touch</ Link>.</p>
      {/* <ReactPlayer
        className=""
        url="https://soundcloud.com/joy-orbison/tentative-bidding-demo"
      /> */}
    </div >
  );
};

export default about;