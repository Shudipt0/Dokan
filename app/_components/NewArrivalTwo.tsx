import Image from "next/legacy/image";
import Link from "next/link";
import newItemTwo from "../../public/newItemTwo.png";

const NewArrivalTwo = () => {
  return (
    <Link
      href="/womens-new-dress"
      className="md:w-[570px] md:h-[284px] relative bg-black/90 flex justify-center items-end"
    >
      <Image
        src={newItemTwo}
        alt="category banner"
        className="w-full h-full bg-cover "
        width={570}
        height={284}
      />
      <div className="absolute bottom-8 left-8 space-y-2">
        <p className=" text-[26px] font-semibold text-white ">
          Women’s Collections
        </p>
        <h1 className=" md:w-[220px] md:text-[12px] font-normal text-white ">
          Featured woman collections that give you another vibe.
        </h1>

        <button className="text-white text-[16px] font-semibold underline underline-offset-4 cursor-pointer ">
          Shop Now!
        </button>
      </div>
    </Link>
  );
};

export default NewArrivalTwo;
