import Image from "next/image";
import sideImage from "@/public/SideImage.png";
import HeroDelivery from "@/app/_components/HeroDelivery";
import AboutNumberCard from "@/app/_components/AboutNumberCard";
import Team from "@/app/_components/Team";

const AboutPage = () => {
  return (
    <section className="container mx-auto px-2 md:px-14 md:pt-10 bg-white">
      {/* story part */}
      <div className="w-full flex justify-between items-center">
        {/* left site */}
        <div className="w-1/2 flex flex-col gap-6 ">
          <h1 className="text-5xl font-semibold text-black/90 pb-5">
            Our Story
          </h1>
          <p className="text-[18px] text-black/90">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="text-[18px] text-black/90">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        {/* right site */}
        <div>
          <Image src={sideImage} alt="side image" width={600} height={600} />
        </div>
      </div>

      {/* number card part */}
      <AboutNumberCard />
      {/* team section */}
      <Team />
      {/* delivery part */}
      <HeroDelivery />
    </section>
  );
};

export default AboutPage;
