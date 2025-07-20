'use client'
import HeroBanner from "./_components/HeroBanner";
import HeroFlashsale from "./_components/HeroFlashsale";
import HeroCategoryBoxs from "./_components/HeroCategoryBoxs";
import HeroSelling from "./_components/HeroSelling";
import HeroCategoryBanner from "./_components/HeroCategoryBanner";
import HeroAllProducts from "./_components/HeroAllProducts";
import HeroDelivery from "./_components/HeroDelivery";
import HeroNewArrival from "./_components/HeroNewArrival";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
//   useEffect(() => {
//   toast.success("Test toast works!");
// }, []);
  return (
    <section>
      <div className="container mx-auto px-2 md:px-14 bg-white">
          <HeroBanner/>
          <HeroFlashsale/>
          <HeroCategoryBoxs/>
          <HeroSelling/>
          <HeroCategoryBanner/>
          <HeroAllProducts/>
          <HeroNewArrival/>
          <HeroDelivery/>
      </div>

    </section>
  );
}
