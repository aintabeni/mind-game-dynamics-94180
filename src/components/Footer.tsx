import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, Youtube } from "lucide-react";
import { TikTokIcon } from "@/components/ui/tiktok-icon";

export const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const links = [
    { name: "Programmes", href: "#programmes" },
    { name: "About", href: "#who-am-i" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/pb_coaching.iq/", label: "Instagram" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@pb_coaching.iq", label: "TikTok" },
    { icon: Youtube, href: "https://www.youtube.com/@pb_coaching_iq", label: "YouTube" },
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-background border-t border-border py-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">PB Coaching</h3>
          <p className="text-muted-foreground">© Patrick Bergmann, 2025. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-muted-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};
