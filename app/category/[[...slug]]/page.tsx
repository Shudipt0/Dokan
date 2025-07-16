import CategoryProducts from "@/app/_components/CategoryProducts";
import CategorySingleProduct from "@/app/_components/CategorySingleProduct";


const categoryPage = async ({ params }: { params: { slug?: string[] } }) => {
  // Extract slug from params
 // ✅ Access `params.slug` only after the function begins
  const slug = (await Promise.resolve(params)).slug;

  

  if (slug && slug.length === 1) {
    return <CategoryProducts slug={slug[0]} />;
  }

  if (slug && slug.length === 2) {
    return <CategorySingleProduct id={slug[1]} />;
  }

  return <div>Category</div>;
};

export default categoryPage;
