import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {meteors.map((_, idx) => {
        const randomX = Math.random() * 100; // Full screen width
        const randomY = Math.random() * 100; // Full screen height
        const delay = `${Math.random() * (0.8 - 0.2) + 0.2}s`;
        const duration = `${Math.random() * (10 - 2) + 2}s`;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              className
            )}
            style={{
              top: `${randomY}vh`, // Anywhere from 0% to 100% of screen height
              left: `${randomX}vw`, // Anywhere from 0% to 100% of screen width
              animationDelay: delay,
              animationDuration: duration,
            }}
          ></span>
        );
      })}
    </div>
  );
};
