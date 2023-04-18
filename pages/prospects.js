// importing components from components/prospects folder
import Prospects from "@/components/Prospects/Prospects";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function ProspectList() {
  return (
    <>
      <Navbar />
      <Prospects />
      <Footer />
    </>
  );
}
