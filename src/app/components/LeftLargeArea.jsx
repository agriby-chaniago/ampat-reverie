"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSupabase } from "../providers/SupabaseProvider";

const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const HeroTitle = () => (
  <div className='max-w-[596px]'>
    <h1 className='font-[Gully] font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[100px] leading-[1.1] tracking-[-0.05em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'>
      AMPAT <br /> REVERIE
    </h1>
  </div>
);

const HeroDescription = () => (
  <div className='max-w-[662px]'>
    <p className='font-[Gully] font-normal text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-[1.5] text-white'>
      A glimpse of paradise from the edge of the world.
    </p>
  </div>
);

const RatingSection = ({ rating, explorerCount, isLoading }) => {
  const formatExplorerCount = (count) => {
    if (count >= 10000) {
      return `${(count / 1000).toFixed(1)}k+`;
    }
    return count.toString();
  };

  const formatRating = (rating) => {
    return rating % 1 === 0 ? rating.toFixed(0) : rating.toFixed(2);
  };

  return (
    <div className='w-full flex justify-start mt-6 sm:mt-0'>
      <p className='font-[Gully] font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.4] text-white'>
        {isLoading ? (
          <span className='animate-pulse'>Loading...</span>
        ) : (
          <>
            {formatRating(rating)}/5 |{" "}
            <span className='text-xl sm:text-2xl md:text-2xl lg:text-[28px] text-white'>
              {formatExplorerCount(explorerCount)} explorers
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default function LeftLargeArea() {
  const supabase = useSupabase();
  const [ratingData, setRatingData] = useState({
    averageRating: 4.93,
    totalExplorers: 32000,
    isLoading: true,
  });

  useEffect(() => {
    const fetchRatingData = async () => {
      try {
        const { data, error } = await supabase
          .from("feedback")
          .select("rating")
          .not("rating", "is", null);

        if (error) {
          setRatingData((prev) => ({ ...prev, isLoading: false }));
          return;
        }

        if (data && data.length > 0) {
          const totalRating = data.reduce((sum, item) => sum + item.rating, 0);
          const averageRating = (totalRating / data.length).toFixed(2);

          setRatingData({
            averageRating: parseFloat(averageRating),
            totalExplorers: data.length,
            isLoading: false,
          });
        } else {
          setRatingData((prev) => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        setRatingData((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchRatingData();

    const subscription = supabase
      .channel("rating-updates")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "feedback",
        },
        () => {
          fetchRatingData();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const containerClasses =
    "flex flex-col justify-between w-full lg:w-[1044px] h-auto min-h-[300px] sm:min-h-[420px] lg:h-[724px] bg-white/5 backdrop-blur-xs shadow-lg rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 border border-white";

  return (
    <motion.div {...ANIMATION_CONFIG} className={containerClasses}>
      <div className='flex flex-col items-center text-center space-y-3 sm:space-y-4 lg:space-y-6 mt-8 sm:mt-12 lg:mt-20'>
        <HeroTitle />
        <HeroDescription />
      </div>

      <RatingSection
        rating={ratingData.averageRating}
        explorerCount={ratingData.totalExplorers}
        isLoading={ratingData.isLoading}
      />
    </motion.div>
  );
}
