"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";

export default function RightLowerSection() {
  const stats = [
    { label: "Fish Species", value: "1,700+" },
    { label: "Known Coral Species", value: "75 %" },
    { label: "Small Islands", value: "1,500+" },
    { label: "Square Kilometers", value: "40,000" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className='
        w-[716px]
        h-[300px]
        rounded-[20px]
        p-6
        backdrop-blur-xs
        border
        border-white
        shadow-md
      '
    >
      <Card className='bg-transparent border-none shadow-none h-full'>
        <CardContent className='flex flex-col justify-between h-full text-white font-[Gully] text-[24px]'>
          {stats.map((item, index) => (
            <div key={index} className='flex justify-between items-center'>
              <span className='font-bold'>{item.label}</span>
              <span className='font-bold'>{item.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
