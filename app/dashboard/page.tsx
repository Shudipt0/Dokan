import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import AppBarChart from "./_components/AppBarChart";
import { AppAreaChart } from "./_components/AppAreaChart";
import { AppPieChart } from "./_components/AppPieChart";


const Homepage = async () => {
  const isAdmin = await checkRole("admin");

  if (!isAdmin) {
    redirect("/");
  }

  return (
  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
       <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 "><AppBarChart/></div>
       <div className="bg-primary-foreground p-4 rounded-lg">test</div>
       <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart/></div>
       <div className="bg-primary-foreground p-4 rounded-lg">test</div>
       <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 "><AppAreaChart/></div>
       <div className="bg-primary-foreground p-4 rounded-lg">test</div>
  </div>
  );
};

export default Homepage;
