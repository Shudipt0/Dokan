import Image from "next/legacy/image";
import categoryBanner from "@/public/categoryBanner.jpg";
import Link from "next/link";

const HeroCategoryBanner = () => {
  return (
    <div className="w-full md:h-[500px] relative">
      <Image
        src={categoryBanner}
        alt="category banner"
        className="w-full h-full bg-cover "
      />
      <div className="absolute top-40 left-14 space-y-8">
        <p className=" text-[16px] font-bold text-green-500 ">
          Categories
        </p>
        <h1 className=" md:w-[300px] md:text-4xl font-semibold text-white ">
          Enhance Your Music Experience
        </h1>
        <button className='md:w-[180px] md:h-12 text-white text-[16px] font-semibold bg-green-500 hover:bg-green-600 rounded flex items-center justify-center '>
      <Link href='#'>Buy Now!</Link>
    </button>
      </div>
    </div>
  );
};

export default HeroCategoryBanner;
