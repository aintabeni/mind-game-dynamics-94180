import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SecretGenius = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const paragraphs = [
    "Think De Bruyne. Messi. Modrić.\nThey don't guess — they scan.\nThey collect information before the ball arrives, process faster, and decide cleaner.",
    "This isn't luck — it's a trainable skill called Scanning.",
    "When you train your brain:\n• Your first touch is already a second touch in your head.\n• Pressure feels slower.\n• Options appear before the ball does.",
    "That's the difference between reacting and reading the game.",
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-secondary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-left"
        >
          How Top Players Stay One Step Ahead
        </motion.h2>

        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
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
      </motion.div>
    </section>
  );
};
