"use client";

import { useState } from "react";
import { Bell, Check, AlertCircle, FileText, Clock, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type NotificationType = "contract_created" | "contract_completed" | "dispute" | "payment_received";

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  timestamp: Date;
  read: boolean;
  link?: string;
  data?: {
    contractId?: string;
    amount?: number;
    counterparty?: string;
  };
}

export function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "n1",
      type: "contract_created",
      message: "New contract created with Lagos Fashions Ltd",
      timestamp: new Date(2025, 3, 15, 9, 30),
      read: false,
      link: "/dashboard/contracts/con_123456",
      data: {
        contractId: "con_123456",
        counterparty: "Lagos Fashions Ltd"
      }
    },
    {
      id: "n2",
      type: "payment_received",
      message: "Payment of ₦250,000 received from TechNova Solutions",
      timestamp: new Date(2025, 3, 14, 14, 22),
      read: false,
      link: "/dashboard/transactions/txn_789012",
      data: {
        amount: 250000,
        counterparty: "TechNova Solutions"
      }
    },
    {
      id: "n3",
      type: "dispute",
      message: "Dispute raised on contract with Chukwu Enterprises",
      timestamp: new Date(2025, 3, 12, 11, 15),
      read: true,
      link: "/dashboard/contracts/con_345678",
      data: {
        contractId: "con_345678",
        counterparty: "Chukwu Enterprises"
      }
    },
    {
      id: "n4",
      type: "contract_completed",
      message: "Contract with Sunshine Stores Ltd completed successfully",
      timestamp: new Date(2025, 3, 10, 16, 45),
      read: true,
      link: "/dashboard/contracts/con_567890",
      data: {
        contractId: "con_567890",
        counterparty: "Sunshine Stores Ltd"
      }
    }
  ]);

  const hasUnreadNotifications = notifications.some(n => !n.read);
  
  const getNotificationIcon = (type: NotificationType) => {
    switch(type) {
      case "contract_created":
        return <FileText size={16} className="text-blue-400" />;
      case "contract_completed":
        return <Check size={16} className="text-green-400" />;
      case "dispute":
        return <AlertCircle size={16} className="text-red-400" />;
      case "payment_received":
        return <DollarSign size={16} className="text-[var(--primary)]" />;
      default:
        return <Clock size={16} className="text-gray-400" />;
    }
  };
  
  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };
  
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({...n, read: true})));
  };
  
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? {...n, read: true} : n)
    );
  };
  
  return (
    <div className="relative">
      <button 
        className="p-2 rounded-full hover:bg-[#1a1a1a] transition-colors relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell size={22} className="text-[var(--foreground)]" />
        {hasUnreadNotifications && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--primary)] rounded-full"></span>
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown panel */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-80 sm:w-96 bg-[#111] border border-[var(--primary)]/20 rounded-lg shadow-lg z-20 overflow-hidden"
            >
              <div className="p-3 border-b border-[var(--primary)]/10 flex justify-between items-center">
                <h3 className="font-medium">Notifications</h3>
                {hasUnreadNotifications && (
                  <button 
                    onClick={markAllAsRead}
                    className="text-xs text-[var(--primary)] hover:underline"
                  >
                    Mark all as read
                  </button>
                )}
              </div>
              
              <div className="max-h-[400px] overflow-y-auto scrollbar-hide">
                {notifications.length > 0 ? (
                  <div>
                    {notifications.map(notification => (
                      <Link 
                        href={notification.link || "#"} 
                        key={notification.id}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className={`p-3 border-b border-[var(--primary)]/5 hover:bg-[#1a1a1a] transition-colors flex gap-3 ${
                          !notification.read ? "bg-[#1a1a1a]/50" : ""
                        }`}>
                          <div className="mt-0.5">
                            <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center">
                              {getNotificationIcon(notification.type)}
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm mb-1">{notification.message}</p>
                            <p className="text-xs text-[var(--foreground)]/50">
                              {formatTimeAgo(notification.timestamp)}
                            </p>
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 rounded-full bg-[var(--primary)] mt-2"></div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-[var(--foreground)]/50">
                    <p>No notifications</p>
                  </div>
                )}
              </div>
              
              <div className="p-3 border-t border-[var(--primary)]/10 text-center">
                <Link href="/dashboard/notifications" className="text-xs text-[var(--primary)] hover:underline">
                  View all notifications
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
