import ShopProductPage from "@/app/_components/ShopProductPage";
import SingleProductPage from "@/app/_components/SingleProductPage";

const shopPage = async ({ params }: { params: { slug?: string[] } }) => {
   // Extract slug from params
 // ✅ Access `params.slug` only after the function begins
  const slug = (await Promise.resolve(params)).slug;

  if (slug && slug.length === 1) {
    return <SingleProductPage id={slug[0]} />;
  }

  return <ShopProductPage />;
};

export default shopPage;
