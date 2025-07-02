"use client";

import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { motion } from "framer-motion";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="p-5 h-screen flex items-stretch">
      <div className="flex rounded-2xl  overflow-hidden  w-full shadow-lg">
        {/* Sidebar */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        {/* Main Content */}
        <motion.main
          className="flex-1 overflow-y-auto scrollbar-hide flex flex-col ml-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Content area with matching spacing */}
          <div className="flex-grow p-5 pb-16 scrollbar-hide overflow-y-auto">
            <div className="h-full rounded-xl">{children}</div>
          </div>

          {/* Footer to match sidebar bottom */}
          <div className="p-[26px] border-t  border-[var(--primary)]/20 flex items-center">
            <p className="text-xs text-[var(--foreground)]/50">
              © 2025 PadiHold. All rights reserved.
            </p>
          </div>
        </motion.main>
      </div>
    </div>
  );
}

export default DashboardLayout;
