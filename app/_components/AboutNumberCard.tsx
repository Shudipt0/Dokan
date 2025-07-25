"use client";
import { FiHome } from "react-icons/fi";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { LuShoppingBag } from "react-icons/lu";
import { FaSackDollar } from "react-icons/fa6";
import { useState } from "react";

const allItems = [
  {
    id: 1,
    icon: <FiHome />,
    title: "10.5K",
    text: "Sellers active on our site",
    // isActive: false,
  },
  {
    id: 2,
    icon: <PiCurrencyCircleDollar />,
    title: "33k",
    text: "Monthly Product Sale",
    // isActive: false,
  },
  {
    id: 3,
    icon: <LuShoppingBag />,
    title: "45.5k",
    text: "Customer active in our site",
    // isActive: false,
  },
  {
    id: 4,
    icon: <FaSackDollar />,
    title: "25k",
    text: "Anual gross sale in our site",
    // isActive: false,
  },
];

const AboutNumberCard = () => {
  const [isActive, setIsActive] = useState<number | null>(allItems[0].id);

  const handleActive = (id: number) => {
    setIsActive(id);
  };
  console.log(isActive);
  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-2 pt-6 md:pt-30 ">
      {allItems.map((item) => (
        <button
          onClick={() => handleActive(item.id)}
          key={item.id}
          className={`w-[170px] h-38 md:w-[270px] md:h-[230px] border border-gray-300 rounded cursor-pointer flex flex-col items-center justify-center gap-2 md:gap-5 group  duration-200  ${
            isActive === item.id
              ? "bg-[#DB4444]"
              : "bg-white hover:bg-[#DB4444]"
          }`}
        >
          <div
            className={`w-14 h-14 md:w-[80px] md:h-[80px] flex justify-center items-center  rounded-full ${
              isActive === item.id
                ? "bg-[#f39c9c]"
                : "bg-gray-300 group-hover:bg-[#f39c9c]"
            } `}
          >
            <div
              className={`text-sm md:text-[30px] p-3 rounded-full ${
                isActive === item.id
                  ? "bg-white text-black "
                  : "bg-black text-white group-hover:bg-white group-hover:text-black"
              } `}
            >
              {item.icon}
            </div>
          </div>
          <div className="text-center space-y-1">
            <h2
              className={`text-[16px] md:text-[28px] font-bold  ${
                isActive === item.id
                  ? "text-white"
                  : "text-black/90 group-hover:text-white"
              }`}
            >
              {item.title}
            </h2>
            <p
              className={`text-[10px] md:text-[12px] font-semibold  ${
                isActive === item.id
                  ? "text-white"
                  : "text-black/90 group-hover:text-white"
              }`}
            >
              {item.text}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default AboutNumberCard;
