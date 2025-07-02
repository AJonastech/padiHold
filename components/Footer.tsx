"use client";

import Link from "next/link";
import {
  X,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Apple,
  Play,
} from "lucide-react";

// Data for footer columns
const footerColumns = [
  {
    title: "Escrow Services",
    links: [
      { label: "Secure Transactions", href: "#" },
      { label: "Dispute Resolution", href: "#" },
      { label: "Trust Verification", href: "#" },
      { label: "Delivery Confirmation", href: "#" },
    ],
  },
  {
    title: "For Business",
    links: [
      { label: "Marketplace Protection", href: "#" },
      { label: "Freelancer Escrow", href: "#" },
      { label: "Business Transactions", href: "#" },
      { label: "API Integration", href: "#" },
    ],
  },
  {
    title: "About padiHold",
    links: [
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Reviews", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Support", href: "#" },
      { label: "How it Works", href: "#" },
      { label: "Fees & Pricing", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Vendor Reminder", href: "#" },
      { label: "AML Policy", href: "#" },
      { label: "Privacy Notice", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Restricted Countries", href: "#" },
      { label: "VIP Program T&C", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Top section with logo and social icons */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            {/* Logo */}
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-8 h-8 bg-[#D4FF00] rounded-full flex items-center justify-center mr-3">
                <span className="text-black font-bold text-lg">P</span>
              </div>
              <span className="text-white text-xl font-medium">padiHold</span>
            </div>

            {/* Social icons and download */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Social icons */}
              <div className="flex items-center gap-4">
                <X className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                <div className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <Instagram className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
              </div>

              {/* Download app */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-300">Download App:</span>
                <Apple className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                <Play className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          {/* Main footer columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {footerColumns.map((col, idx) => (
              <div key={col.title + idx}>
                <h3 className="text-white font-bold text-sm mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider line */}
          <div className="border-t border-gray-700 mb-6"></div>

          {/* Bottom legal section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="text-gray-400 text-xs leading-relaxed max-w-4xl">
              <p>
                &quot;padihold&quot; is a registered trademark of padiHold
                Technologies Ltd. Copyright © 2024 padiHold Technologies Ltd.
                All Rights Reserved. padiHold is Nigeria&apos;s leading escrow
                platform providing secure transaction services, AI-powered
                dispute resolution, and trusted fund holding. We specialize in
                protecting online transactions for marketplaces, freelancers,
                and businesses across Nigeria. Official address: Lagos, Nigeria.
              </p>
            </div>
            <div className="text-gray-400 text-xs whitespace-nowrap">
              Copyright 2024 padiHold. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
