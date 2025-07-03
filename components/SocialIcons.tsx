import React from "react";
import Link from "next/link";
import { X, Linkedin, Instagram, Send } from "lucide-react";

interface SocialIconsProps {
  horizontal?: boolean;
}

const SocialIcons = ({ horizontal = false }: SocialIconsProps) => {
  const socialLinks = [
    { icon: X, href: "#", label: "X (Twitter)" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Send, href: "#", label: "Telegram" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div
      className={`${horizontal ? "flex space-x-3" : "flex flex-col space-y-3"}`}
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          className="w-8 h-8 flex items-center justify-center bg-transparent rounded-full border border-white/20 hover:bg-white/10 transition-all duration-200 p-2"
        >
          <Icon className="w-4 h-4 text-white/70 hover:text-white" />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
