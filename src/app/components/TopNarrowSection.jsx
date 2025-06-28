"use client";
import { Menu, Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function TopNarrowSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className='
        flex
        items-center
        justify-between
        w-[716px]
        h-[102px]
        bg-white
        rounded-[20px]
        px-4
        shadow
        mt-[64px]
        z-40
      '
    >
      <a href='#why-visit' className='hover:text-blue-600 transition-colors'>
        <Menu size={28} />
      </a>
      <a href='#why-visit' className='hover:text-blue-600 transition-colors'>
        <Bell size={28} />
      </a>
    </motion.div>
  );
}
