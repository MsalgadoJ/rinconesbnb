import React from "react";
import Typewriter from "typewriter-effect";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center bg-hero bg-cover h-[500px] mt-4">
      <h2 className="text-zinc-100 text-5xl font-bold">
        <ReactTyped
          startWhenVisible
          strings={["Lechería te espera!"]}
          typeSpeed={90}
        />
      </h2>
    </div>
  );
}
