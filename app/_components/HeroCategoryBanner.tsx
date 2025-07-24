import Image from "next/legacy/image";
import categoryBanner from "@/public/categoryBanner.jpg";
import Link from "next/link";

const HeroCategoryBanner = () => {
  return (
    <div className="w-full h-[120px] md:h-[470px] relative">
      <Image
        src={categoryBanner}
        alt="category banner"
        width={1800}
        height={600}
      />
      <div className="absolute top-10 md:top-40 left-4 md:left-14 space-y-1 md:space-y-8">
        <p className="text-[12px] md:text-[16px] font-bold text-green-500 ">
          Categories
        </p>
        <h1 className=" md:w-[300px] text-[10px] md:text-4xl font-semibold text-white ">
          Enhance Your Music Experience
        </h1>
        <button className="w-[70px] h-4 md:w-[180px] md:h-12 text-white text-[10px] md:text-[16px] font-semibold bg-green-500 hover:bg-green-600 rounded flex items-center justify-center ">
          <Link href="#">Buy Now!</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroCategoryBanner;
