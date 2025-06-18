import { Menu, Bell } from 'lucide-react';

export default function TopNarrowSection() {
  return (
    <div
      className="absolute bg-white rounded-[20px] flex items-center justify-between px-4 shadow"
      style={{
        width: '716px',
        height: '102px',
        top: '64px',
        left: '1140px',
        borderRadius: '20px',
      }}
    >
      <Menu size={28} className="text-black" />
      <Bell size={28} className="text-black" />
    </div>
  );
}
