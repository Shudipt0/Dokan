import SearchProducts from "@/app/_components/SearchProducts";

const productsPage = async ({ params }: { params: { slug?: string[] } }) => {
  // Extract slug from params
 // ✅ Access `params.slug` only after the function begins
  const slug = (await Promise.resolve(params)).slug;
  //  console.log(slug)

  if (slug && slug.length === 1) {
    return <SearchProducts slug={slug[0]} />;
  }

  return <div>Product page</div>;
};

export default productsPage;
