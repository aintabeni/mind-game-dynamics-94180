import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const HiddenSkill = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const paragraphs = [
    "Most players believe football is all about technique.\nHow clean your touch looks.\nHow fast you can run.\nHow powerful your shot feels.",
    "But that is only half the game.",
    "Because the truth is, the best players in the world are not always faster or stronger.\nThey simply see the game before anyone else.",
    "They do not chase the ball. They control it.\nThey do not react. They already know.",
    "That is what makes football look effortless for the elite.",
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-card">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          The Hidden Skill That Separates the Pros From Everyone Else
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
