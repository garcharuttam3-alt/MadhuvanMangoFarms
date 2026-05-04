import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-earth text-cream-dark">
      {/* Main Footer Content */}
      <div className="section-padding pb-8">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={logo}
                alt="Madhuvan Mango Farm"
                className="h-20 w-auto mb-6 brightness-110"
              />
              <p className="text-cream-dark/80 text-sm leading-relaxed mb-6">
                From our farm to your home — bringing the authentic taste of
                naturally ripened, chemical-free mangoes to your family.
              </p>
              <motion.a
                href="https://wa.me/919725131748?text=Hi%2C%20I%20want%20to%20order%20fresh%20mangoes!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </motion.a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-cream font-heading font-bold text-lg mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Our Mangoes", href: "#varieties" },
                  { label: "Why Choose Us", href: "#why-us" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "About Us", href: "#about" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-cream-dark/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-cream font-heading font-bold text-lg mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream text-sm font-medium">Phone / WhatsApp</p>
                    <a href="tel:+919725131748" className="text-cream-dark/70 text-sm hover:text-primary transition-colors block">
                      +91 97251 31748
                    </a>
                    <a href="tel:+919726517095" className="text-cream-dark/70 text-sm hover:text-primary transition-colors block">
                      +91 97265 17095
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream text-sm font-medium">Mail</p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=madhuvanfarm01@gmail.com" className="text-cream-dark/70 text-sm hover:text-primary transition-colors">
                      madhuvanfarm01@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream text-sm font-medium">Location</p>
                    <p className="text-cream-dark/70 text-sm">
                      At bamanasa gir, Ta.talala<br /> Gujarat , India - 362140
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream text-sm font-medium">Season</p>
                    <p className="text-cream-dark/70 text-sm">
                      April - August<br />
                      <span className="text-primary text-xs">Orders Open Now!</span>
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Seasonal Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-cream font-heading font-bold text-lg mb-6">
                This Season
              </h3>
              <div className="bg-earth-light/30 rounded-2xl p-6 border border-primary/20">
                <p className="text-cream-dark/90 text-sm mb-4">
                  🥭 <strong className="text-primary">Mango Season 2026</strong> is here!
                  Pre-book your favorite varieties now for guaranteed freshness.
                </p>
                <div className="space-y-2 text-xs text-cream-dark/70">
                  <p>✓ Kesar: May - July</p>
                </div>
              </div>
            </motion.div>

            {/* Follow Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-cream font-heading font-bold text-lg mb-6">
                Follow Us
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Facebook,
                    label: "Facebook",
                    href: "https://www.facebook.com/people/Madhuvan-Mango-Farm/pfbid0eWTexzXUbLLbhrEcxAdUHtTHZs4NEkruc2qgFrUSmUyLTtYFXQHYgqKWVpGNXdrPl/",
                    color: "text-blue-500",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    href: "https://www.instagram.com/madhuvanmango/",
                    color: "text-pink-500",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/madhuvan-mango-farm",
                    color: "text-sky-600",
                  },
                ].map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex items-center gap-3 ${color} transition-opacity duration-200 hover:opacity-75`}
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="text-cream-dark/80 text-sm">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <MapPin className=" w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="ml-1 text-cream text-sm font-medium">Location</p>
              <iframe className="h-40  mt-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8209760452705!2d70.70438237922706!3d21.039848030622252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2c7a6290cabe5%3A0x7b53405ebd5dd54!2sMadhuvan%20mango%20farm!5e0!3m2!1sen!2sin!4v1769059018485!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>
            </div>
          </li>
        </ul>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-cream-dark/10">
        <div className="container-custom mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream-dark/60 text-sm text-center md:text-left">
              © 2026 Madhuvan Mango Farm. All rights reserved.
            </p>
            <p className="text-cream-dark/60 text-sm italic font-heading">
              "From our farm to your home" 🥭
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
