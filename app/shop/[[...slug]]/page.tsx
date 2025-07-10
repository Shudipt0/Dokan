import ShopProductPage from "@/app/_components/ShopProductPage";
import SingleProductPage from "@/app/_components/SingleProductPage";

const shopPage = ({ params }: { params: { slug?: string[] } }) => {
  const slug = params.slug;

  if (slug && slug.length === 1) {
    return <SingleProductPage id={slug[0]} />;
  }

  return <ShopProductPage />;
};

export default shopPage;
