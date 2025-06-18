import TopNarrowSection from "../components/TopNarrowSection";
import TopWideSection from "../components/TopWideSection";

export default function Navbar() {
  return (
    <div className='w-full h-full col-start-1 col-end-11 row-start-1 row-end-2 grid grid-cols-10 sticky top-0 z-50'>
      {/* Left (7 kolom) */}
      <div className='col-span-7'>
        <TopWideSection />
      </div>

      {/* Right (3 kolom) */}
      <div className='col-span-3'>
        <TopNarrowSection />
      </div>
    </div>
  );
}
