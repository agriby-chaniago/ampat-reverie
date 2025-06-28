"use client";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import UserMenu from "./UserMenu";

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
      <a href='#why-visit' className='hover:text-[#107773] transition-colors'>
        <Menu size={28} />
      </a>

      <UserMenu />
    </motion.div>
  );
}
