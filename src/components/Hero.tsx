import { motion } from "framer-motion";
import { ButtonColorful } from "@/components/ui/button-colorful";
import heroImage from "@/assets/patrick-playing.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
        <img
          src={heroImage}
          alt="Football player in action"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center py-8 sm:py-12 lg:py-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-accent font-semibold mb-4 sm:mb-6 lg:mb-8 uppercase tracking-wide"
          style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.5rem)" }}
        >
          PB Coaching: Football is a thinking sport, who sees the whole picture first.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-bold mb-6 sm:mb-8 lg:mb-10 leading-[1.1]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          Train Smarter. Think Faster.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(1.125rem, 2.5vw, 2rem)" }}
        >
          Unlock the hidden skill that separates the pros from everyone else. Elite-level brain
          training that sharpens your scanning, decision making, and football IQ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-6"
        >
          <div className="scale-100 lg:scale-110">
            <ButtonColorful
              label="Explore Training · Join Mentorship"
              onClick={() => scrollToSection("programmes")}
            />
          </div>
          
          <p 
            className="text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
          >
            Brain first training that sharpens scanning, decision making, and Football IQ. Designed for serious players (14–22). Proven on the pitch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
