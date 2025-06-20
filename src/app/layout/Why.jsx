export default function Why() {
  return (
    <div className='grid grid-cols-2 grid-rows-3 w-full h-[calc(100vh-166px)] pt-[75px] mb-10 bg-gray-100 gap-0'>
      {/* Header spans 2 columns */}
      <div className='col-span-2 flex items-center justify-center bg-white border text-xl font-semibold'>
        Why visit Raja Ampat?
      </div>

      {/* Konten */}
      <div className='flex items-center justify-center bg-white border'>
        Konten 1
      </div>
      <div className='flex items-center justify-center bg-white border'>
        Konten 2
      </div>
      <div className='flex items-center justify-center bg-white border'>
        Konten 3
      </div>
      <div className='flex items-center justify-center bg-white border'>
        Konten 4
      </div>
    </div>
  );
}
