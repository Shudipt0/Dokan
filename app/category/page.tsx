'use client'

import { useQuery } from "@tanstack/react-query";
import HeroCategory from "../_components/HeroCategory";
import { fetchAllCategory } from "../api/Api";

const categoryPage = () => {
     const {data,isPending, isError,error} = useQuery({
        queryKey: ["categories"],
        queryFn: fetchAllCategory,
     });
   //   console.log(data);
     if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
       <HeroCategory categories={data} />
    </div>
  )
}

export default categoryPage
