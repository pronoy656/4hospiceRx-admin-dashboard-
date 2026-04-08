"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface ToolData {
  id: string;
  name: string;
  description: string;
  lastUpdated: string;
  isEnabled: boolean;
}

const initialData: ToolData[] = [
  { id: "1", name: "Methadone Calculator for Hospice", description: "Calculate safe methadone dosing for hospice patients", lastUpdated: "2026-02-15", isEnabled: true },
  { id: "2", name: "Hospice Anticoagulation Decision Tool", description: "Guide anticoagulation decisions in hospice care", lastUpdated: "2026-02-10", isEnabled: true },
  { id: "3", name: "Respiratory Therapy Interchange Tool", description: "Optimize respiratory therapy medication interchange", lastUpdated: "2026-02-12", isEnabled: true },
  { id: "4", name: "Antibiotic Appropriateness Tool", description: "Evaluate antibiotic appropriateness in palliative care", lastUpdated: "2026-02-08", isEnabled: true },
  { id: "5", name: "Ketamine Consideration Tool", description: "Assess ketamine use for pain management", lastUpdated: "2026-02-14", isEnabled: true },
  { id: "6", name: "Nausea Management Tool", description: "Comprehensive nausea and vomiting management", lastUpdated: "2026-02-11", isEnabled: true },
  { id: "7", name: "Buprenorphine Decision Tool", description: "Guide buprenorphine prescribing decisions", lastUpdated: "2026-02-09", isEnabled: true },
  { id: "8", name: "Crushability / Do Not Crush Tool", description: "Check medication crushability for administration", lastUpdated: "2026-02-13", isEnabled: true },
  { id: "9", name: "Secretion Management Tool", description: "Manage respiratory secretions in end-of-life care", lastUpdated: "2026-02-07", isEnabled: true },
  { id: "10", name: "Seizure Management Tool", description: "Emergency seizure management protocols", lastUpdated: "2026-02-06", isEnabled: true },
  { id: "11", name: "Delirium Management Tool", description: "Assess and manage delirium in hospice patients", lastUpdated: "2026-02-05", isEnabled: true },
  { id: "12", name: "Palliative Performance Scale (PPS) Tool", description: "Evaluate patient functional status using PPS", lastUpdated: "2026-02-04", isEnabled: true },
];

export default function ToolsTable() {
  const [data, setData] = useState<ToolData[]>(initialData);

  const toggleTool = (id: string) => {
    setData(data.map(tool => tool.id === id ? { ...tool, isEnabled: !tool.isEnabled } : tool));
  };

  return (
    <div className="space-y-6 pb-12 w-full mx-auto">
      {/* Header section */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[32px] font-bold text-[#1E3A8A]">Tools Management</h1>
        <p className="text-slate-500 font-medium">
          Configure and monitor all 12 clinical decision tools
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white border text-left border-slate-200 rounded-xl p-5 shadow-sm flex flex-col gap-1">
          <p className="text-sm font-medium text-slate-500">Total Tools</p>
          <p className="text-3xl font-bold text-[#1E3A8A]">12</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white border text-left border-slate-200 rounded-xl p-5 shadow-sm flex flex-col gap-1">
          <p className="text-sm font-medium text-slate-500">Active Tools</p>
          <p className="text-3xl font-bold text-[#38B6FF]">12</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white border text-left border-slate-200 rounded-xl p-5 shadow-sm flex flex-col gap-1">
          <p className="text-sm font-medium text-slate-500">Total Usage</p>
          <p className="text-3xl font-bold text-[#1E3A8A]">1,605</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white border text-left border-slate-200 rounded-xl p-5 shadow-sm flex flex-col gap-1">
          <p className="text-sm font-medium text-slate-500">Avg. Daily Usage</p>
          <p className="text-3xl font-bold text-[#38B6FF]">53.5</p>
        </div>
      </div>

      {/* Table section */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="border-b border-slate-100 bg-white">
                <th className="px-6 py-4 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider w-[35%]">
                  TOOL NAME
                </th>
                <th className="px-6 py-4 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider w-[40%]">
                  DESCRIPTION
                </th>
                <th className="px-6 py-4 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider w-[15%]">
                  LAST UPDATED
                </th>
                <th className="px-6 py-4 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider w-[10%]">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/50 transition-colors bg-white">
                  <td className="px-6 py-5">
                    <div className="text-sm font-semibold text-[#1E3A8A]">{row.name}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm text-slate-500">{row.description}</div>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-500 font-medium">
                    {row.lastUpdated}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <Switch 
                        checked={row.isEnabled} 
                        onCheckedChange={() => toggleTool(row.id)}
                        className="data-[state=checked]:bg-black data-[state=unchecked]:bg-slate-200 h-5 w-9 [&>span]:h-4 [&>span]:w-4 [&>span]:data-[state=checked]:translate-x-4"
                      />
                      <span className={cn("text-xs font-medium", row.isEnabled ? "text-[#16A34A]" : "text-slate-400")}>
                        {row.isEnabled ? "Enabled" : "Disabled"}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
