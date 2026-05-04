import { motion } from "framer-motion";
import { Star, Leaf, Award, MessageCircle } from "lucide-react";
import mangoKesar from "@/assets/mango.jpeg";

const MangoVarietiesSection = () => {
  const whatsappUrl = "https://wa.me/919725131748?text=Hi%2C%20I%20want%20to%20order%20Kesar%20Mango.";

  return (
    <section id="varieties" className="section-padding bg-gradient-warm watercolor-texture">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Signature Variety
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Premium{" "}
            <span className="text-gradient-mango">Kesar Mango</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the legendary "Queen of Mangoes" — hand-picked from our orchards 
            and delivered fresh to your doorstep.
          </p>
        </motion.div>

        {/* Featured Mango Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-card rounded-[2rem] shadow-card overflow-hidden border border-border/50">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
             <motion.div 
  className="relative bg-gradient-to-br from-mango-cream via-mango-yellow/20 to-mango-cream p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[450px] overflow-hidden rounded-3xl"
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 200, damping: 12 }}
>

  {/* 🌟 Animated Glow Background */}
  <motion.div
    className="absolute w-60 h-60 bg-yellow-300/30 rounded-full blur-3xl"
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Decorative circles */}
  <div className="absolute top-8 left-8 w-20 h-20 bg-mango-yellow/20 rounded-full blur-xl" />
  <div className="absolute bottom-12 right-12 w-32 h-32 bg-mango-green/10 rounded-full blur-2xl" />

  {/* 🏷️ Badges */}
  <div className="absolute top-4 sm:top-6 left-4 right-4 sm:left-6 sm:right-6 flex items-center justify-between gap-2 z-20">

    {/* Queen Badge */}
    <motion.div
      className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Award className="w-3.5 h-3.5" />
      Queen of Mangoes
    </motion.div>

    {/* Season Badge */}
    <motion.div
      className="bg-secondary text-secondary-foreground text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      🗓️ May - July
    </motion.div>

  </div>

  {/* 🍃 Floating Shine Effect */}
  <motion.div
    className="absolute w-24 h-24 bg-white/20 blur-xl rounded-full top-16 left-12"
    animate={{
      x: [0, 20, 0],
      y: [0, -10, 0],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* 🥭 Mango Image */}
  <div className="w-full flex justify-center items-center relative z-10">

    <motion.img
      src={mangoKesar}
      alt="Premium Kesar Mango"
      className="
        w-full
        mt-10
        max-w-[250px] 
        sm:max-w-[220px] 
        md:max-w-[300px] 
        h-auto 
        object-contain
      "

      animate={{
        y: [0, -14, 0],
        rotate: [0, 2, -2, 0],
        scale: [1, 1.06, 1],
        filter: [
          "drop-shadow(0px 20px 30px rgba(0,0,0,0.15))",
          "drop-shadow(0px 35px 50px rgba(0,0,0,0.25))",
          "drop-shadow(0px 20px 30px rgba(0,0,0,0.15))",
        ],
      }}

      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

  </div>

</motion.div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-muted-foreground text-sm ml-2">Premium Quality</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Kesar Mango
                </h3>

                

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="w-10 h-10 rounded-full bg-mango-green/10 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-mango-green" />
                    </div>
                    <span>100% Organic</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="w-10 h-10 rounded-full bg-mango-yellow/20 flex items-center justify-center">
                      <span className="text-lg">🌿</span>
                    </div>
                    <span>Naturally Ripened</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-lg">📦</span>
                    </div>
                    <span>Safe Packaging</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-lg">🚚</span>
                    </div>
                    <span>Fast Delivery</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 pt-6 border-t border-border">
  
{/* Price Section */}
<div className="text-center sm:text-left w-full " >
  <p className="text-sm text-muted-foreground mb-2">
    Price per 10 Kg
  </p>
 
  {/* Size Options (Fixed Responsive Grid) */}
<div className="grid grid-cols-1 gap-2">

    {/* Big */}
    <a
      href="https://wa.me/919725131748?text=I want Big Size (30-34 mangoes) "
      target="_blank"
      rel="noopener noreferrer"
      className=" border rounded-lg p-4 text-center hover:border-primary hover:shadow-md transition-all duration-200 w-full"
    >
      <p className="font-semibold text-sm">Big 🥭</p>
      <p className="text-xs text-muted-foreground">30–34 pcs</p>
      <p className="text-lg font-bold text-primary">₹1600</p>
    </a>

    {/* Medium */}
    <a
      href="https://wa.me/919725131748?text=I want Medium Size (35-39 mangoes) "
      target="_blank"
      rel="noopener noreferrer"
      className=" border-2 border-primary rounded-lg p-4 text-center shadow-md w-full scale-[1.02]"
    >
      <p className="font-semibold text-sm">Medium ⭐</p>
      <p className="text-xs text-muted-foreground">35–39 pcs</p>
      <p className="text-lg font-bold text-primary">₹1400</p>
    </a>

    {/* Small */}
    <a
      href="https://wa.me/919725131748?text=I want Small Size (40-44 mangoes) "
      target="_blank"
      rel="noopener noreferrer"
      className=" border rounded-lg p-4 text-center hover:border-primary hover:shadow-md transition-all duration-200 w-full"
    >
      <p className="font-semibold text-sm">Small 🥭</p>
      <p className="text-xs text-muted-foreground">40–44pcs</p>
      <p className="text-lg font-bold text-primary">₹1200</p>
    </a>

  </div>
</div>

<div>
  {/* Button */}
  <motion.a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-whatsapp text-base py-3 px-6"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <MessageCircle className="w-3 h-3" />
    Order on WhatsApp
  </motion.a>
  </div>  

</div>              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground text-sm">
            🥭 Fresh from Junagadh, Gujarat — The homeland of authentic Kesar mangoes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MangoVarietiesSection;
