"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Methadone Calc", usage: 250 },
  { name: "Anticoagulation", usage: 190 },
  { name: "Respiratory", usage: 165 },
  { name: "Antibiotic", usage: 152 },
  { name: "Ketamine", usage: 140 },
  { name: "Nausea Mgmt", usage: 138 },
  { name: "Buprenorphine", usage: 125 },
  { name: "Crushability", usage: 115 },
  { name: "Secretion", usage: 98 },
  { name: "Seizure", usage: 85 },
  { name: "Delirium", usage: 75 },
  { name: "PPS", usage: 68 },
];

export function ToolUsageChart() {
  return (
    <Card className="bg-white border-slate-100 shadow-sm rounded-2xl overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-[#1E3A8A]">
          Tool Usage - Last 30 Days
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 40 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#F1F5F9"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 10 }}
                interval={0}
                angle={-45}
                textAnchor="end"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 11 }}
                domain={[0, 260]}
                ticks={[0, 65, 130, 195, 260]}
              />
              <Tooltip
                cursor={{ fill: "#F8FAFC" }}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar dataKey="usage" radius={[6, 6, 2, 2]} barSize={32}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#38B6FF" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
