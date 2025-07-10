"use client";
import { fetchSearchProducts } from "@/app/api/Api";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/app/_components/ProductCard";

// Define the Products type (adjust fields as needed)
type Products = {
  id: string;
  // add other fields as needed, e.g. name: string, price: number, etc.
};

const SearchProducts = ({ slug }: { slug: string }) => {
  const { data } = useQuery({
    queryKey: ["products", slug],
    queryFn: () => fetchSearchProducts(slug),
  });

  //  console.log(data)
  return (
    <div className="container mx-auto px-2 md:px-14 md:py-20 bg-white">
        <h1 className="text-2xl text-black/80 font-bold mb-6">Search Results for "{slug}"</h1>
      <div className="md:w-full grid grid-cols-4 gap-6 space-y-6">
        {data?.map((item: Products) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
