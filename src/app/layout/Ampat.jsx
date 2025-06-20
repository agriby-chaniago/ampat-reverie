import LeftLargeArea from "../components/LeftLargeArea";
import RightUpperTall from "../components/RightUpperTall";
import RightLowerShort from "../components/RightLowerShort";

export default function Ampat() {
  return (
    <div
      id='ampat'
      className='grid grid-cols-10 grid-rows-10 gap-0 w-full h-screen'
    >
      <LeftLargeArea />
      <RightUpperTall />
      <RightLowerShort />
    </div>
  );
}
