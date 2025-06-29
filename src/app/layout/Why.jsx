"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const content = [
	{
		image: "/assets/img/why/1.png",
		text: "Pristine underwater biodiversity",
		color: "from-blue-500/40 to-teal-500/30",
	},
	{
		image: "/assets/img/why/2.png",
		text: "Sustainable eco-tourism appeal",
		color: "from-emerald-500/40 to-cyan-500/30",
	},
	{
		image: "/assets/img/why/3.png",
		text: "Unique island landscapes",
		color: "from-amber-500/40 to-orange-500/30",
	},
	{
		image: "/assets/img/why/4.png",
		text: "Authentic local communities",
		color: "from-rose-500/40 to-pink-500/30",
	},
];

export default function Why() {
	return (
		<div
			id="why-visit"
			className="w-full min-h-screen pt-[75px] bg-[url('/assets/bgWhy.png')] bg-cover bg-center bg-no-repeat"
		>
			{/* Enhanced Header with animation */}
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="
          relative
          mx-auto
          mb-[40px] md:mb-[60px]
          mt-[120px] md:mt-[150px]
          font-[Gully]
          font-normal
          text-white
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
          text-[80px] md:text-[100px]
          leading-[70px] md:leading-[80px]
          tracking-[0%]
          w-full
          max-w-[1840px]
          px-8
          pl-[50px] md:pl-[100px]
          text-left
        "
			>
				<span className="relative inline-block">
					Why visit <br /> Raja Ampat?
					<motion.div
						className="absolute -bottom-4 left-0 h-1 bg-white"
						initial={{ width: 0 }}
						whileInView={{ width: "80%" }}
						viewport={{ once: true }}
						transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
					/>
				</span>

				{/* Decorative elements */}
				<motion.div
					className="absolute -right-4 top-1/2 w-24 h-24 rounded-full border-2 border-white/30 opacity-30"
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
				/>
				<motion.div
					className="absolute -left-10 -bottom-10 w-16 h-16 rounded-full border-2 border-white/20 opacity-20"
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
				/>
			</motion.div>

			{/* Content with enhanced visuals */}
			<div className="relative flex flex-col items-center px-4 sm:px-6 md:px-8">
				<div className="flex flex-wrap justify-center lg:justify-evenly gap-y-12 md:gap-y-16 w-full max-w-[1840px] relative z-10">
					{content.map((item, idx) => (
						<motion.div
							key={idx}
							initial={{
								opacity: 0,
								y: 30,
								x: idx % 2 === 0 ? -20 : 20,
							}}
							whileInView={{ opacity: 1, y: 0, x: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.2 }}
							className={`
                relative
                flex items-center 
                p-6 sm:p-7
                border border-white/50
                rounded-[18px] sm:rounded-[22px]
                w-full sm:w-[90%] md:w-[875px]
                h-auto min-h-[180px] sm:min-h-[230px]
                mx-4
                ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}
                transition-all duration-500
                hover:bg-white/10
                hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
                hover:border-opacity-100
                hover:scale-[1.02]
                cursor-pointer
                group
                backdrop-blur-sm
                overflow-hidden
              `}
						>
							{/* Background gradient */}
							<div
								className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
							/>

							{/* Circular decorative elements */}
							<motion.div
								className="absolute -z-10 rounded-full bg-white/5 w-40 h-40"
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 1, delay: idx * 0.2 + 0.5 }}
								style={{
									top: idx % 2 === 0 ? "-20%" : "60%",
									left: idx % 2 === 0 ? "70%" : "-10%",
								}}
							/>

							{/* Image with enhanced animation */}
							<div className="relative w-[150px] sm:w-[190px] h-[150px] sm:h-[190px] rounded-full overflow-hidden border-2 border-white/60 flex-shrink-0 transition-all duration-500 group-hover:border-white group-hover:shadow-lg">
								<motion.div
									initial={{ scale: 0.8, rotate: -10 }}
									whileInView={{ scale: 1, rotate: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.7, delay: idx * 0.2 + 0.3 }}
									className="w-full h-full"
								>
									<Image
										src={item.image}
										alt={`image-${idx}`}
										width={190}
										height={190}
										className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
								</motion.div>
							</div>

							{/* Text with enhanced styling */}
							<motion.div
								initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: idx * 0.2 + 0.6 }}
								className={`relative ${
									idx % 2 === 0 ? "ml-6 sm:ml-8" : "mr-6 sm:mr-8"
								} transition-all duration-300`}
							>
								<p className="text-white font-[Gully] font-light text-[26px] sm:text-[32px] leading-[36px] sm:leading-[42px] text-left transition-all duration-500 group-hover:text-opacity-100 group-hover:scale-[1.02] drop-shadow-md">
									{item.text}
								</p>

								{/* Subtle decorative line */}
								<motion.div
									className="h-[2px] bg-white/40 mt-4 group-hover:bg-white/70 transition-all duration-500"
									initial={{ width: 0 }}
									whileInView={{ width: "60%" }}
									viewport={{ once: true }}
									transition={{ duration: 0.7, delay: idx * 0.2 + 0.9 }}
								/>
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* Bottom decorative circles */}
				<motion.div
					className="absolute bottom-0 right-[10%] w-40 h-40 rounded-full border border-white/10 opacity-20 -z-10"
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
				/>
			</div>
		</div>
	);
}
