import { Dot, Headphones } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h4 className="text-neutral-600 mt-4">
        Design and Develop by codercastor
      </h4>
      <h1 className="text-lg lg:text-3xl flex items-center gap-2 mt-2">
        This is production branch of{" "}
        <span className="bg-red-700/40 px-2 py-2 rounded-md ml-1 flex items-center justify-center gap-2">
          {" "}
          <Headphones /> Shraone
        </span>
      </h1>
      <p className="bg-yellow-300/30 pl-1 pr-2 rounded-xl mt-3 flex text-neutral-300">
        {" "}
        <span className="animate-ping">
          <Dot />
        </span>{" "}
        Work is under construction
      </p>
    </div>
  );
}
