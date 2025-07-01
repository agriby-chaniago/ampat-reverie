"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";

export default function RightLowerSection({ deviceSize, isVisible = true }) {
  const isMobile = deviceSize === "mobile";
  const isTablet = deviceSize === "tablet";

  const stats = [
    { label: "Fish Species", value: "1,700+" },
    { label: "Known Coral Species", value: "75 %" },
    { label: "Small Islands", value: "1,500+" },
    { label: "Square Kilometers", value: "40,000" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className={`
        w-full
        h-auto
        min-h-[250px]
        sm:min-h-[280px]
        lg:h-[300px]
        rounded-[12px]
        sm:rounded-[16px]
        lg:rounded-[20px]
        p-4
        sm:p-5
        lg:p-6
        backdrop-blur-xs
        border
        border-white
        shadow-md
        bg-black/50
        text-white
      `}
    >
      <Card className='bg-transparent border-none shadow-none h-full'>
        <CardContent className='flex flex-col justify-center items-center h-full gap-2 sm:gap-3 font-[Gully] text-base sm:text-xl md:text-2xl lg:text-[24px] p-0 sm:p-2'>
          {stats.map((item, index) => (
            <div
              key={index}
              className='flex justify-between w-full max-w-[90%] sm:max-w-full'
            >
              <span className='font-bold'>{item.label}</span>
              <span className='font-bold'>{item.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
