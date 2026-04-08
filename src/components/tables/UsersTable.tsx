"use client";
import React, { useState } from "react";
import { Search, ChevronDown, Download, Filter, Eye, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface UserLead {
  id: string;
  email: string;
  profession: string;
  date: string;
  sessions: string;
  lastSession: string;
  status: string;
  isRegistered: boolean;
}

const mockData: UserLead[] = [
  { id: "1", email: "dr.smith@hospital.com", profession: "Physician", date: "2026-01-15", sessions: "34 sessions", lastSession: "Last: Methadone Calc", status: "Registered", isRegistered: true },
  { id: "2", email: "nurse.johnson@clinic.org", profession: "Nurse Practitioner", date: "2026-01-18", sessions: "28 sessions", lastSession: "Last: Nausea Manag...", status: "Registered", isRegistered: true },
  { id: "3", email: "pharmacist.lee@pharma.com", profession: "Pharmacist", date: "2026-01-20", sessions: "45 sessions", lastSession: "Last: Crushability To...", status: "Registered", isRegistered: true },
  { id: "4", email: "dr.williams@hospice.net", profession: "Physician", date: "2026-01-22", sessions: "19 sessions", lastSession: "Last: Anticoagulation", status: "Registered", isRegistered: true },
  { id: "5", email: "admin.brown@care.org", profession: "Healthcare Admin", date: "2026-01-25", sessions: "12 sessions", lastSession: "Last: PPS Tool", status: "Registered", isRegistered: true },
  { id: "6", email: "rt.garcia@respiratory.com", profession: "Respiratory Therapist", date: "2026-01-28", sessions: "31 sessions", lastSession: "Last: Respiratory Inte...", status: "Registered", isRegistered: true },
  { id: "7", email: "dr.martinez@hospicecare.org", profession: "Physician", date: "2026-02-01", sessions: "22 sessions", lastSession: "Last: Ketamine Consi...", status: "Registered", isRegistered: true },
  { id: "8", email: "lead.davis@email.com", profession: "Nurse", date: "2026-02-03", sessions: "8 sessions", lastSession: "Last: Seizure Manag...", status: "Anonymous Lead", isRegistered: false },
  { id: "9", email: "dr.wilson@palliative.net", profession: "Physician", date: "2026-02-05", sessions: "16 sessions", lastSession: "Last: Delirium Manag...", status: "Registered", isRegistered: true },
  { id: "10", email: "pharm.taylor@hospital.com", profession: "Pharmacist", date: "2026-02-08", sessions: "27 sessions", lastSession: "Last: Buprenorphine...", status: "Registered", isRegistered: true },
  { id: "11", email: "visitor.jones@gmail.com", profession: "Student", date: "2026-02-10", sessions: "3 sessions", lastSession: "Last: Opioid Calculat...", status: "Anonymous Lead", isRegistered: false },
  { id: "12", email: "contact@hospice-west.org", profession: "Admin", date: "2026-02-12", sessions: "5 sessions", lastSession: "Last: PPS Tool", status: "Anonymous Lead", isRegistered: false },
];

export default function UsersTable() {
  const [data] = useState<UserLead[]>(mockData);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Users List");

  return (
    <div className="space-y-6 pb-12 w-full  mx-auto">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[28px] font-bold text-[#1E3A8A]">Users & Leads Management</h1>
          <p className="text-slate-500 mt-1 font-medium">
            Manage platform users, track leads, and analyze engagement.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            placeholder="Search email, profession..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-11 w-full bg-white border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-[#38B6FF]"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors">
            <Filter className="h-4 w-4 text-slate-500" />
            Filters
            <ChevronDown className="h-4 w-4 text-slate-500 ml-1" />
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[#38B6FF] hover:bg-[#38B6FF]/90 text-white rounded-xl font-medium text-sm shadow-sm transition-colors">
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Table section */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="border-b border-slate-100 bg-white">
                <th className="px-6 py-4 w-12">
                  <div className="w-4 h-4 rounded border border-slate-300 bg-slate-50"></div>
                </th>
                <th className="px-4 py-4 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                  EMAIL
                </th>
                <th className="px-4 py-4 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                  PROFESSION
                </th>
                <th className="px-4 py-4 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                  REGISTRATION DATE
                </th>
                <th className="px-4 py-4 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                  USAGE DATA
                </th>
                <th className="px-4 py-4 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                  LEAD STATUS
                </th>
                <th className="px-6 py-4 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider text-right">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group bg-white">
                  <td className="px-6 py-4">
                    <div className="w-4 h-4 rounded border border-slate-300 bg-slate-50 group-hover:border-slate-400 transition-colors"></div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-semibold text-slate-800">{row.email}</div>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-500 font-medium">
                    {row.profession}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-500 font-medium">
                    {row.date}
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-semibold text-slate-800">{row.sessions}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{row.lastSession}</div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={cn(
                        "inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide",
                        row.isRegistered
                          ? "bg-[#DCFCE7] text-[#16A34A]" // Emerald colors
                          : "bg-[#FEF9C3] text-[#CA8A04]" // Yellow colors
                      )}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3 text-slate-400">
                      <button className="hover:text-slate-600 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="hover:text-red-500 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination section */}
        <div className="px-6 py-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
          <div className="text-sm text-slate-500 font-medium">
            Showing 12 results
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 bg-white rounded-lg hover:bg-slate-50 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 bg-white rounded-lg hover:bg-slate-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
