import { Skeleton } from "@/components/ui/skeleton";

export default function MainLoading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="container mx-auto px-4 md:px-14 py-8 md:pb-20 w-full h-[600px] md:h-[450px] ">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
        <Skeleton className="w-full h-46 md:w-96 md:h-[350px] rounded" />
        <Skeleton className="w-full h-38 md:h-[350px] rounded" />
      </div>
    </section>
  );
}
