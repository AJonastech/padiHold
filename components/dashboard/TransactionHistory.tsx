"use client";

import { ArrowRight, ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "incoming" | "outgoing";
  date: Date;
  counterparty: string;
}

export function TransactionHistory() {
  // Mock data - in real app this would come from an API
  const transactions: Transaction[] = [
    {
      id: "txn_234567",
      description: "Contract completion payment",
      amount: 175000,
      type: "incoming",
      date: new Date(2023, 6, 28),
      counterparty: "Chukwu Enterprises"
    },
    {
      id: "txn_345678",
      description: "Platform fee",
      amount: 8750,
      type: "outgoing",
      date: new Date(2023, 6, 28),
      counterparty: "PadiHold"
    },
    {
      id: "txn_456789",
      description: "Contract completion payment",
      amount: 320000,
      type: "incoming",
      date: new Date(2023, 6, 15),
      counterparty: "Sunshine Stores Ltd"
    }
  ];
  
  return (
    <div className="bg-[#111] p-6 rounded-xl border border-[var(--primary)]/10 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Transaction History</h2>
        <Link href="/dashboard/transactions" className="text-[var(--primary)] text-sm flex items-center gap-1 hover:underline">
          See all
          <ArrowRight size={16} />
        </Link>
      </div>
      
      <div className="space-y-4">
        {transactions.length > 0 ? (
          transactions.map(transaction => (
            <div key={transaction.id} className="p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#222] transition-colors">
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    transaction.type === "incoming" 
                      ? "bg-green-500/20 text-green-500" 
                      : "bg-red-500/20 text-red-500"
                  }`}>
                    {transaction.type === "incoming" 
                      ? <ArrowDownRight size={16} /> 
                      : <ArrowUpRight size={16} />
                    }
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-xs text-[var(--foreground)]/70">{transaction.counterparty}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={transaction.type === "incoming" ? "text-green-500" : "text-red-500"}>
                    {transaction.type === "incoming" ? "+" : "-"}₦{transaction.amount.toLocaleString()}
                  </p>
                  <p className="text-xs text-[var(--foreground)]/70">
                    {transaction.date.toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-[var(--foreground)]/50">
            <p>No transaction history</p>
          </div>
        )}
      </div>
    </div>
  );
}
