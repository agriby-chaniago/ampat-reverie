export default function RightUpperTall() {
  return (
    <div className="absolute top-[198px] left-[1140px] w-[718px] h-[458px] p-6 backdrop-blur-xs border border-white rounded-[20px]">
      {/* Kontainer isi */}
      <div className="flex flex-col justify-start h-full gap-6 pt-[40px] px-[32px]">
        {/* Heading */}
        <div className="w-full opacity-100 ml-2">
          <h2 className="font-[Gully] font-normal text-[64px] leading-[75px] tracking-tight text-[#102437]">
            Where Serenity<br />Meets the Sea
          </h2>
        </div>

        {/* Paragraf */}
        <div className="w-[458px] h-[98px] opacity-60 ml-2">
          <p className="font-[Gully] font-light text-[26px] leading-[32px] tracking-tight text-[#102437]">
            Raja Ampat isn't just a place, it's a feeling. Drift away where the ocean whispers and time stands still.
          </p>
        </div>
      </div>
    </div>
  );
}
