import CenterLargeArea from "../components/CenterLargeArea";
import LeftLowerSection from "../components/LeftLowerSection";
import RightLowerSection from "../components/RightLowerSection";

export default function About() {
  return (
    <div
      id='about'
      className='grid grid-cols-10 grid-rows-9 gap-0 w-full h-screen'
    >
      <CenterLargeArea />
      <LeftLowerSection />
      <RightLowerSection />
    </div>
  );
}
