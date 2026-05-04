import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Sun, Package, Users, Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Farm Fresh",
    description: "Picked at peak ripeness directly from our family-owned orchards, ensuring maximum freshness.",
  },
  {
    icon: Sun,
    title: "Naturally Ripened",
    description: "No artificial ripening agents. Our mangoes ripen naturally under the sun for authentic taste.",
  },
  {
    icon: Package,
    title: "Hygienic Packaging",
    description: "Each mango is carefully wrapped and packed to ensure it reaches you in perfect condition.",
  },
  {
    icon: Users,
    title: "Direct from Farmers",
    description: "No middlemen. You buy directly from our farm, getting the best quality at fair prices.",
  },
];

const reviews = [
  {
    name: "Rahul Patel",
    city: "Mumbai, MH",
    rating: 5,
    text: "Excellent service, very fast and professional. The Alphonsos were incredibly sweet and reached me in perfect condition!",
  },
  {
    name: "Priya Shah",
    city: "Ahmedabad, GJ",
    rating: 5,
    text: "Amazing experience. Quality work and great support team. The packaging felt very premium and eco-friendly.",
  },
  {
    name: "Amit Verma",
    city: "New Delhi, DL",
    rating: 4,
    text: "Good service overall, slight delay due to weather but the mangoes were worth the wait. Naturally ripened taste!",
  },
  {
    name: "Sneha Reddy",
    city: "Hyderabad, TS",
    rating: 5,
    text: "Finally found authentic farm-direct mangoes. The difference in taste compared to market-bought ones is huge.",
  },
];

const WhyChooseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="why-us" className="section-padding bg-background py-20">
      <div className="container-custom mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Madhuvan
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient-leaf">Our Mangoes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Three generations of expertise, traditional farming methods,
            and a commitment to quality that you can taste in every bite.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-card rounded-2xl p-8 text-center h-full border border-border/50 shadow-soft transition-all duration-300 group-hover:shadow-card group-hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-leaf flex items-center justify-center shadow-green">
                  <feature.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
              <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 bg-card rounded-3xl p-8 shadow-card border border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { value: "40+", label: "Years Exp." },
            { value: "5K+", label: "Happy Customers" },
            { value: "25+", label: "Acres Orchards" },
            { value: "4+", label: "Varieties" },
            { value: "5L+", label: "Mangoes Sold" },
            { value: "50K+", label: "Boxes Delivered" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-gradient-mango mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-tighter text-muted-foreground font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* --- REVIEWS SLIDER SECTION --- */}
        <div className="mt-24 relative max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-heading">What Our Community Says</h3>
          </div>

          <div className="relative overflow-hidden px-4 py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl text-center relative"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={i < reviews[currentIndex].rating ? "#fbbf24" : "none"} className={i < reviews[currentIndex].rating ? "text-yellow-400" : "text-muted"} />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl italic text-foreground leading-relaxed mb-8">
                  "{reviews[currentIndex].text}"
                </p>

                <div className="flex flex-col items-center">
                  <h4 className="font-bold text-xl">{reviews[currentIndex].name}</h4>
                  <div className="flex items-center text-secondary font-medium text-sm mt-1">
                    <MapPin size={14} className="mr-1" /> {reviews[currentIndex].city}
                  </div>
                </div>
                
                {/* Visual Decoration */}
                <div className="absolute top-6 left-10 text-primary/10 select-none hidden md:block">
                  <span className="text-8xl font-serif">“</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevReview}
                className="p-3 rounded-full border border-border hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextReview}
                className="p-3 rounded-full border border-border hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;