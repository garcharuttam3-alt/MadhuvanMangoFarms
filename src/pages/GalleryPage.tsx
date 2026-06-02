import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


import gallery6 from "@/assets/6.jpg";
import gallery7 from "@/assets/7.jpg";
import gallery8 from "@/assets/8.jpg";
import gallery9 from "@/assets/9.jpg";
import gallery10 from "@/assets/10.jpg";
import gallery11 from "@/assets/11.jpg";
import gallery12 from "@/assets/12.jpg";

import gallery13 from "@/assets/16.jpg";
import gallery14 from "@/assets/17.jpg";
import gallery15 from "@/assets/18.jpg";
import gallery16 from "@/assets/19.jpg";


const galleryImages = [
 
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,

  gallery13,
  gallery14,
  gallery15,
  gallery16,


];

const GalleryPage = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 overflow-hidden">
      <Header />

      <section className="px-3 sm:px-6 md:px-10 py-6 sm:py-12 mt-16">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >

            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold mb-4">
              Premium Mango Collection
            </div>

            <h1 className="text-2xl sm:text-5xl font-black tracking-tight mb-3">
              Mango Farm Gallery
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Explore our beautiful mango farms and premium fresh mango collection directly from Gujarat farms.
            </p>
          </motion.div>

          {/* Small Mobile Slider */}
          <div className="relative mb-6">

            <div className="overflow-hidden rounded-3xl">
              <motion.img
                key={currentSlide}
                src={galleryImages[currentSlide]}
                initial={{ opacity: 0.4, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[180px] sm:h-[300px] object-cover rounded-3xl"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-3xl" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-lg sm:text-3xl font-bold">
                Fresh Mangoes
              </h2>

              <p className="text-xs sm:text-sm text-white/80">
                Directly From Farm
              </p>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {[0, 1, 2, 3, 4].map((dot) => (
                <div
                  key={dot}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === dot
                      ? "w-6 bg-white"
                      : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Premium Mobile First Gallery */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">

            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.02,
                }}
                whileHover={{
                  y: -4,
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedIndex(index)}
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer group
                  bg-white shadow-sm
                  
                  ${
                    index % 7 === 0
                      ? "col-span-2"
                      : ""
                  }
                `}
              >

                <img
                  src={image}
                  loading="lazy"
                  className="
                    w-full
                    h-28
                    sm:h-40
                    md:h-52
                    object-cover
                    transition duration-500
                    group-hover:scale-110
                  "
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Small Floating Badge */}
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-md rounded-full px-2 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                </div>

              </motion.div>
            ))}

          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">

            <div className="bg-white rounded-2xl p-3 sm:p-5 text-center shadow-sm">
              <h2 className="text-lg sm:text-3xl font-black text-orange-500">
                24+
              </h2>

              <p className="text-[10px] sm:text-sm text-muted-foreground">
                Farm Photos
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 sm:p-5 text-center shadow-sm">
              <h2 className="text-lg sm:text-3xl font-black text-orange-500">
                100%
              </h2>

              <p className="text-[10px] sm:text-sm text-muted-foreground">
                Natural
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 sm:p-5 text-center shadow-sm">
              <h2 className="text-lg sm:text-3xl font-black text-orange-500">
                Fresh
              </h2>

              <p className="text-[10px] sm:text-sm text-muted-foreground">
                Delivery
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 z-50 bg-white/10 backdrop-blur-md p-2 rounded-full text-white"
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-3 sm:left-6 z-50 bg-white/10 backdrop-blur-md p-2 rounded-full text-white"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-3 sm:right-6 z-50 bg-white/10 backdrop-blur-md p-2 rounded-full text-white"
            >
              <ChevronRight size={26} />
            </button>

            {/* Selected Image */}
            <motion.img
              key={galleryImages[selectedIndex]}
              src={galleryImages[selectedIndex]}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[95vw] rounded-3xl object-contain shadow-2xl"
            />

            {/* Counter */}
            <div className="absolute bottom-5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
              {selectedIndex + 1} / {galleryImages.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;