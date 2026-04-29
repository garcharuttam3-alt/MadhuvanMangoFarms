import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const AboutSection = () => {

  // Load Elfsight script once
  useEffect(() => {
    const scriptSrc = "https://elfsightcdn.com/platform.js";

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-init for SPA route changes
      if (window.ELFSIGHT_APPS) {
        window.ELFSIGHT_APPS.init();
      }
    }
  }, []);

  return (
    <section
      id="about"
      className="section-padding bg-gradient-warm watercolor-texture relative overflow-hidden"
    >
      {/* Decorative leaf */}
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-secondary">
          <path d="M100 20 Q150 50 140 120 Q100 180 60 120 Q50 50 100 20" />
        </svg>
      </motion.div>

      <div className="container-custom mx-auto relative z-10">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Logo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-mango rounded-3xl opacity-20 blur-3xl" />

              <div className="relative bg-card rounded-3xl p-12 shadow-card border border-border/50 flex items-center justify-center">
                <motion.img
                  src={logo}
                  alt="Madhuvan Mango Farm"
                  className="w-64 md:w-80 drop-shadow-xl"
                  animate={{ y: [0, -10, 0], rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-3 rounded-full shadow-green font-semibold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Est. 1988
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Story
            </span>

            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="text-gradient-mango">Madhuvan Farm</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Nestled in the heart of Gujarat,{" "}
                <strong className="text-foreground">Madhuvan Mango Farm</strong>{" "}
                has been a family-owned treasure for over 40 years.
              </p>

              <p>
                We follow traditional farming — <em>no chemicals, no artificial
                  ripening</em>. Every mango is hand-picked at peak freshness.
              </p>

              <p>
                Our mission is to deliver authentic farm-fresh mangoes
                directly to your doorstep.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 flex flex-wrap gap-4">
              {["Family Values", "Traditional Methods", "Quality First", "Customer Trust"].map(
                (value, index) => (
                  <motion.span
                    key={value}
                    className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    ✓ {value}
                  </motion.span>
                )
              )}
            </div>

            {/* CTA */}
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* INSTAGRAM LIVE FEED */}
        <motion.div
          className="mt-24 bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
            Follow Us on Instagram
          </h3>

          <div
            className="elfsight-app-3eb8d2b2-e381-452d-977a-ad95163ed9b7 min-h-[300px]"
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
