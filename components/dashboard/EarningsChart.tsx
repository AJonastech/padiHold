/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

export function EarningsChart() {
  // Mock data - in real app this would come from an API
  const monthlyEarnings = [
    { month: "Jan", amount: 280000 },
    { month: "Feb", amount: 320000 },
    { month: "Mar", amount: 250000 },
    { month: "Apr", amount: 400000 },
    { month: "May", amount: 380000 },
    { month: "Jun", amount: 450000 },
    { month: "Jul", amount: 520000 }
  ];
  
  const totalEarnings = monthlyEarnings.reduce((sum, item) => sum + item.amount, 0);
  
  // Format currency for tooltips
  const formatNaira = (value: number) => `₦${value.toLocaleString()}`;
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#222] p-2 border border-[var(--primary)]/20 rounded-md shadow-lg">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-[var(--primary)] font-bold">
            {formatNaira(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="bg-[#111] p-6 rounded-xl border border-[var(--primary)]/10 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Earnings</h2>
        <Link href="/dashboard/earnings" className="text-[var(--primary)] text-sm flex items-center gap-1 hover:underline">
          Details
          <ArrowRight size={16} />
        </Link>
      </div>
      
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-[var(--primary)]">
          ₦{totalEarnings.toLocaleString()}
        </h3>
        <p className="text-sm text-[var(--foreground)]/70">
          Total earnings in 2025
        </p>
      </div>
      
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={monthlyEarnings}
            margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 12 }}
            />
            <YAxis 
              tickFormatter={(value) => `₦${value/1000}k`}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200, 240, 82, 0.1)' }} />
            <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
              {monthlyEarnings.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill="rgba(200, 240, 82, 0.8)"
                  style={{ transition: 'fill 0.3s' }}
                  onMouseOver={(e: any) => {
                    e.target.style.fill = 'rgba(200, 240, 82, 1)';
                  }}
                  onMouseOut={(e: any) => {
                    e.target.style.fill = 'rgba(200, 240, 82, 0.8)';
                  }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
