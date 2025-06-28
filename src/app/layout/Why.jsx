"use client";

import { motion } from "framer-motion";
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
      <div
        className='
    flex 
    items-center
    mx-auto
    mb-[15px]
    mt-[150px]
    font-[Gully]
    font-normal
    text-white
    drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
    text-[100px]
    leading-[80px]
    tracking-[0%]
    w-full
    max-w-[1840px]
    px-8
    pl-[100px]
    text-left
  '
      >
        Why visit <br /> Raja Ampat?
      </div>

      {/* Content */}
      <div className='relative flex flex-col items-center'>
        <div className='flex flex-wrap justify-evenly gap-y-6 w-full max-w-[1840px] relative z-10 '>
          {content.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
              className={`flex items-center p-5 border border-white rounded-[18px] w-[875px] h-[230px] m-4
      ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}
      transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:border-opacity-80 hover:scale-[1.01] cursor-pointer group bg-black/40 rounded-[20px]`}
            >
              {/* Gambar */}
              <div className='w-[190px] h-[190px] rounded-full overflow-hidden border border-gray-300 flex-shrink-0 transition-all duration-300 group-hover:border-white group-hover:shadow-lg'>
                <Image
                  src={item.image}
                  alt={`image-${idx}`}
                  width={190}
                  height={190}
                  className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110'
                />
              </div>

              {/* Teks */}
              <p className='ml-6 mr-6 text-white font-[Gully] font-light text-[32px] leading-[42px] text-left transition-all duration-300 group-hover:text-opacity-90 group-hover:scale-[1.02]'>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
