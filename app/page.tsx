'use client'
import Image from "next/image";
import SearchModal from "./_components/SearchModal";
import HeroBanner from "./_components/HeroBanner";

export default function Home() {
  return (
    <section>
      <div className="container mx-auto px-2 md:px-14">
          <HeroBanner/>
      </div>

     <SearchModal/>
    </section>
  );
}
