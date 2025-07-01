import Navbar from "@/app/layout/Navbar";
import Ampat from "@/app/layout/Ampat";
import About from "@/app/layout/About";
import TopDestination from "@/app/layout/TopDestination";
import Why from "@/app/layout/Why";
import GalleryVisual from "@/app/layout/GalleryVisual";
import Footer from "@/app/layout/Footer";

const BACKGROUND_STYLES = {
  backgroundImage: "url('/assets/bgGalleryFooter.png')",
  backgroundSize: "100% 2160px",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
};

const GalleryFooterSection = () => (
  <div className='relative w-full' style={BACKGROUND_STYLES}>
    <div className='absolute inset-0 bg-black/40 z-0' />
    <div className='relative z-10 flex flex-col'>
      <GalleryVisual />
      <Footer />
    </div>
  </div>
);

export default function Home() {
  return (
    <main className='flex flex-col w-full'>
      <Navbar />
      <Ampat />
      <About />
      <TopDestination />
      <Why />
      <GalleryFooterSection />
    </main>
  );
}
