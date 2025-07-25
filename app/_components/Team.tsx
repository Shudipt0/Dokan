import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiTwitter } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
import man1 from "@/public/man1.png";
import man2 from "@/public/man2.png";
import man3 from "@/public/man3.png";

const allMembers = [
  {
    id: "1",
    name: "Tom Smith",
    position: "Founder & Chairman",
    image: man1,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: "2",
    name: "Emma Watson",
    position: "Managing Director",
    image: man2,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: "3",
    name: "Will Smith",
    position: "Product Designer",
    image: man3,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const Team = () => {
  return (
    <div className=" w-full pt-10 pb-6 md:pt-40 md:py-20 flex items-center justify-between">
      {allMembers.map((member) => (
        <div
          key={member.id}
          className="w-28 h-52 md:w-[370px] md:h-[564px] flex flex-col gap-2 md:gap-4 "
        >
          <Image
            src={member.image}
            alt={member.name}
            width={370}
            height={430}
          />
          <div className="text-start md:space-y-1">
            <h2 className="text-[16px] md:text-[28px] font-semibold text-black/90 ">
              {member.name}
            </h2>
            <p className="text-[10px] md:text-sm font-semibold text-black/90 ">
              {member.position}
            </p>
          </div>
          {/* icons */}
          <div className="flex items-center gap-3">
            <Link
              href={member.socialLinks.twitter}
              className="text-[16px] md:text-[24px] "
            >
              <CiTwitter />
            </Link>
            <Link
              href={member.socialLinks.instagram}
              className="text-[16px] md:text-[24px] "
            >
              <PiInstagramLogoLight />
            </Link>
            <Link
              href={member.socialLinks.linkedin}
              className="text-[16px] md:text-[24px] "
            >
              <RiLinkedinLine />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
