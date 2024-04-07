import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center bg-hero bg-cover h-[500px]">
      <h2 className="bg-neutral-50/20 text-zinc-100 text-5xl font-bold p-2 rounded-lg">
        <ReactTyped
          startWhenVisible
          strings={["Lechería te espera!"]}
          typeSpeed={90}
        />
      </h2>
    </div>
  );
}
