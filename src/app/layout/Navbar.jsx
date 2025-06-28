import TopWideSection from "../components/TopWideSection";
import TopNarrowSection from "../components/TopNarrowSection";

export default function Navbar() {
  return (
    <div className='w-full flex flex-row items-start justify-evenly sticky top-0 z-50'>
      {/* Mirip grid awal: kiri TopWideSection, kanan TopNarrowSection */}
      <TopWideSection />
      <TopNarrowSection />
    </div>
  );
}
