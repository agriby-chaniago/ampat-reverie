'use client';

import Image from 'next/image';

const content = [
  {
    image: '/058c64c2-2b0e-4ed9-a4f4-2d127ed0f822.png',
    text: 'Pristine underwater biodiversity',
  },
  {
    image: '/7f1383e6-7e36-4bd1-a2ba-fb7e6b638ec5.png',
    text: 'Sustainable eco-tourism appeal',
  },
  {
    image: '/058c64c2-2b0e-4ed9-a4f4-2d127ed0f822.png',
    text: 'Unique island landscapes',
  },
  {
    image: '/7f1383e6-7e36-4bd1-a2ba-fb7e6b638ec5.png',
    text: 'Authentic local communities',
  },
];

export default function Why() {
  return (
    <div className="w-full h-[calc(100vh-166px)] pt-[75px] mb-10 bg-gray-100">
      {/* Header */}
      <div className="col-span-2 flex items-center justify-center w-[508px] h-[184px] ml-[216px] font-[Gully] font-normal text-[101px] leading-[80px] tracking-[0%]">
  Why visit Raja Ampat?
</div>


      {/* Content */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 gap-y-6">
          {content.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center border border-gray-300 px-8 rounded-[20px] w-[880px] h-[262px] ${
                idx % 2 === 0 ? 'ml-[64px] mr-1' : 'ml-1 mr-[64px]'
              }`}
            >
              <div className="w-[238px] h-[238px] rounded-full overflow-hidden border border-gray-300 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={`image-${idx}`}
                  width={238}
                  height={238}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="ml-8 text-black font-[Gully] font-light text-[40px] leading-[50px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
