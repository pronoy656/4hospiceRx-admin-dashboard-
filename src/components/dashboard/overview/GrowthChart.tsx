"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Day 1", leads: 12, users: 8 },
  { name: "Day 5", leads: 28, users: 19 },
  { name: "Day 10", leads: 45, users: 32 },
  { name: "Day 15", leads: 68, users: 48 },
  { name: "Day 20", leads: 90, users: 65 },
  { name: "Day 25", leads: 112, users: 84 },
  { name: "Day 30", leads: 140, users: 102 },
];

export function GrowthChart() {
  return (
    <Card className="bg-white border-slate-100 shadow-sm rounded-2xl overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-[#1E3A8A]">
          Lead Generation & User Growth
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
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
                tick={{ fill: "#64748B", fontSize: 11 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 11 }}
                domain={[0, 140]}
                ticks={[0, 35, 70, 105, 140]}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                wrapperStyle={{ paddingTop: "20px" }}
              />
              <Line
                type="monotone"
                dataKey="leads"
                name="Total Leads"
                stroke="#38B6FF"
                strokeWidth={3}
                dot={{ fill: "#38B6FF", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              <Line
                type="monotone"
                dataKey="users"
                name="Registered Users"
                stroke="#1E3A8A"
                strokeWidth={3}
                dot={{ fill: "#1E3A8A", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
