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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl text-accent font-semibold mb-3 sm:mb-4 uppercase tracking-wide"
        >
          PB Coaching: Football is a thinking sport, who sees the whole picture first.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] xl:text-[12rem] font-bold mb-4 sm:mb-6 leading-tight"
        >
          Train Smarter. Think Faster.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Unlock the hidden skill that separates the pros from everyone else. Elite-level brain
          training that sharpens your scanning, decision making, and football IQ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <ButtonColorful
            label="Explore Training · Join Mentorship"
            onClick={() => scrollToSection("programmes")}
          />
          
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Brain first training that sharpens scanning, decision making, and Football IQ. Designed for serious players (14–22). Proven on the pitch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
