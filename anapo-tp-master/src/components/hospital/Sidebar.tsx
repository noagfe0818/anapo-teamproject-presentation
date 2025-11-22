"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Calendar,
  User,
  Users,
  FileBarChart2,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    {
      name: "대시보드",
      icon: <Home size={20} />,
      href: "/userhospital/dashboard",
    },
    {
      name: "예약 관리",
      icon: <Calendar size={20} />,
      href: "/userhospital/reservation",
    },
    {
      name: "환자 관리",
      icon: <User size={20} />,
      href: "/userhospital/patients",
    },
    {
      name: "의료진 관리",
      icon: <Users size={20} />,
      href: "/userhospital/doctors",
    },
    {
      name: "통계 및 리포트",
      icon: <FileBarChart2 size={20} />,
      href: "/userhospital/reports",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-widest">병원이름</h1>

      <nav className="space-y-2">
        {menus.map((menu) => {
          const active = pathname === menu.href;

          return (
            <Link
              key={menu.name}
              href={menu.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${
                  active
                    ? "bg-white text-[#1f2a44] font-semibold"
                    : "text-gray-200 hover:bg-[#263556]"
                }
              `}
            >
              {menu.icon}
              {menu.name}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/admin/settings"
        className="flex items-center gap-3 text-gray-300 hover:text-white mt-10"
      >
        <Settings size={20} />
        설정
      </Link>
    </div>
  );
}
