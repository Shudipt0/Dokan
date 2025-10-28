import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import { AppAreaChart } from "./_components/AppAreaChart";
import AppBarChart from "./_components/AppBarChart";
import { AppPieChart } from "./_components/AppPieChart";
import CardList from "./_components/CardList";
import TodoList from "./_components/TodoList";

const Homepage = async () => {
  const isAdmin = await checkRole("admin");

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="min-h-[416px] bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 ">
        <AppBarChart />
      </div>
      <div className="min-h-[416px] bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transaction" />
      </div>
      <div className="min-h-[416px] bg-primary-foreground p-4 rounded-lg ">
        <AppPieChart />
      </div>
      <div className="min-h-[416px] bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>
      <div className="min-h-[416px] bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 ">
        <AppAreaChart />
      </div>
      <div className="min-h-[416px] bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
};

export default Homepage;
