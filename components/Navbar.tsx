"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolledUp, setScrolledUp] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setScrolledUp(true);
      } else {
        setScrolledUp(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    {
      label: "Services",
      dropdown: [
        { label: "Escrow Services", href: "#" },
        { label: "Dispute Resolution", href: "#" },
        { label: "Trust Verification", href: "#" },
      ],
    },
    { label: "How it Works", href: "#" },
    {
      label: "Company",
      dropdown: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    { label: "Support", href: "#" },
    { label: "Become a Partner", href: "#" },
  ];

  return (
    <AnimatePresence>
      <motion.nav
        initial={false}
        animate={
          scrolledUp
            ? {
                borderColor: "#888",
                borderWidth: "2px",
                maxWidth: "95vw",
                margin: "0 auto",
                transform: "translateY(2rem)",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                borderRadius: "20rem",
              }
            : {
                borderWidth: "0px",
                maxWidth: "100vw",
                margin: "0",
                transform: "translateY(0)",
                boxShadow: "none",
              }
        }
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`sticky top-0 left-0 right-0 z-50 bg-black  h-[72px] lg:w-full  `}
        style={{ position: "sticky" }}
      >
        <div className="flex items-center justify-between h-full px-6 max-w-7xl mx-auto">
          {/* Left Section - Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm"></div>
            </div>
            <span className="text-white text-xl font-bold lowercase">
              padiHold
            </span>
          </div>

          {/* Center Section - Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation config for mapping */}
            {navLinks.map((nav) =>
              nav.dropdown ? (
                <DropdownMenu.Root key={nav.label}>
                  <DropdownMenu.Trigger asChild>
                    <button className="flex items-center space-x-1 text-[#B0B0B0] hover:text-white transition-colors duration-200 font-medium cursor-pointer outline-none group">
                      <span>{nav.label}</span>
                      <ChevronDown className="w-3 h-3 transition-transform group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="min-w-[180px] bg-black border border-primary rounded-lg shadow-xl py-2 z-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2"
                      sideOffset={4}
                    >
                      {nav.dropdown.map((item) => (
                        <DropdownMenu.Item
                          key={item.label}
                          className="px-4 py-2 text-[#B0B0B0] hover:text-white hover:bg-gray-900 transition-colors cursor-pointer outline-none focus:bg-gray-900 focus:text-white"
                          asChild
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </DropdownMenu.Item>
                      ))}
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              ) : (
                <Link
                  key={nav.label}
                  href={nav.href}
                  className="text-[#B0B0B0] hover:text-white transition-colors duration-200 font-medium"
                >
                  {nav.label}
                </Link>
              )
            )}
          </div>

          {/* Right Section - Auth Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="px-6 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 font-medium">
              Sign in
            </button>
            <button className="px-6 py-2 bg-primary text-black rounded-full hover:bg-[#C4EF00] transition-all duration-200 font-bold">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Dialog.Root
            open={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
          >
            <Dialog.Trigger asChild>
              <button
                className="lg:hidden text-white"
                onClick={toggleMobileMenu}
              >
                <Menu className="w-6 h-6" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut transition-all duration-300" />
              <Dialog.Content
                className="fixed top-1/2 left-1/2 z-50 bg-black border border-primary w-[90vw] max-w-md p-0 rounded-2xl shadow-2xl -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-modalIn data-[state=closed]:animate-modalOut transition-all duration-300"
                style={{
                  outline: "none",
                  height: "70vh",
                  minHeight: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div className="px-6 pt-6 pb-4  h-full flex-1 flex flex-col gap-8">
                  {/* Modal Logo at the top */}
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-black rounded-sm"></div>
                    </div>
                    <span className="text-white text-xl font-bold lowercase">
                      padiHold
                    </span>
                  </div>
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-[#B0B0B0] hover:text-white transition-colors font-medium"
                      onClick={() => handleDropdownToggle("services-mobile")}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === "services-mobile"
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === "services-mobile" && (
                      <div className="mt-2 ml-4 space-y-2">
                        {navLinks
                          .find(
                            (nav) => nav.label === "Services" && nav.dropdown
                          )
                          ?.dropdown?.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block text-[#B0B0B0] hover:text-white"
                            >
                              {item.label}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="#"
                    className="block text-[#B0B0B0] hover:text-white transition-colors font-medium"
                  >
                    How it Works
                  </Link>

                  <div>
                    <button
                      className="flex items-center justify-between w-full text-[#B0B0B0] hover:text-white transition-colors font-medium"
                      onClick={() => handleDropdownToggle("company-mobile")}
                    >
                      <span>Company</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === "company-mobile"
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === "company-mobile" && (
                      <div className="mt-2 ml-4 space-y-2">
                        <Link
                          href="#"
                          className="block text-[#B0B0B0] hover:text-white"
                        >
                          About Us
                        </Link>
                        <Link
                          href="#"
                          className="block text-[#B0B0B0] hover:text-white"
                        >
                          Careers
                        </Link>
                        <Link
                          href="#"
                          className="block text-[#B0B0B0] hover:text-white"
                        >
                          Press
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="#"
                    className="block text-[#B0B0B0] hover:text-white transition-colors font-medium"
                  >
                    Support
                  </Link>

                  <Link
                    href="#"
                    className="block text-[#B0B0B0] hover:text-white transition-colors font-medium"
                  >
                    Become a Partner
                  </Link>
                </div>
                <div className="pt-4 space-y-3 border-t border-gray-800 px-6">
                  <button className="w-full px-6 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 font-medium">
                    Sign in
                  </button>
                  <button className="w-full px-6 py-2 bg-primary text-black rounded-full hover:bg-[#C4EF00] transition-all duration-200 font-bold">
                    Sign up
                  </button>
                </div>
                <Dialog.Close asChild>
                  <button className="absolute top-4 right-4 text-white hover:text-primary transition-colors">
                    <X className="w-7 h-7" />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
