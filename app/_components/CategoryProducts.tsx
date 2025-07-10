"use client";

// import ProductCard from "@/app/_components/ProductCard";
import ProductCardTwo from "@/app/_components/ProductCardTwo";
import { fetchCategoryItem } from "@/app/api/Api";
import { useQuery } from "@tanstack/react-query";

interface Products {
  id: string | number;

  // add other product fields as needed
}

const CategoryProducts = ({ slug }: { slug: string }) => {
    // Fetch products based on the category slug
    // console.log(slug);
    
  const { data } = useQuery({
    queryKey: ["products", slug],
    queryFn: () => fetchCategoryItem(slug),
  });
  // console.log(data)
  return (
    <section className="container mx-auto px-2 md:px-14 bg-white md:flex justify-between md:py-20">
      <div className="">inputs</div>

      {/* products section */}
      <div className="md:w-[860px] grid grid-cols-3 gap-6">
        {data?.products?.map((item: Products) => (
          <ProductCardTwo key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CategoryProducts;
