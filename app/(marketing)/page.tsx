import React from "react";
import { NextPage } from "next";

import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import { Marketplace } from "../../components/Marketplace";
import Hero from "../../components/Hero";
import PartnerSection from "../../components/PartnerSection";
import PrimaryCTA from "../../components/PrimaryCTA";
import Navbar from "../../components/Navbar";

const HomePage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PartnerSection />
      <PrimaryCTA />

      <div className="my-12">
        <Marketplace />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
