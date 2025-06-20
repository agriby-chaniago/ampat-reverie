export default function LeftLargeArea() {
  return (
    <div className='absolute top-[198px] left-[64px] w-[1044px] h-[824px] flex flex-col rounded-[20px] p-6 backdrop-blur-xs border-1 border-white '>
      {/* Bagian atas: Judul & Deskripsi */}
      <div className='flex flex-col items-center justify-center flex-grow'>
        {/* Judul */}
        <div className='w-[596px] h-[202px] flex items-center justify-center'>
          <h1 className='font-[Gully] font-normal text-[100px] leading-[100px] tracking-[-0.1em] text-center text-white'>
            A M P A T <br /> R E V E R I E
          </h1>
        </div>

        {/* Deskripsi */}
        <div className='w-[662px] h-[82px] flex items-center justify-center mt-6'>
          <p className='font-[Gully] font-normal text-[26px] leading-[55px] tracking-normal text-gray-900 text-center'>
            A glimpse of paradise from the edge of the world.
          </p>
        </div>
      </div>

      {/* Rating di kiri bawah */}
      <div className='flex justify-start'>
        <p className='font-[Gully] font-normal text-[40px] leading-[55px] tracking-[0.01em] text-white'>
          4.93/5.00 |{" "}
          <span className='text-[28px] leading-[55px] tracking-[0.01em] font-[Gully] font-normal'>
            32k+ explorers
          </span>
        </p>
      </div>
    </div>
  );
}
