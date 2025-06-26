import Link from "next/link";


const TopNavbar = () => {
  return (
     <div className="bg-black ">
        <div className="container mx-auto flex items-center justify-center md:justify-end h-16 md:h-[48px] md:px-14">
          <div className="flex flex-col md:flex-row justify-center md:items-center md:justify-between gap-2 md:gap-[400px]">
            <h1 className="text-white text-[10px] md:text-sm font-extralight ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!{" "}
              <span>
                <Link href="#" className="underline font-bold ">
                  ShopNow
                </Link>
              </span>
            </h1>
            <select
              name="language"
              id=""
              className="text-white text-[12px] md:text-sm font-semibold w-16 md:w-[72px] "
            >
              <option
                value="en"
                className="text-black text-[12px] md:text-sm font-medium"
              >
                English
              </option>
              <option
                value="fr"
                className="text-black text-[12px] md:text-sm font-medium"
              >
                French
              </option>
              <option
                value="es"
                className="text-black text-[12px] md:text-sm font-medium"
              >
                Spanish
              </option>
            </select>
          </div>
        </div>
      </div>
  )
}

export default TopNavbar
