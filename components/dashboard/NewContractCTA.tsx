import Link from "next/link";
import { PlusCircle } from "lucide-react";

export function NewContractCTA() {
  return (
    <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] p-6 rounded-xl border border-[var(--primary)]/30 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-4">Create New Contract</h2>
        <p className="text-[var(--foreground)]/70 mb-6">
          Secure your business transactions with our escrow service. Create a new contract in minutes.
        </p>
        <ul className="space-y-2 mb-8">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
            <span className="text-sm">Secure payments</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
            <span className="text-sm">No more payment on delivery issues</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
            <span className="text-sm">Fast dispute resolution</span>
          </li>
        </ul>
      </div>
      
      <Link 
        href="/dashboard/contracts/new" 
        className="flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--background)] py-3 px-4 rounded-lg font-medium hover:bg-[var(--primary)]/90 transition-colors"
      >
        <PlusCircle size={18} />
        Create Contract
      </Link>
    </div>
  );
}
