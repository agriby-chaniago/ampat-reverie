import { Menu, Bell } from 'lucide-react';

export default function TopNarrowSection() {
  return (
    <div
      className="absolute bg-white rounded-[20px] flex items-center justify-between px-4 shadow"
      style={{
        width: '694px',
        height: '82px',
        top: '103px',
        left: '1138px',
        borderRadius: '20px',
        borderWidth: '1px',
      }}
    >
      <Menu size={28} className="text-black" />
      <Bell size={28} className="text-black" />
    </div>
  );
}
