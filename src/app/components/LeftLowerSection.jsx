export default function LeftLowerSection() {
  return (
    <div className='absolute top-[1782px] left-[64px] w-[1044px] h-[318px] bg-white border border-black p-8 rounded-[20px] flex justify-between'>
      {/* Left Content Group */}
      <div className='flex flex-col gap-4 max-w-[45%]'>
        <div className='flex items-center gap-4'>
          <div className='w-[42px] h-[42px] bg-[#ccc] rounded-[8px]' />
          <h4 className='font-[Gully] font-semibold text-[24px] leading-[25px] tracking-normal'>
            Judul Samping Logo 1
          </h4>
        </div>
        <h3 className='ml-[52px] font-[Gully] font-semibold text-[20px] leading-[25px] tracking-normal'>
          Ini adalah deskripsi detail atau narasi pendek terkait logo 1.
        </h3>
      </div>

      {/* Right Content Group */}
      <div className='flex flex-col gap-4 max-w-[45%]'>
        <div className='flex items-center gap-4'>
          <div className='w-[42px] h-[42px] bg-[#ccc] rounded-[8px]' />
          <h4 className='font-[Gully] font-semibold text-[24px] leading-[25px] tracking-normal'>
            Judul Samping Logo 2
          </h4>
        </div>
        <h3 className='ml-[52px] font-[Gully] font-semibold text-[20px] leading-[25px] tracking-normal'>
          Ini adalah deskripsi tambahan terkait logo 2, lebih panjang dan
          lengkap.
        </h3>
      </div>
    </div>
  );
}
