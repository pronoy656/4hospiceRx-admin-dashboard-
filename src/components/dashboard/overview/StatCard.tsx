"use client";
import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
    label: string;
    value: string;
    trend?: string;
    Icon: LucideIcon;
    iconBgColor: string;
    iconColor: string;
    description?: string;
}

export function StatCard({
    label,
    value,
    trend,
    Icon,
    iconBgColor,
    iconColor,
    description,
}: StatCardProps) {
    return (
        <Card className="bg-white border-[#E2E8F0]/50 shadow-sm rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md">
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="space-y-4">
                        <div
                            className={cn(
                                "h-10 w-10 rounded-xl flex items-center justify-center border border-[#38B6FF]/10",
                                iconBgColor
                            )}
                        >
                            <Icon className={cn("h-5 w-5", iconColor)} />
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-[#38B6FF] tracking-tight">
                                {value}
                            </p>
                            <p className="text-[13px] font-medium text-slate-500 leading-tight">
                                {label}
                            </p>
                            {description && (
                                <p className="text-[11px] text-slate-400 font-medium mt-1">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                    {trend && (
                        <div className="text-[10px] font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-1 rounded-lg border border-[#10B981]/10">
                            {trend}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
