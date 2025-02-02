import About from "@/section/About";
import Carousel from "@/section/Carousel";
import Clients from "@/section/Clients";
import Footer from "@/section/Footer";
import Header from "@/section/Header";
import Hero from "@/section/Hero";
import Philosophy from "@/section/Philosophy";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-[100vh] justify-between">
      <Header />
      <div>
        <Hero />
        <About />
        <Philosophy />
        <Carousel />
        <Clients />
      </div>
      <Footer />
    </main>
  );
}
