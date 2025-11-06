import { Dot } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

interface InfoBarProps {
  hidden: boolean;
}

function InfoBar({ hidden }: InfoBarProps) {
  return (
    <motion.div
      initial={{ display: "none", opacity: 0 }}
      animate={hidden ? { display: "flex", opacity: 1, width: 300 } : {}}
      transition={{ duration: 0.2, delay: 0.3 }}
      className="absolute z-20 flex h-full w-9/12 items-center justify-between rounded-2xl bg-black px-4 text-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
    >
      <div className="rounded-xl border border-purple-900 p-[0.2px]">
        <Image
          height={30}
          width={30}
          className="rounded-xl"
          alt="profile"
          src={
            "https://lh3.googleusercontent.com/a/ACg8ocKqMq4Z4r6e2EUbMPY9BXU8FwbLm7aaQm4OqEY_eWKJUEkYGL1x=s576-c-no"
          }
        />
      </div>
      <div className="flex flex-1 flex-col justify-center px-3">
        <h1 className="text-neutral-200">Gym Motivation</h1>
        <p className="-ml-1 flex items-center justify-start text-xs text-neutral-400">
          {" "}
          <span className="scale-200 animate-pulse">
            <Dot color="purple" size={15} />
          </span>
          codercastor
        </p>
      </div>
    </motion.div>
  );
}

export default InfoBar;
