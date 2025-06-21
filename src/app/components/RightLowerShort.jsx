export default function RightLowerShort() {
  return (
    <div className="absolute top-[688px] left-[1140px] w-[716px] h-[334px] p-8 backdrop-blur-xs border border-white rounded-[20px] flex flex-col">
      {/* Header content */}
      <div className="flex flex-col mb-12 mt-6 ml-8">
        <h1 className="font-[Gully] font-normal text-[28px] leading-[25px] tracking-[0%] text[ #102437]">
          Find
        </h1>

        <h2 className="font-[Gully] font-normal text-[24px] leading-[25px] tracking-[0%] mt-[10px] opacity-60 text[ #102437]">
          Your Journey
        </h2>
      </div>
      
      {/* Button positioned at the bottom */}
      <div className="mb-8">
        <button className="w-[574px] h-[78px] bg-[#102437] text-white rounded-full flex items-center justify-center cursor-pointer mx-auto border border-white transition-all duration-300 hover:bg-white hover:text-[#102437] hover:shadow-lg hover:scale-[1.02] hover:border-[#102437] group">
          <span className="font-[Gully] font-normal text-[20px] leading-[25px] tracking-[0%] transition-all duration-300 group-hover:font-medium">
            Where would you like to go
          </span>
        </button>
      </div>
    </div>
  );
}
