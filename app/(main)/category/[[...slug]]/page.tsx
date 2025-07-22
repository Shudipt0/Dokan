import CategoryProducts from "@/app/_components/CategoryProducts";
import CategorySingleProduct from "@/app/_components/CategorySingleProduct";

const categoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  if (slug && slug.length === 1) {
    return <CategoryProducts slug={slug[0]} />;
  }

  if (slug && slug.length === 2) {
    return <CategorySingleProduct id={slug[1]} />;
  }

  return <div>Category</div>;
};

export default categoryPage;


