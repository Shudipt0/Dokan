"use client";
import ProductCard from "../_components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { fetchCategoryItem } from "../api/Api";

interface Products {
  id: string | number;

  // add other product fields as needed
}

const fragrancePage = () => {
  const { data } = useQuery({
    queryKey: ["products", "fragrances"],
    queryFn: () => fetchCategoryItem("fragrances"),
    staleTime: 1000 * 60 * (60 * 24), // 24 hours
    refetchOnWindowFocus: false,
  });
  console.log(data);
  return (
    <section className=" container mx-auto px-2 md:px-14 bg-white md:flex justify-between md:py-20">
      <div className="">inputs</div>

      {/* products section */}
      <div className="md:w-[860px] grid grid-cols-3 gap-6">
        {data?.products?.map((item: Products) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default fragrancePage;
