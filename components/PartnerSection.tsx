import React from "react";

const partners = [
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    alt: "OpenAI Logo",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google Logo",
  },
  {
    name: "VercelAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg",
    alt: "VercelAI Logo",
  },
];

const PartnerSection = () => {
  return (
    <section className="bg-white py-20 px-4 border-b flex flex-col gap-14">
      <div className="flex flex-wrap justify-center items-center gap-[4rem] mb-12  mt-6">
        {partners.map((partner) => (
          <div key={partner.name} className="flex flex-col items-center">
            <img
              src={partner.logo}
              alt={partner.alt}
              className="h-10 w-auto mb-2"
              style={{ filter: "grayscale(1) " }}
            />
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
          Trusted Escrow Solutions for Digital Transactions
        </h2>
        <p className="text-gray-600 mb-8 text-base md:text-lg">
          Secure your peer-to-peer payments with confidence. Our industry-grade
          escrow services protect both buyers and sellers—every transaction,
          every time.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 bg-primary text-black border-transparent font-plus-jakarta-sans rounded-full font-medium hover:border-black transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-black border font-plus-jakarta-sans border-black rounded-full font-medium hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
