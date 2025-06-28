import LeftLargeArea from "../components/LeftLargeArea";
import RightUpperTall from "../components/RightUpperTall";
import RightLowerShort from "../components/RightLowerShort";

export default function Ampat() {
  return (
    <div className='w-full flex flex-row items-start justify-evenly py-16'>
      {/* Left Side - Direct component like Navbar */}
      <LeftLargeArea />
      
      {/* Right Side - Stacked components */}
      <div className='flex flex-col gap-11'>
        <RightUpperTall />
        <RightLowerShort />
      </div>
    </div>
  );
}
