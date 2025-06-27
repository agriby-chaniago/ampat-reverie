export default function Footer() {
  return (
    <div 
      className="grid grid-cols-10 grid-rows-10 gap-0 text-white relative min-h-[728px]"
      style={{
        backgroundImage: "url('/assets/img/bgfooter.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Ampat Reverie text - positioned with absolute for precise placement */}
      <div className="col-start-1 col-end-4 row-start-4 row-end-8 relative z-10 flex items-center pl-16">
        <h1 className="font-[Gully] font-normal text-[100px] leading-[110px] tracking-[0.1em]">
          AMPAT<br />REVERIE
        </h1>
      </div>
      
      {/* Discover the untouched beauty text */}
      <div className="col-start-8 col-end-11 row-start-6 row-end-12 relative z-10 flex flex-col justify-center items-end pr-16">
        <p className="font-[Gully] font-normal text-[32px] leading-[50px] tracking-[0em] text-right">
          Discover the untouched beauty of Raja Ampat.
        </p>
      </div>
    </div>
  );
}
