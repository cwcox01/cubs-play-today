// importing components from components folder
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import MinorLeagues from "@/components/Minors/MinorLeagues";

export default function Minors() {
  return (
    <>
      <Navbar />
      <MinorLeagues />
      <Footer />
    </>
  );
}
