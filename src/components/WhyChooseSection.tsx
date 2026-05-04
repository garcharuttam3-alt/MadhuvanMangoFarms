import { useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Sun, Package, Users } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Farm Fresh",
    description:
      "Picked at peak ripeness directly from our family-owned orchards, ensuring maximum freshness.",
  },
  {
    icon: Sun,
    title: "Naturally Ripened",
    description:
      "No artificial ripening agents. Our mangoes ripen naturally under the sun for authentic taste.",
  },
  {
    icon: Package,
    title: "Hygienic Packaging",
    description:
      "Each mango is carefully wrapped and packed to ensure it reaches you in perfect condition.",
  },
  {
    icon: Users,
    title: "Direct from Farmers",
    description:
      "No middlemen. You buy directly from our farm, getting the best quality at fair prices.",
  },
];

const WhyChooseSection = () => {
  // Load Elfsight script once


  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-custom mx-auto">

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

                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-20 bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { value: "40+", label: "Years of Experience" },
            { value: "5K+", label: "Happy Customers" },
            { value: "25+", label: "Acres of Orchards" },
            { value: "4+", label: "Premium Varieties" },
            { value: "5 Lakh+", label: "Mangoes Sold" },
            { value: "50K+", label: "Boxes Delivered" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient-mango mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

       {/* Reviews Container */}
<div className="mt-10">

  {/* Mobile Slider */}
  <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:hidden pb-2">
    
    {/* Card */}
    <div className="min-w-[85%] snap-center bg-background rounded-xl p-5 shadow-sm border border-border/50">
      <h4 className="font-semibold mb-1">Rahul Patel</h4>
      <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
      <p className="text-sm text-muted-foreground">
        Excellent service, very fast and professional. Highly recommended!
      </p>
    </div>

    <div className="min-w-[85%] snap-center bg-background rounded-xl p-5 shadow-sm border border-border/50">
      <h4 className="font-semibold mb-1">Priya Shah</h4>
      <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
      <p className="text-sm text-muted-foreground">
        Amazing experience. Quality work and great support team.
      </p>
    </div>

    <div className="min-w-[85%] snap-center bg-background rounded-xl p-5 shadow-sm border border-border/50">
      <h4 className="font-semibold mb-1">Amit Verma</h4>
      <div className="text-yellow-400 text-sm mb-2">★★★★☆</div>
      <p className="text-sm text-muted-foreground">
        Good service overall, slight delay but satisfied.
      </p>
    </div>

  </div>

  {/* Desktop Grid */}
  <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    
    <div className="bg-background rounded-xl p-5 shadow-sm border border-border/50">
      <h4 className="font-semibold mb-1">Rahul Patel</h4>
      <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
      <p className="text-sm text-muted-foreground">
        Excellent service, very fast and professional. Highly recommended!
      </p>
    </div>

    <div className="bg-background rounded-xl p-5 shadow-sm border border-border/50">
      <h4 className="font-semibold mb-1">Priya Shah</h4>
      <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
      <p className="text-sm text-muted-foreground">
        Amazing experience. Quality work and great support team.
      </p>
    </div>

    <div className="bg-background rounded-xl p-5 shadow-sm border border-border/50">
      <h4 className="font-semibold mb-1">Amit Verma</h4>
      <div className="text-yellow-400 text-sm mb-2">★★★★☆</div>
      <p className="text-sm text-muted-foreground">
        Good service overall, slight delay but satisfied.
      </p>
    </div>

  </div>

</div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
