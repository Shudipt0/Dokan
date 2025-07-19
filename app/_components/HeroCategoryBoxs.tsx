import HeroHeadLine from "./HeroHeadLine";
import CategoryBox from "./CategoryBox";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { TfiHeadphone } from "react-icons/tfi";
import { FaMotorcycle } from "react-icons/fa6";


const categoryBoxItems = [
  {
    id: 1,
    icon: <HiOutlineDevicePhoneMobile />,
    name: "phones",
    link: "/category/smartphones",
  },
  { id: 2, icon: <FaComputer />, name: "computers", link: "/category/laptops" },
  { id: 3, icon: <BsSmartwatch />, name: "SmartWatch",link: "/category/mens-watches" },
  { id: 4, icon: <MdOutlineLocalGroceryStore />, name: "Groceries", link: "/category/groceries" },
  { id: 5, icon: <TfiHeadphone />, name: "Mobile Accessories", link: "/category/mobile-accessories" },
  { id: 6, icon: <FaMotorcycle />, name: "Motorcycle", link: "/category/motorcycle" },
  { id: 7, icon: <HiOutlineDevicePhoneMobile />, name: "phones", link: "#" },
  { id: 8, icon: <FaComputer />, name: "phones", link: "#" },
];

const HeroCategoryBoxs = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <section className="py-24 border-b border-gray-300">
      <div className=" relative w-full md:h-[314px] flex flex-col justify-between">
        <HeroHeadLine thumb={"Categories"} title={"Browse By Category"} />
        {/* carousel section */}
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass=" mx-1 "
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside={true}
        >
          {categoryBoxItems.map((item) => (
            <CategoryBox key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroCategoryBoxs;

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group absolute md:top-16 md:right-6 md:space-x-3 ">
      <button
        className={`text-black p-3 rounded-full bg-gray-100  hover:bg-gray-200 cursor-pointer ${
          currentSlide === 0 ? "disable" : ""
        }`}
        onClick={() => previous()}
      >
        <GoArrowLeft />
      </button>
      <button
        onClick={() => next()}
        className="text-black p-3 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
      >
        <GoArrowRight />
      </button>
    </div>
  );
};
