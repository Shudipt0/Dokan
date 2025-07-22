"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumbs = () => {
  const pathName = usePathname();
  const pathParts = pathName.split("/").filter((part) => part);
  //  console.log(pathParts)
  let breadcrumbPath = "";
  return (
    <div className={`container mx-auto px-2 md:px-14 bg-white`}>
      <div className={` ${pathName === '/' ? 'h-0 py-0' : 'h-8 py-8'}  flex items-center gap-4`}>
        <Link
          href="/"
          className={`${pathName === "/" ? "hidden" : "text-gray-400"}`}
        >
          Home
        </Link>
        {pathParts.map((name, index) => {
          breadcrumbPath += `/${name}`;
          return (
            <div
              key={index}
              className={`${
                index === pathParts.length - 1
                  ? " text-black capitalize "
                  : "text-gray-400"
              }`}
            >
              {" "}
              / {name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumbs;
