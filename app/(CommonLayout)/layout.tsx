import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto ">
      <Navbar />
      <main className=" ">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
