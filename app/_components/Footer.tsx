import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full h-[440px]">
      <div className="container mx-auto  px-2 md:px-14 md:py-5  flex flex-col">
        <div className="w-full md:h-[236px] flex items-start justify-around ">

        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-500 "></div>

      <div className="container mx-auto h-[40px] px-2 md:px-14 md:py-5 flex justify-center items-end">
         <p className="text-md text-gray-600">@Copyright by Shuvo 2025. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
