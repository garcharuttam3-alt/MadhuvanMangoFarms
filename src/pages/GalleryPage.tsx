import { useEffect } from "react";
import Header from "@/components/Header";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Mango Farm Gallery
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A simple look at our farm, harvesting, and fresh mangoes.
            </p>
          </div>

          {/* 🔥 Masonry Layout */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid overflow-hidden rounded-lg"
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
    </div>
  );
};

export default GalleryPage;