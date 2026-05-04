import { motion } from "framer-motion";
import { Leaf, Sun, Droplets, CheckCircle, Package, Truck, ArrowRight } from "lucide-react";

const journeySteps = [
  {
    id: 1,
    icon: Sun,
    title: "Freshly Picked",
    description: "Hand-picked at peak ripeness directly from our farms, ensuring zero damage.",
    visual: "🌳",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50/50",
  },
  {
    id: 2,
    icon: Leaf,
    title: "Zero Chemicals",
    description: "Traditional ripening methods without harmful chemicals, preserving authentic nutrition.",
    visual: "🥭",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50/50",
  },
  {
    id: 3,
    icon: Droplets,
    title: "Hygienic Wash",
    description: "Cleaned using food-safe processes to remove dust—only pure freshness reaches you.",
    visual: "💧",
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50/50",
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Quality Check",
    description: "Every fruit is inspected for size and sweetness. Only the best make the cut.",
    visual: "✨",
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-50/50",
  },
  {
    id: 5,
    icon: Package,
    title: "Eco-Packaging",
    description: "Packed in breathable, eco-friendly boxes that protect freshness during transit.",
    visual: "📦",
    color: "from-orange-400 to-amber-600",
    bgColor: "bg-orange-50/50",
  },
  {
    id: 6,
    icon: Truck,
    title: "Direct to Home",
    description: "Fast, safe, and fresh. Just message us on WhatsApp and enjoy the harvest.",
    visual: "🏠",
    color: "from-green-500 to-teal-500",
    bgColor: "bg-teal-50/50",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header - Mobile First */}
        <div className="text-left md:text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-mango-green font-bold tracking-widest text-xs uppercase bg-mango-green/10 px-3 py-1 rounded-full"
          >
            Our Process
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display text-mango-brown mt-4 mb-4 leading-tight">
            The Journey to <span className="text-orange-500">Your Table</span>
          </h2>
          <p className="text-mango-brown/60 text-base md:text-lg max-w-2xl md:mx-auto">
            We bridge the gap between our orchards and your home with a 6-step quality promise.
          </p>
        </div>

        {/* 2-Column Grid / 1-Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 relative">
          
          {/* Connecting Line - Mobile Only Visual */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-100 md:hidden -z-0" />

          {journeySteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative z-10 flex flex-row items-start gap-4 p-5 rounded-3xl border border-gray-100 ${step.bgColor} backdrop-blur-sm shadow-sm md:flex-col md:p-8 md:items-start md:justify-between hover:shadow-md transition-shadow`}
            >
              {/* Step Icon/Number */}
              <div className="flex-shrink-0 relative">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                  <step.icon size={24} className="md:w-8 md:h-8" />
                </div>
                <div className="absolute -top-2 -right-2 bg-white text-mango-brown text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl md:hidden">{step.visual}</span>
                  <h3 className="font-display text-lg md:text-2xl text-mango-brown font-bold leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-mango-brown/70 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Desktop Desktop Only Visual */}
              <div className="  absolute top-8 right-8 text-4xl opacity-20 grayscale">
                {step.visual}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern WhatsApp CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className=" bg-mango-brown text-white rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            

            <a 
              href="https://wa.me/919725131748" 
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl"
            >
              <span>Order via WhatsApp</span>
              <ArrowRight size={18} />
            </a>
          </div>
          
          {/* Background Abstract Shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full -ml-12 -mb-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;