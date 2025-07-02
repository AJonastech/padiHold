"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import * as Form from "@radix-ui/react-form";
import { NotificationsDropdown } from "./NotificationsDropdown";

export function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center gap-4 font-plus-jakarta-sans">
      <div className="relative w-full sm:w-96">
        <Form.Root className="w-full">
          <Form.Field name="search">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <Form.Control asChild>
                <input
                  type="text"
                  placeholder="Search contracts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-[var(--primary)]/20 bg-[#111] text-[var(--foreground)] 
                  focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 transition-all font-plus-jakarta-sans"
                />
              </Form.Control>
            </div>
          </Form.Field>
        </Form.Root>
      </div>
      
      <div className="relative">
        <NotificationsDropdown />
      </div>
    </header>
  );
}
