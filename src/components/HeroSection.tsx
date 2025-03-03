"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="violet" // Tailwind "blue-400" with transparency
      />
      <div className="p-4 mt-20 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Rishikesh wagh
        </h1>
        <div className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto pt-6">
          Frontend Developer | React | 3+ Years Experience Passionate frontend
          developer at Evolent with 3+ years of experience building scalable and
          user-friendly web applications. Proficient in React, JavaScript, and
          modern UI frameworks, delivering high-performance and responsive
          designs. Focused on creating seamless user experiences and
          collaborating with cross-functional teams to drive innovation.
          <div className="mt-4">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-black dark:bg-slate-900 text-white dark:text-white border-neutral-800 dark:border-slate-950"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
