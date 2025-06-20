export default function TopWideSection() {
  return (
    <div className="fixed top-[64px] left-[64px] w-[1044px] h-[102px] bg-white shadow-lg rounded-[20px] flex items-center justify-between px-6 py-4 z-50">
      {/* Icon kiri */}
      <div className="flex items-center">
        <img src="/icon.svg" alt="Icon" className="w-10 h-10" />
      </div>

      {/* Menu kanan */}
      <div className="flex space-x-6 text-gray-800 font-medium text-lg">
        <a href="#about" className="hover:text-blue-600 transition-colors">
          About
        </a>
        <a href="#top-destination" className="hover:text-blue-600 transition-colors">
          Top Destination
        </a>
        <a href="#why-visit" className="hover:text-blue-600 transition-colors">
          Why Visit
        </a>
        <a href="#gallery" className="hover:text-blue-600 transition-colors">
          Gallery
        </a>
      </div>
    </div>
  );
}
