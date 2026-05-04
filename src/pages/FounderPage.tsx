import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import founder1 from "@/assets/founder1.jpeg";
import founder2 from "@/assets/founder2.jpeg";
import founder3 from "@/assets/founder3.jpeg";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const founders = [
  {
    name: "Harsukhbhai Shira",
    role: "Founder",
    image: founder1,
    desc: "A visionary leader with years of experience, driving innovation and strategic growth.",
  },
  {
    name: "Shitalben Shira",
    role: "Co-Founder",
    image: founder2,
    desc: "Focused on operations and excellence, ensuring quality and consistency in every step.",
  },
  {
    name: "Harsh Shira",
    role: "Co-Founder",
    image: founder3,
    desc: "Young and dynamic, bringing fresh ideas, creativity, and digital transformation.",
  },
];

const FounderPage = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen">

      <Header />

      {/* ABOUT */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-10">
        <AboutSection />
      </section>

      {/* HEADING */}
      <div className="text-center mt-16 mb-14 px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900">
          Meet Our Founders
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          The minds behind our journey, combining experience, leadership,
          and innovation to build something meaningful.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-20 pb-20">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-500"
          >

            {/* IMAGE SMALL + FLOAT */}
            <div className="flex justify-center -mt-16 mb-4">
              <div className="relative">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg 
                  group-hover:scale-110 transition duration-500"
                />

                {/* glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
              </div>
            </div>

            {/* TEXT */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                {founder.name}
              </h2>

              <p className="text-sm text-purple-600 font-medium mt-1">
                {founder.role}
              </p>

              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                {founder.desc}
              </p>
            </div>

            {/* HOVER LINE EFFECT */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>

          </motion.div>
          
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FounderPage;