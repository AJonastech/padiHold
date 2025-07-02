"use client";

import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { motion } from "framer-motion";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="p-5 h-screen flex items-stretch">
      <div className="flex rounded-2xl overflow-hidden bg-[var(--background)] w-full shadow-lg gap-4">
        {/* Sidebar */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        {/* Main Content */}
        <motion.main
          className="flex-1 overflow-y-auto flex flex-col py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Content area with matching spacing */}
          <div className="flex-grow px-4 overflow-y-auto">
            <div className="h-full bg-[#0a0a0a] rounded-xl">{children}</div>
          </div>

          {/* Footer to match sidebar bottom */}
          <div className="p-4 border-t border-[var(--primary)]/20">
            <p className="text-xs text-[var(--foreground)]/50">
              © 2023 PadiHold. All rights reserved.
            </p>
          </div>
        </motion.main>
      </div>
    </div>
  );
}

export default DashboardLayout;
