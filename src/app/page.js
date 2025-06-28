import Navbar from "@/app/layout/Navbar";
import Ampat from "@/app/layout/Ampat";
import About from "@/app/layout/About";
import TopDestination from "@/app/layout/TopDestination";
import Why from "@/app/layout/Why";
import GalleryVisual from "@/app/layout/GalleryVisual";
import Footer from "@/app/layout/Footer";
import RealFooter from "@/app/layout/RealFooter";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <Navbar />
      <Ampat />
      <About />
      <TopDestination />
      <Why />
      <GalleryVisual />
      <Footer />
      {/* <RealFooter /> */}
    </main>
  );
}
