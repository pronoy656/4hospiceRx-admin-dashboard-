"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Users,
  Wrench,
  Scale,
  Settings,
  UserRound,
  LogOut,
  LucideIcon,
} from "lucide-react";

type IconType = LucideIcon;

const items: Array<{
  href: string;
  label: string;
  Icon: IconType;
}> = [
    { href: "/overview", label: "Dashboard", Icon: LayoutDashboard },
    { href: "/users", label: "Users & Leads", Icon: Users },
    { href: "/tools-management", label: "Tools Management", Icon: Wrench },
    { href: "/legal-management", label: "Legal Management", Icon: Scale },
    { href: "/settings", label: "Settings", Icon: Settings },
  ];

export default function Sidebar({ active }: { active?: string }) {
  const pathname = usePathname();
  const current = active ?? pathname ?? "";
  return (
    <aside className="h-screen w-64 bg-[#002D71] text-white border-r border-white/10 fixed left-0 top-0 flex flex-col">
      <div className="p-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            4HospiceRx
          </h1>
          <p className="text-xs text-blue-300/90 font-medium mt-1">Admin Dashboard</p>
        </div>
      </div>

      <Separator className="bg-white/10 mx-6 w-auto" />

      <nav className="flex-1 px-3 py-6 space-y-8">
        {items.map((item) => {
          const isActive = current === item.href || current.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-4 text-sm transition-all duration-200 rounded-xl group",
                isActive
                  ? "bg-[#38B6FF] text-white font-semibold  shadow-[#38B6FF]/20"
                  : "text-blue-100/90 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.Icon className={cn("h-5 w-5 transition-colors", isActive ? "text-white" : "text-blue-200/90 group-hover:text-white")} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-[#38B6FF]/30">
              <AvatarFallback className="bg-[#38B6FF] text-white">
                <UserRound className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">Healthcare Administr</p>
              <p className="text-[10px] text-blue-300/70 truncate">admin@4hospicerx.com</p>
            </div>
          </div>
          <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200 text-sm font-medium border border-white/5">
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
        <p className="text-[10px] text-blue-300/90 text-center mt-4">
          © 2026 4HospiceRx
        </p>
      </div>
    </aside>
  );
}
