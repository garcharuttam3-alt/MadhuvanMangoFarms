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
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <main className="w-full">
        <section className="px-4 sm:px-6 md:px-10 lg:px-16">
          <HeroSection />
        </section>

        <section className="px-4 sm:px-6 md:px-10 lg:px-16">
          <MangoVarietiesSection />
        </section>

        <section className="px-4 sm:px-6 md:px-10 lg:px-16">
          <WhyChooseSection />
        </section>

        <section className="px-4 sm:px-6 md:px-10 lg:px-16">
          <JourneySection />
        </section>

        <section className="px-4 sm:px-6 md:px-10 lg:px-16">
          <HowToOrderSection />
        </section>

        <section className="px-4 sm:px-6 md:px-10 lg:px-16">
          <GallerySection />
        </section>

        <section className="px-4 sm:px-6 md:px-10 lg:px-16">
          <AboutSection />
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
export default Index;
