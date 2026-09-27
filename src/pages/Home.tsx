import AboutSection from "@/components/home/About";
import ContactSection from "@/components/home/contact";
import HeroSection from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import WhatIDoSection from "@/components/home/WhatiDo";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <SelectedWork />
      <AboutSection />
      <WhatIDoSection />
      <ContactSection />
    </div>
  );
};
