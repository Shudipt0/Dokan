import { ThemeProvider } from "@/components/providers/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import AppSidebar from "./_components/AppSidebar";
import Navbar from "./_components/Navbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <section className="flex">
      {/* Optional dashboard-specific UI, e.g. sidebar */}
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <div className="w-full">
            <Navbar />
            <div className="px-4">{children}</div>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </section>
  );
}
