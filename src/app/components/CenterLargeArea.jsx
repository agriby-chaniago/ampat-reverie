export default function CenterLargeArea() {
  return (
    <div className='absolute top-[1278px] left-[64px] w-[1792px] h-[472px] flex overflow-hidden rounded-[20px] border border-white backdrop-blur-xs px-[60px] py-[40px]'>
      {/* Left Side */}
      <div className='flex-1 flex flex-col justify-start gap-2 pr-8'>
        <h2 className='text-white font-[Gully] font-normal text-[60px] leading-[1.05]'>
          About
        </h2>
        <h1 className='text-white font-[Gully] font-bold text-[100px] leading-[1.05] mt-10'>
          RAJA AMPAT
        </h1>
        <p className='text-white font-[Gully] font-light text-[30px] leading-[1.2] max-w-[850px] mt-10'>
          Raja Ampat, meaning "Four Kings" in Indonesian, refers to the four
          main islands: Misool, Salawati, Batanta, and Waigeo. This remote
          archipelago in West Papua is home to the richest marine biodiversity
          on Earth.
        </p>
      </div>

      {/* Right Side (fixed width + height) */}
      <div className='w-[492px] h-[332px] flex items-center justify-start my-auto mr-5'>
        <p className='text-white font-[Gully] font-light text-[56px] leading-[60px] tracking-tight text-left'>
          Discover the crown jewel of marine biodiversity where pristine nature
          meets ancient culture
        </p>
      </div>
    </div>
  );
}
