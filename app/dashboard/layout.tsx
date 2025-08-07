import { ThemeProvider } from "@/components/providers/theme-provider";
import AppSidebar from "./_components/AppSidebar";
import Navbar from "./_components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      {/* Optional dashboard-specific UI, e.g. sidebar */}
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
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
