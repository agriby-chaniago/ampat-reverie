import CenterLargeArea from "../components/CenterLargeArea";
import LeftLowerSection from "../components/LeftLowerSection";
import RightLowerSection from "../components/RightLowerSection";

export default function About() {
  return (
    <div 
      id='about'
      className='w-full flex flex-col gap-2 py-34'
    >
      {/* Top row (similar to flex in Navbar but as a single component) */}
      <CenterLargeArea />
      
      {/* Bottom row (similar to Navbar structure: left and right) */}
      <div className='w-full flex flex-row items-start justify-evenly'>
        <LeftLowerSection />
        <RightLowerSection />
      </div>
    </div>
  );
}
