import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
  id="home"
  className="bg-earth w-full h-screen flex items-center justify-center overflow-hidden"
>
     {/* Background Image */}
<div className="absolute inset-0 w-full h-full">
  <img
    src={heroBg}
    alt="Mango orchard at golden hour"
    className="w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />
</div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 opacity-30"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-secondary">
          <ellipse cx="50" cy="60" rx="30" ry="35" />
          <path d="M50 25 Q60 5 70 10 Q55 15 50 25" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10 w-16 h-16 opacity-25"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-leaf">
          <path d="M50 10 Q80 30 70 70 Q50 90 30 70 Q20 30 50 10 Z" />
        </svg>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 container-custom mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.img
            src={logo}
            alt="Madhuvan Mango Farm Logo"
            className="w-32 md:w-44 mx-auto drop-shadow-2xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, -3, 3, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight"
        >
          Fresh Farm Mangoes
          <br />
          <span className="text-gradient-mango">Delivered to You</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          Naturally grown • Chemical-free • Direct from farmers
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-10"
        >
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            100% Organic
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Naturally Ripened
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Farm Fresh
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://wa.me/919725131748?text=Hi%2C%20I%20want%20to%20order%20fresh%20mangoes%20from%20Madhuvan%20Farm!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-8 py-4 animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </motion.a>

          <motion.a
            href="#varieties"
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Mangoes
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
