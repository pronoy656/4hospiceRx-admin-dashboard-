"use client";
import { Input } from "@/components/ui/input";
import { Bell, LogOut, ChevronDown, User, Settings as SettingsIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b border-slate-100 bg-white sticky top-0 z-10 h-16 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
      <div className="text-[#002D71] text-sm font-semibold tracking-wide uppercase">
        Admin Portal
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#38B6FF] rounded-full ring-2 ring-white"></span>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 text-right hover:bg-slate-50 p-1.5 pr-2 rounded-xl border border-transparent hover:border-slate-100 transition-all outline-none cursor-pointer">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#002D71] to-[#38B6FF] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                SA
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-[#1E3A8A]">Super Admin</div>
                <div className="text-[10px] text-slate-400 font-medium">admin@4hospicerx.com</div>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 ml-1" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 p-2 rounded-2xl shadow-xl border-slate-100">
            <DropdownMenuLabel className="p-3">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold leading-none text-[#1E3A8A]">Super Admin</p>
                <p className="text-xs leading-none text-slate-500">admin@4hospicerx.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-100" />
            <DropdownMenuGroup className="p-1">
              <DropdownMenuItem className="p-2 cursor-pointer rounded-lg hover:bg-slate-50 focus:bg-slate-50 transition-colors">
                <User className="mr-3 h-4 w-4 text-slate-500" />
                <span className="font-medium text-slate-700">Profile Dashboard</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2 cursor-pointer rounded-lg hover:bg-slate-50 focus:bg-slate-50 transition-colors">
                <SettingsIcon className="mr-3 h-4 w-4 text-slate-500" />
                <span className="font-medium text-slate-700">Account Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-slate-100" />
            <div className="p-1">
              <DropdownMenuItem className="p-2 cursor-pointer rounded-lg text-red-600 focus:text-red-700 focus:bg-red-50 hover:bg-red-50 transition-colors">
                <LogOut className="mr-3 h-4 w-4" />
                <span className="font-medium">Log out securely</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

