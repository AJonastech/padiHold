"use client";

import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface Contract {
  id: string;
  title: string;
  amount: number;
  buyer: string;
  seller: string;
  status: "awaiting_payment" | "payment_held" | "awaiting_delivery";
  createdAt: Date;
}

export function ActiveContracts() {
  // Mock data - in real app this would come from an API
  const contracts: Contract[] = [
    {
      id: "con_123456",
      title: "Website Development Project",
      amount: 250000, // Amount in Naira
      buyer: "Adebayo Electronics",
      seller: "TechNova Solutions",
      status: "payment_held",
      createdAt: new Date(2023, 6, 15)
    },
    {
      id: "con_789012",
      title: "Product Photography Session",
      amount: 85000,
      buyer: "Lagos Fashions Ltd",
      seller: "Creative Shots Studio",
      status: "awaiting_delivery",
      createdAt: new Date(2023, 7, 22)
    }
  ];
  
  const getStatusBadge = (status: Contract["status"]) => {
    switch(status) {
      case "awaiting_payment":
        return (
          <span className="flex items-center text-yellow-400 text-xs gap-1">
            <Clock size={14} />
            Awaiting Payment
          </span>
        );
      case "payment_held":
        return (
          <span className="flex items-center text-blue-400 text-xs gap-1">
            <CheckCircle2 size={14} />
            Payment Held
          </span>
        );
      case "awaiting_delivery":
        return (
          <span className="flex items-center text-green-400 text-xs gap-1">
            <Clock size={14} />
            Awaiting Delivery
          </span>
        );
    }
  };
  
  return (
    <div className="bg-[#111] p-6 rounded-xl border border-[var(--primary)]/10 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Active Contracts</h2>
        <Link href="/dashboard/contracts" className="text-[var(--primary)] text-sm flex items-center gap-1 hover:underline">
          See all
          <ArrowRight size={16} />
        </Link>
      </div>
      
      <div className="space-y-4">
        {contracts.length > 0 ? (
          contracts.map(contract => (
            <div key={contract.id} className="p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#222] transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{contract.title}</h3>
                <span className="text-[var(--primary)] font-medium">
                  ₦{contract.amount.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between text-sm text-[var(--foreground)]/70 mb-3">
                <span>{contract.buyer} → {contract.seller}</span>
                <span>{contract.createdAt.toLocaleDateString()}</span>
              </div>
              
              <div className="flex justify-between items-center">
                {getStatusBadge(contract.status)}
                <Link href={`/dashboard/contracts/${contract.id}`} className="text-xs text-[var(--primary)] hover:underline">
                  View details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-[var(--foreground)]/50">
            <p>No active contracts</p>
          </div>
        )}
      </div>
    </div>
  );
}
