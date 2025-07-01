'use client'
import Image from "next/image";
import SearchModal from "./_components/SearchModal";
import HeroBanner from "./_components/HeroBanner";
import HeroFlashsale from "./_components/HeroFlashsale";
import HeroCategoryBoxs from "./_components/HeroCategoryBoxs";
import HeroSelling from "./_components/HeroSelling";
import HeroCategoryBanner from "./_components/HeroCategoryBanner";

export default function Home() {
  return (
    <section>
      <div className="container mx-auto px-2 md:px-14 bg-white">
          <HeroBanner/>
          <HeroFlashsale/>
          <HeroCategoryBoxs/>
          <HeroSelling/>
          <HeroCategoryBanner/>
      </div>

     <SearchModal/>
    </section>
  );
}
