import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Residences from "@/components/Residences";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import Architecture from "@/components/Architecture";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Introduction />
      <Residences />
      <Amenities />
      <Location />
      <Architecture />
      <Registration />
      <Footer />
    </main>
  );
}
