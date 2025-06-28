import LeftLargeArea from "../components/LeftLargeArea";
import RightTop from "../components/RightTop";
import RightLow from "../components/RightBottom";

export default function Ampat() {
  return (
    <div
      id='ampat'
      className='
    w-full
    flex
    flex-row
    items-start
    justify-evenly
    py-12
    scroll-mt-50
  '
    >
      <LeftLargeArea />
      <div className='flex flex-col gap-11'>
        <RightTop />
        <RightLow />
      </div>
    </div>
  );
}
