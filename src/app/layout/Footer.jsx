"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className='relative w-full flex flex-col text-white pt-48 md:pt-48'>
      {/* Container Judul */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='relative z-10 px-6 md:px-12'
      >
        <h1
          className='
        font-[Gully] font-normal
        text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px]
        leading-tight tracking-[0.05em]
        text-left
      '
        >
          AMPAT <br /> REVERIE
        </h1>
      </motion.div>

      {/* Container Deskripsi */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className='relative z-10 px-6 md:px-12 md:mt-12'
      >
        <p
          className='
            max-w-xl
            text-[18px] sm:text-[22px] md:text-[26px]
            leading-snug
            text-right
            ml-auto
          '
        >
          Discover the untouched beauty of <br />
          Raja Ampat.
        </p>
      </motion.div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className='relative z-10 flex flex-col sm:flex-row flex-wrap justify-center md:justify-evenly gap-12 px-6 md:px-12 py-16'
      >
        <FooterColumn
          title='Ampat Reverie'
          items={["About", "Top Destination", "Why Visit?", "Gallery"]}
        />
        <FooterColumn
          title='Explore Raja Ampat'
          items={[
            "Wayag Island",
            "Piaynemo Viewpoint",
            "Misool Eco Area",
            "Arborek Village",
            "Pasir Timbul Spot",
          ]}
        />
        <FooterColumn
          title='Our Company'
          items={[
            "Jl. Laut Biru No. 88, Waisai",
            "Raja Ampat, Indonesia",
            "+62 812 3456 7890",
            "hello@ampatreverie.com",
          ]}
        />
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className='relative z-10 w-full px-6 md:px-12 pb-10 text-center md:text-right'
      >
        <p className='font-[Gully] font-light text-[14px] sm:text-[16px] leading-relaxed'>
          © 2025 All rights reserved.
          <br />
          Ampat Reverie - Inspired by nature. Built for explorers.
        </p>
      </motion.div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div className='w-full sm:w-auto max-w-xs flex flex-col space-y-2 text-center sm:text-left'>
      <h2 className='text-lg font-semibold mb-2'>{title}</h2>
      <ul className='space-y-1'>
        {items.map((item, idx) => (
          <li
            key={idx}
            className='hover:text-gray-300 transition duration-300 cursor-pointer'
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
