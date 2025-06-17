import Navbar from "@/app/layout/Navbar";
import Ampat from "@/app/layout/Ampat";
import About from "@/app/layout/About";
import TopDestination from "@/app/layout/TopDestination";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <Navbar />
      <Ampat />
      <About />
      <TopDestination />
    </main>
  );
}
