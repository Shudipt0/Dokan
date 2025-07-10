import SearchProducts from "@/app/_components/SearchProducts";

const productsPage = ({ params }: { params: { slug?: string[] } }) => {
  const slug = params.slug;
  //  console.log(slug)

  if (slug && slug.length === 1) {
    return <SearchProducts slug={slug[0]} />;
  }

  return <div>Product page</div>;
};

export default productsPage;
