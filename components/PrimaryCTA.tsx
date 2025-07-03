"use client";

import { Send } from "lucide-react";

const PrimaryCTA = () => {
  return (
    <div className="lg:min-h-[130vh] h-max bg-white relative max-w-screen overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:px-10 lg:py-20 h-max relative">
        <div className="max-w-7xl mx-auto h-max ">
          <div className="flex flex-col-reverse  lg:flex-row items-center gap-12 lg:gap-16 ">
            {/* Left Column - Mobile Mockups */}
            <div className="flex-1 flex items-center justify-center  min-h-[300px] ">
              {/* Phone Image - visible and not blocking clicks */}
              <img
                src="/lines.svg"
                alt="Paxful Trading Interface"
                className="w-full lg:w-[60%] h-auto drop-shadow-xl pointer-events-none select-none  z-0 absolute left-0 top-0  mt-[15rem]  lg:mt-[10rem]"
              />
              <img
                src="/two-phones-mockup.webp"
                alt="Paxful Trading Interface"
                className="w-full lg:w-[60%] h-auto drop-shadow-xl pointer-events-none select-none  z-0 absolute left-0 top-0  mt-[15rem]  lg:mt-[10rem]"
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-right lg:text-right space-y-6 ">
              {/* Icon */}

              {/* Heading */}
              <h1 className="text-3xl xl:text-4xl font-medium  text-right text-black  lg:leading-tight font-plus-jakarta-sans flex justify-end gap-4">
                <div className="flex justify-center lg:justify-end">
                  <div className="inline-flex items-top mt-2 justify-center   rounded-full ">
                    <Send className="w-10 h-10 text-black" />
                  </div>
                </div>{" "}
                Secure transactions with trusted escrow
              </h1>

              {/* Subheading */}
              <p className="text-base lg:text-lg text-gray-600 leading-tighter lg:leading-relaxed lg:max-w-md mx-auto lg:mx-0 lg:ml-auto">
                Protect your online transactions with our AI-powered dispute
                resolution and secure fund holding services.
              </p>

              {/* CTA Button */}
              <button className="bg-primary hover:bg-primary/50 text-black font-semibold px-8 py-3 rounded-l-full text-base transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                Start your escrow
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrimaryCTA;
