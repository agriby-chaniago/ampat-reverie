import Navbar from "./Navbar";
import LeftLargeArea from "./layout/LeftLargeArea";
import RightUpperTall from "./layout/RightUpperTall";
import RightLowerShort from "./layout/RightLowerShort";

export default function GridLayout() {
  return (
    <div className='grid grid-cols-10 grid-rows-10 gap-0 w-full h-screen border border-cyan-400'>
      <Navbar />
      <LeftLargeArea />
      <RightUpperTall />
      <RightLowerShort />
    </div>
  );
}
