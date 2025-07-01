import React from "react";

interface HeadLine {
  thumb: string;
  title: string;
}

const HeroHeadLine = ({thumb, title} : HeadLine) => {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-6">
        <div className="md:w-[20px] md:h-[40px] rounded bg-[#DB4444] "></div>
        <p className="text-[16px] font-bold text-[#DB4444] ">{thumb}</p>
      </div>

      <h1 className="md:text-4xl font-semibold text-black/90 ">{title}</h1>
    </div>
  );
};

export default HeroHeadLine;
