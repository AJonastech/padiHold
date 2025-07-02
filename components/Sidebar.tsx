"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Home, 
  Settings, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  FileText,
  BarChart2,
  HelpCircle
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export function Sidebar({ isCollapsed, toggleCollapse }: SidebarProps) {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
    { name: "Documents", href: "/dashboard/documents", icon: FileText },
    { name: "Users", href: "/dashboard/users", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
    { name: "Help", href: "/dashboard/help", icon: HelpCircle },
  ];

  return (
    <motion.aside
      initial={{ width: isCollapsed ? 80 : 250 }}
      animate={{ width: isCollapsed ? 80 : 250 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-full bg-[var(--background)] relative flex flex-col border-r border-[var(--primary)]/30 justify-between font-plus-jakarta-sans"
    >
      {/* Logo */}
      <div className="p-4 border-b border-[var(--primary)]/20 flex items-center justify-between">
        {!isCollapsed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold text-white"
          >
            PadiHold
          </motion.div>
        )}
        <button
          onClick={toggleCollapse}
          className="p-1.5 rounded-lg bg-[#1a1a1a] hover:bg-[#222222] transition-colors text-white"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-grow py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <li key={item.name}>
                <Link href={item.href}>
                  <div
                    className={`flex items-center py-2.5 px-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "bg-[#1a1a1a] text-[var(--primary)]" 
                        : "hover:bg-[#1a1a1a] text-[var(--foreground)] hover:text-[var(--primary)]"
                    }`}
                  >
                    <Icon size={20} className={isActive ? "text-[var(--primary)]" : ""} />
                    
                    {!isCollapsed && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="ml-3"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-[var(--primary)]/20">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[var(--primary)]/20">
            <span className="text-xs text-[var(--primary)]">UN</span>
          </div>
          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="ml-3"
            >
              <p className="text-sm font-medium text-white mb-0 leading-tight">User Name</p>
              <p className="text-xs text-gray-400 mb-0 leading-tight">user@example.com</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.aside>
  );
}
