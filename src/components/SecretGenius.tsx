import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SecretGenius = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const paragraphs = [
    "Ever wondered how players like De Bruyne, Messi, or Modrić always seem to make the perfect pass before the space even exists?",
    "It is not magic. It is not luck.\nIt is something far more powerful.",
    "It is called Scanning.",
    "They constantly read the field, collect information, and predict what comes next before the ball even arrives.\nThey train their brain to process the game like a map.",
    "By the time they receive the ball, they already know what to do.",
    "That is why they look calm when others panic.\nWhy their movements feel effortless.\nWhy they always seem one step ahead.",
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
