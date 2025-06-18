'use client';

import { Menu, Bell } from 'lucide-react';

export default function TopNarrowSection() {
  return (
    <div className="w-[517px] h-[82px] bg-white rounded-[20px] flex items-center justify-between px-4 shadow">
      <Menu size={28} className="text-black" />
      <Bell size={28} className="text-black" />
    </div>
  );
}
