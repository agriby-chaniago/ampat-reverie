export default function Footer() {
  return (
    <footer
      className='relative w-full min-h-[1080px] flex flex-col bg-no-repeat text-white'
      style={{
        backgroundImage: "url('/assets/bgGalleryFooter.png')",
        backgroundSize: "100% 2160px",
        backgroundPosition: "bottom",
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40 z-0' />
      {/* Brand & Slogan Section */}
      <div className='relative z-10 grid grid-cols-10 grid-rows-10 gap-0 min-h-[350px]'>
        <div className='col-start-1 col-end-4 row-start-3 row-end-9 flex items-center pl-16 mt-10'>
          <h1 className='font-[Gully] font-normal text-[100px] leading-[110px] tracking-[0.1em]'>
            <br />
            <br />
            AMPAT
            <br />
            REVERIE
          </h1>
        </div>
        <div className='col-start-8 col-end-11 row-start-6 row-end-12 flex flex-col justify-center items-end pr-16'>
          <p className='font-[Gully] font-normal text-[32px] leading-[50px] tracking-[0em] text-right'>
            Discover the untouched beauty of Raja Ampat.
          </p>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className='relative z-10 flex flex-wrap justify-evenly px-8 py-12 text-sm'>
        {/* div1 */}
        <div className='max-w-xs mb-8'>
          <h1 className='text-lg font-semibold mb-4'>Ampat Reverie</h1>
          <ul className='space-y-2'>
            <li>About</li>
            <li>Top Destination</li>
            <li>Why Visit?</li>
            <li>Gallery</li>
          </ul>
        </div>
        {/* div2 */}
        <div className='max-w-xs mb-8'>
          <h1 className='text-lg font-semibold mb-4'>Explore Raja Ampat</h1>
          <ul className='space-y-2'>
            <li>Wayag Island</li>
            <li>Piaynemo Viewpoint</li>
            <li>Misool Eco Area</li>
            <li>Arborek Village</li>
            <li>Pasir Timbul Spot</li>
          </ul>
        </div>
        {/* div3 */}
        <div className='max-w-xs mb-8'>
          <h1 className='text-lg font-semibold mb-4'>Our Company</h1>
          <ul className='space-y-2'>
            <li>Jl. Laut Biru No. 88, Waisai</li>
            <li>Raja Ampat, Indonesia</li>
            <li>+62 812 3456 7890</li>
            <li>hello@ampatreverie.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright text right bottom */}
      <div className='absolute bottom-4 right-20 w-[486px] text-right font-[Gully] font-light text-[16px] leading-[25px] z-10'>
        <p>© 2025 All rights reserved.</p>
        <p>Ampat Reverie - Inspired by nature. Built for explorers.</p>
      </div>
    </footer>
  );
}
