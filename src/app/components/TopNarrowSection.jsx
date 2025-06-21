import { Menu, Bell } from "lucide-react";

export default function TopNarrowSection() {
  return (
    <div className="absolute top-[64px] left-[1140px] w-[716px] h-[102px] bg-white rounded-[20px] flex items-center justify-between px-4 shadow">
      <a href="#why-visit" className="hover:text-blue-600 transition-colors">
        <Menu size={28} />
      </a>
      <a href="#why-visit" className="hover:text-blue-600 transition-colors">
        <Bell size={28} />
      </a>
    </div>
  );
}
