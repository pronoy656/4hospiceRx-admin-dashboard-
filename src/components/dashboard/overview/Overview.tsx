"use client";
import React from "react";
import { Users, Target, Wrench, BarChart3, UserPlus, Mail, TrendingUp } from "lucide-react";
import { StatCard } from "./StatCard";
import { ToolUsageChart } from "./ToolUsageChart";
import { GrowthChart } from "./GrowthChart";

export default function Overview() {
  return (
    <div className="space-y-10 pb-12">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-[#1E3A8A]">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1 font-medium">
          Welcome back! Here&apos;s what&apos;s happening with 4HospiceRx.
        </p>
      </div>

      {/* Main Stats Row - 5 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          label="Total Registered Users"
          value="1,247"
          trend="+12.5%"
          Icon={Users}
          iconBgColor="bg-blue-50"
          iconColor="text-[#38B6FF]"
        />
        <StatCard
          label="Total Leads (Emails)"
          value="2,856"
          trend="+18.3%"
          Icon={Target}
          iconBgColor="bg-blue-50"
          iconColor="text-[#38B6FF]"
        />
        <StatCard
          label="Active Tools"
          value="12/12"
          trend="100%"
          Icon={Wrench}
          iconBgColor="bg-blue-50"
          iconColor="text-[#38B6FF]"
        />
        <StatCard
          label="Top Tool Usage"
          value="245"
          trend="+8.2%"
          description="Methadone Calculator"
          Icon={TrendingUp}
          iconBgColor="bg-blue-50"
          iconColor="text-[#38B6FF]"
        />
        <StatCard
          label="Lead Conversion Rate"
          value="73.9%"
          trend="+5.4%"
          Icon={UserPlus}
          iconBgColor="bg-blue-50"
          iconColor="text-[#38B6FF]"
        />
      </div>

      {/* Row 2: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ToolUsageChart />
        <GrowthChart />
      </div>
    </div>
  );
}
