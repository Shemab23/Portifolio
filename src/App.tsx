/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredibilityStrip from './components/CredibilityStrip';
import PhilosophySection from './components/PhilosophySection';
import CapabilitiesSection from './components/CapabilitiesSection';
import SelectedWork from './components/SelectedWork';
import ProcessSection from './components/ProcessSection';
import CurrentDirection from './components/CurrentDirection';
import ExperienceEducation from './components/ExperienceEducation';
import AILearningSection from './components/AILearningSection';
import FAQSection from './components/FAQSection';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#141517] selection:bg-[#9B4A22]/20 selection:text-[#9B4A22]">
      {/* Navigation Header */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main>
        {/* Section 01: Hero */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Section 02: Credibility Strip */}
        <CredibilityStrip />

        {/* Section 03: Engineering Philosophy */}
        <PhilosophySection />

        {/* Section 04: What I Build */}
        <CapabilitiesSection />

        {/* Section 05: Selected Work & Case Studies */}
        <SelectedWork />

        {/* Section 06: How I Think — 5-Step Process */}
        <ProcessSection />

        {/* Section 07: Current Direction — Future Trajectory */}
        <CurrentDirection />

        {/* Section 08 & 09: Experience, Teaching, Leadership & Education */}
        <ExperienceEducation />

        {/* Section 10: AI Learning Manifesto */}
        <AILearningSection />

        {/* Section 11: FAQ */}
        <FAQSection />

        {/* Section 12: Final Call to Action */}
        <ClosingCTA onOpenContact={handleOpenContact} />
      </main>

      {/* Section 13: Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact Dialog */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}

