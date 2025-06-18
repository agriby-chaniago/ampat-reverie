export default function TopWideSection() {
  return (
    <div
      className='fixed flex items-center justify-between px-6 py-4 bg-white shadow-lg'
      style={{
        width: "737px",
        height: "82px",
        borderRadius: "20px",
      }}
    >
      {/* Icon kiri */}
      <div className='flex items-center'>
        <img src='/icon.svg' alt='Icon' className='w-10 h-10' />
      </div>

      {/* Menu kanan */}
      <div className='flex space-x-6 text-gray-800 font-medium'>
        <a href='#about' className='hover:text-blue-600 transition'>
          About
        </a>
        <a href='#top-destination' className='hover:text-blue-600 transition'>
          Top Destination
        </a>
        <a href='#why-visit' className='hover:text-blue-600 transition'>
          Why Visit
        </a>
        <a href='#gallery' className='hover:text-blue-600 transition'>
          Gallery
        </a>
      </div>
    </div>
  );
}
