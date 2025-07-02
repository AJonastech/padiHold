"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import SocialIcons from "./SocialIcons";
import Globe from "./Globe";
import EmailSignup from "./EmailSignup";

const HeroSection = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] bg-black text-white flex flex-col items-center overflow-y-hidden overflow-hidden lg:overflow-x-auto max-w-screen  ">
      {/* Yellow banner */}
      <div className="w-full bg-primary  flex-col text-center  text-black py-3 px-4 flex items-center justify-center font-medium text-sm md:text-base">
        <span className=""> Welcome to padiHold!</span>{" "}
        <span className="">
          {" "}
          Secure your transactions with trusted escrow services. Learn more
        </span>{" "}
      </div>
      <div className="max-w-6xl mx-auto px-4 lg:px-8 pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-6 items-center ">
          {/* Left Panel - Content */}
          <div className="max-w-[450px] py-16 lg:py-24 relative">
            {/* Social Icons - Positioned vertically */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 hidden xl:block">
              <SocialIcons />
            </div>

            {/* Main Content */}
            <div className="space-y-6 ">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight font-plus-jakarta-sans ">
                The <span className="text-primary font-">Nigerian</span> way to
                secure transactions{" "}
                <ArrowUpRight className="inline-block w-8 h-8 lg:w-12 lg:h-12 text-primary ml-2" />
              </h1>

              {/* Subtext */}
              <p className="text-sm lg:text-base text-[#D0D0D0] max-w-[80%] leading-relaxed mt-6">
                Nigeria&apos;s leading escrow platform. Secure your online
                transactions with trusted dispute resolution and fund
                protection.
              </p>

              {/* Email Signup Form */}
              <div className="mt-8">
                <EmailSignup />
              </div>

              {/* Download Links */}
              <p className="text-sm text-[#D0D0D0] mt-6">
                Available on iOS and Android
              </p>
            </div>

            {/* Mobile Social Icons */}
            <div className="mt-8 xl:hidden">
              <SocialIcons horizontal />
            </div>
          </div>

          {/* Right Panel - Globe */}
          <div className="relative lg:h-fit flex items-center justify-center    ">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
