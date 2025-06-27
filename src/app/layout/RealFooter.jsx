export default function RealFooter() {
  return (
    <div
      className="w-full flex justify-evenly px-8 py-12 text-sm text-white flex-wrap relative"
      style={{
        backgroundImage: "url('/assets/img/bgfooter.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* div1 */}
      <div className="relative z-10 max-w-xs mb-30">
        <h1 className="text-lg font-semibold mb-4">Ampat Reverie</h1>
        <ul className="space-y-2">
          <li>About</li>
          <li>Top Destination</li>
          <li>Why Visit?</li>
          <li>Gallery</li>
        </ul>
      </div>

      {/* div2 */}
      <div className="relative z-10 max-w-xs">
        <h1 className="text-lg font-semibold mb-4">Explore Raja Ampat</h1>
        <ul className="space-y-2">
          <li>Wayag Island</li>
          <li>Piaynemo Viewpoint</li>
          <li>Misool Eco Area</li>
          <li>Arborek Village</li>
          <li>Pasir Timbul Spot</li>
        </ul>
      </div>

      {/* div3 */}
      <div className="relative z-10 max-w-xs">
        <h1 className="text-lg font-semibold mb-4">Our Company</h1>
        <ul className="space-y-2">
          <li>Jl. Laut Biru No. 88, Waisai</li>
          <li>Raja Ampat, Indonesia</li>
          <li>+62 812 3456 7890</li>
          <li>hello@ampatreverie.com</li>
        </ul>
      </div>

      {/* new bottom right text */}
      <div className="absolute bottom-4 right-20 w-[486px] h-[50px] text-right font-[Gully] font-light text-[16px] leading-[25px] z-10">
        <p>© 2025 All rights reserved.</p>
        <p>Ampat Reverie - Inspired by nature. Built for explorers.</p>
      </div>
    </div>
  );
}
