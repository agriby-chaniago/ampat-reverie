import { Menu, Bell } from 'lucide-react';

export default function TopNarrowSection() {
  return (
    <div className="absolute top-[64px] left-[1140px] w-[716px] h-[102px] bg-white rounded-[20px] flex items-center justify-between px-4 shadow">
      <Menu size={28} className="text-black" />
      <Bell size={28} className="text-black" />
    </div>
  );
}
