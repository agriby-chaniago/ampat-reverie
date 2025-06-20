export default function RealFooter() {
  return (
    <div className='w-full flex justify-evenly px-8 py-12 text-sm text-white flex-wrap'>
      {/* div1 */}
      <div className='max-w-xs'>
        <h1 className='text-lg font-semibold mb-4'>Ampat Reverie</h1>
        <ul className='space-y-2'>
          <li>About</li>
          <li>Top Destination</li>
          <li>Why Visit?</li>
          <li>Gallery</li>
        </ul>
      </div>

      {/* div2 */}
      <div className='max-w-xs'>
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
      <div className='max-w-xs'>
        <h1 className='text-lg font-semibold mb-4'>Our Company</h1>
        <ul className='space-y-2'>
          <li>Jl. Laut Biru No. 88, Waisai</li>
          <li>Raja Ampat, Indonesia</li>
          <li>+62 812 3456 7890</li>
          <li>hello@ampatreverie.com</li>
        </ul>
      </div>
    </div>
  );
}
