import TopNarrowSection from "./layout/TopNarrowSection";
import TopWideSection from "./layout/TopWideSection";

export default function Navbar() {
  return (
    <div className='col-start-1 col-end-11 row-start-1 row-end-2 grid grid-cols-10 sticky top-0 z-50 bg-white/80 backdrop-blur'>
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
