//importing components from components folder on root directory
import Navbar from "@/components/Navbar/Navbar";
import Mlb from "@/components/Mlb/Mlb";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Mlb />
        <Footer />
      </main>
    </>
  );
}
