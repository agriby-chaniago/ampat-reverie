"use client";

import Image from "next/image";

const content = [
  {
    image: "/assets/img/why/1.png",
    text: "Pristine underwater biodiversity",
  },
  {
    image: "/assets/img/why/2.png",
    text: "Sustainable eco-tourism appeal",
  },
  {
    image: "/assets/img/why/3.png",
    text: "Unique island landscapes",
  },
  {
    image: "/assets/img/why/4.png",
    text: "Authentic local communities",
  },
];

export default function Why() {
  return (
    <div
      id='why-visit'
      className="w-full min-h-screen pt-[75px] bg-[url('/assets/bgWhy.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Header */}
      <div className='col-span-2 flex items-center justify-center w-[700px] ml-[216px] mb-[50px] mt-[190px] font-[Gully] font-normal text-white text-[101px] leading-[80px] tracking-[0%]'>
        Why visit Raja Ampat?
      </div>

      {/* Content */}
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-2 gap-y-6'>
          {content.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center p-6 border border-white rounded-[20px] w-[880px] h-[262px] ${
                idx % 2 === 0
                  ? "ml-[64px] mr-4 flex-row" // index 0 & 2
                  : "ml-4 mr-[64px] flex-row-reverse" // index 1 & 3
              } transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:border-opacity-80 hover:border-white/90 hover:scale-[1.01] cursor-pointer group`}
            >
              <div className='w-[238px] h-[238px] rounded-full overflow-hidden border border-gray-300 flex-shrink-0 transition-all duration-300 group-hover:border-white group-hover:shadow-lg'>
                <Image
                  src={item.image}
                  alt={`image-${idx}`}
                  width={238}
                  height={238}
                  className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110'
                />
              </div>
              <p className='ml-8 mr-8 text-white font-[Gully] font-light text-[40px] leading-[50px] text-left transition-all duration-300 group-hover:text-opacity-90 group-hover:scale-[1.02]'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
