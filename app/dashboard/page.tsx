import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";

const page = async () => {
  const isAdmin = await checkRole("admin");

  if (!isAdmin) {
    redirect("/");
  }

  return <div>dashboard page</div>;
};

export default page;
