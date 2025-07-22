import { Toaster } from "sonner";
import BreadCrumbs from "../_components/BreadCrumbs";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <BreadCrumbs />
      {/* <SearchModal /> */}

      {children}
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
