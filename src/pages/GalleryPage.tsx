import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  { src: gallery1, alt: "Farmers harvesting mangoes at sunset" },
  { src: gallery2, alt: "Careful packaging of fresh mangoes" },
  { src: gallery3, alt: "Mango tree laden with ripe fruits" },
  { src: gallery4, alt: "Fresh mango delivery unboxing" },
  { src: gallery1, alt: "Farm view" },
  { src: gallery2, alt: "Sorting mangoes" },
  { src: gallery3, alt: "Tree close view" },
  { src: gallery4, alt: "Delivery packing" },
];

const GalleryPage = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="px-3 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Mango Farm Gallery
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              A simple look at our farm, harvesting, and fresh mangoes.
            </p>
          </div>

          {/* ✅ Masonry Layout (Responsive) */}
          <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-6 space-y-3 sm:space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid overflow-hidden rounded-md sm:rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 Lightbox Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />

            {/* Caption */}
            <p className="text-center text-white text-sm mt-3">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default GalleryPage;