const features = [
  {
    icon: "trade",
    title: "Secure transactions",
    description:
      "Hold funds safely in escrow until both parties fulfill their obligations. Perfect for marketplace transactions, freelance work, and business deals.",
  },
  {
    icon: "send",
    title: "AI-powered disputes",
    description:
      "Our intelligent dispute resolution system analyzes conversations and suggests fair outcomes, ensuring quick and impartial conflict resolution.",
  },
  {
    icon: "supply",
    title: "Trust score system",
    description:
      "Build your reputation with our comprehensive trust scoring system that tracks successful transactions, KYC verification, and user behavior.",
  },
  {
    icon: "access",
    title: "Nigerian-focused",
    description:
      "Designed specifically for Nigerian businesses and individuals, with local payment methods, naira support, and understanding of local commerce.",
  },
  {
    icon: "escape",
    title: "Delivery confirmation",
    description:
      "Integrated logistics tracking with local delivery partners like GIG and NIPOST for automatic fund release upon confirmed delivery.",
  },
  {
    icon: "scale",
    title: "Scale your business",
    description:
      "Grow your business with confidence knowing every transaction is protected, disputes are handled fairly, and payments are guaranteed.",
  },
];

export const Marketplace = () => {
  return (
    <section className="bg-[#111111] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The world&apos;s largest P2P marketplace
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <MarketplaceFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MarketplaceFeatureProps {
  icon: string;
  title: string;
  description: string;
}

export const MarketplaceFeature = ({
  icon,
  title,
  description,
}: MarketplaceFeatureProps) => {
  return (
    <div className="text-center group">
      {/* Icon Container */}
      <div className="mb-6 flex justify-center">
        <div className="w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <MarketplaceIcon type={icon} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#B0B0B0] text-sm leading-relaxed max-w-sm mx-auto">
        {description}
      </p>
    </div>
  );
};

interface MarketplaceIconProps {
  type: string;
}

export const MarketplaceIcon = ({ type }: MarketplaceIconProps) => {
  const iconComponents = {
    trade: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="16"
          y="12"
          width="14"
          height="24"
          rx="2"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="34"
          y="20"
          width="14"
          height="24"
          rx="2"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="23" cy="18" r="2" fill="#D4FF00" />
        <circle cx="41" cy="26" r="2" fill="#D4FF00" />
        <path
          d="M20 30h6M37 38h6"
          stroke="#D4FF00"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    send: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 32l40-16-16 40-8-12-16-12z"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M28 32l24-16"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M36 24l8 4 4 8"
          stroke="#D4FF00"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="48" cy="20" r="1.5" fill="#D4FF00" />
        <circle cx="52" cy="24" r="1" fill="#D4FF00" />
      </svg>
    ),
    supply: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="12"
          y="16"
          width="40"
          height="28"
          rx="2"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="16"
          y="20"
          width="32"
          height="20"
          rx="1"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx="32"
          cy="30"
          r="4"
          stroke="#D4FF00"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M32 26v8M28 30h8"
          stroke="#D4FF00"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="28"
          y="12"
          width="8"
          height="4"
          rx="1"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    ),
    access: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32"
          cy="32"
          r="18"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M20 28c4-2 8-2 12 0s8 2 12 0M20 36c4 2 8 2 12 0s8-2 12 0"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="26" cy="28" r="1.5" fill="#D4FF00" />
        <circle cx="38" cy="36" r="1.5" fill="#D4FF00" />
        <path
          d="M32 20v-6M32 50v6M46 32h6M14 32h6"
          stroke="#D4FF00"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    escape: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 28h24c4 0 4 8 0 8H20c-4 0-4-8 0-8z"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="18"
          y="26"
          width="28"
          height="12"
          rx="2"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="26" cy="20" r="2" fill="#D4FF00" />
        <circle cx="32" cy="16" r="1.5" fill="#D4FF00" />
        <circle cx="38" cy="18" r="1.5" fill="#D4FF00" />
        <path
          d="M24 22l4-6M30 18l4-4M36 20l4-4"
          stroke="#D4FF00"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    scale: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="14"
          y="36"
          width="4"
          height="12"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="22"
          y="30"
          width="4"
          height="18"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="30"
          y="24"
          width="4"
          height="24"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="38"
          y="18"
          width="4"
          height="30"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="46"
          y="12"
          width="4"
          height="36"
          stroke="#D4FF00"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M42 20l4-4 4 4M46 16v-4"
          stroke="#D4FF00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return (
    iconComponents[type as keyof typeof iconComponents] || iconComponents.trade
  );
};
