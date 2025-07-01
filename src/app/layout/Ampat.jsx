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
        flex-col lg:flex-row
        items-center lg:items-start
        justify-evenly lg:justify-evenly
        py-6 sm:py-8 lg:py-12
        gap-8 lg:gap-4
        px-4 sm:px-6 lg:px-8
        scroll-mt-50
      '
    >
      <LeftLargeArea />
      {/* Kontainer untuk RightTop dan RightLow */}
      <div className='flex flex-col gap-6 sm:gap-8 lg:gap-11 w-full lg:w-auto'>
        <RightTop />
        <RightLow />
      </div>
    </div>
  );
}
