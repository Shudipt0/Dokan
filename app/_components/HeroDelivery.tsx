import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

const allServices = [
  {
    id: 1,
    icon: <TbTruckDelivery />,
    title: "FREE AND FAST DELIVERY",
    text: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: <TfiHeadphoneAlt />,
    title: "24/7 CUSTOMER SERVICE",
    text: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: <AiTwotoneSafetyCertificate />,
    title: "MONEY BACK GUARANTEE",
    text: "We return money within 30 days",
  },
];

const HeroDelivery = () => {
  return (
    <section className="w-full flex justify-center my-10 md:py-20">
      <div className="md:w-[944px] md:h-[160px] flex justify-between ">
        {allServices.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-4">
            {/* icons */}
            <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] flex justify-center items-center bg-gray-300 rounded-full ">
              <div className="text-[16px] md:text-[35px] bg-black text-white p-3 rounded-full">
                {item.icon}
              </div>
            </div>
            <div className="text-center space-y-1">
              <h2 className="text-[11px] md:text-[16px] font-bold text-black/90 ">
                {item.title}
              </h2>
              <p className="text-[7px] md:text-[12px] font-semibold text-black/90">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroDelivery;
