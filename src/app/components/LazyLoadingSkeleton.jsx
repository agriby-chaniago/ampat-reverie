"use client";
import { motion } from "framer-motion";

export function LazyLoadingSkeleton({
  className = "",
  children,
  isLoaded = false,
}) {
  if (isLoaded) {
    return children;
  }

  return (
    <motion.div
      className={`animate-pulse ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='bg-white/10 rounded-md h-full w-full'></div>
    </motion.div>
  );
}

export function TextSkeleton({ lines = 1, className = "" }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className='h-4 bg-white/10 rounded animate-pulse'
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: `${85 + Math.random() * 15}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        />
      ))}
    </div>
  );
}

export function ImageSkeleton({
  className = "",
  aspectRatio = "aspect-video",
}) {
  return (
    <motion.div
      className={`${aspectRatio} bg-white/10 rounded-lg animate-pulse ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-full h-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:200%_100%] animate-[shimmer_2s_infinite]' />
    </motion.div>
  );
}
