import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RainbowButton } from "@/components/ui/rainbow-button";

export const FinalCTA = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const paragraphs = [
    "You can keep training harder.\nOr you can start training smarter.",
    "The players who think faster will always play better.\nThe next move is yours.",
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-secondary to-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Take Control of the Game
        </motion.h2>

        <div className="space-y-6 text-lg md:text-xl text-muted-foreground mb-10">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.15 }}
              className="whitespace-pre-line"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <RainbowButton
            onClick={() => scrollToSection("programmes")}
            className="text-lg px-10 py-6 h-auto"
          >
            Start Your Training
          </RainbowButton>
        </motion.div>
      </motion.div>
    </section>
  );
};
