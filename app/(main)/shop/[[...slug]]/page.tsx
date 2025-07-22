import ShopProductPage from "@/app/_components/ShopProductPage";
import SingleProductPage from "@/app/_components/SingleProductPage";

const shopPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
   // Extract slug from params
  //  { params }: { params: { slug?: string[] } }
 // ✅ Access `params.slug` only after the function begins
  // const slug = (await Promise.resolve(params)).slug;
  const { slug } = await params;


  if (slug && slug.length === 1) {
    return <SingleProductPage id={slug[0]} />;
  }

  return <ShopProductPage />;
};

export default shopPage;
