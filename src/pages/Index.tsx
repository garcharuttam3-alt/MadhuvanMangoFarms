import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MangoVarietiesSection from "@/components/MangoVarietiesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import JourneySection from "@/components/JourneySection";
import HowToOrderSection from "@/components/HowToOrderSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  const location = useLocation();

  // ✅ Handle scroll to section from any page (including /gallery)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Optional: scroll to top when no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <main className="w-full">
        <section id="home" className="px-4 sm:px-6 md:px-10 lg:px-16">
          <HeroSection />
        </section>

        <section id="varieties" className="px-4 sm:px-6 md:px-10 lg:px-16">
          <MangoVarietiesSection />
        </section>

        <section id="why-us" className="px-4 sm:px-6 md:px-10 lg:px-16">
          <WhyChooseSection />
        </section>

        <section id="journey" className="px-4 sm:px-6 md:px-10 lg:px-16">
          <JourneySection />
        </section>

        <section id="order" className="px-4 sm:px-6 md:px-10 lg:px-16">
          <HowToOrderSection />
        </section>

        <section id="gallery" className="px-4 sm:px-6 md:px-10 lg:px-16">
          <GallerySection />
        </section>

        <section id="about" className="px-4 sm:px-6 md:px-10 lg:px-16">
          <AboutSection />
        </section>

        {/* OPTIONAL: If you keep "Contact" in navbar */}
        {/* <section id="contact" className="px-4 sm:px-6 md:px-10 lg:px-16">
          <ContactSection />
        </section> */}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;