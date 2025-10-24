import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ButtonColorful } from "@/components/ui/button-colorful";
import mentorImage from "@/assets/patrick-with-mentor.jpg";

export const FieldMapFramework = () => {
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

  const listItems = [
    "Build a real field map before receiving",
    "Use pre cues to anticipate movement",
    "Make one touch decisions under pressure",
    "Turn scanning into a habit you can't switch off",
  ];

  const trainingPoints = [
    "Micro drills that force information checks (not circus tricks)",
    "Decision games that scale from garden to full pitch",
    "Match clips + timestamped feedback so it sticks on game day",
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-card">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative"
          >
            <img
              src={mentorImage}
              alt="Patrick with mentor"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              The Field Map Framework™
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Our brain first system used with academy and aspiring pro players.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-6"
            >
              <p className="text-lg text-foreground mb-4 font-semibold">You'll learn to:</p>
              <ul className="space-y-3">
                {listItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 + index * 0.15 }}
                    className="flex items-start text-muted-foreground text-lg"
                  >
                    <span className="text-accent mr-3 font-bold">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mb-6"
            >
              <p className="text-lg text-foreground mb-4 font-semibold">You'll train with:</p>
              <ul className="space-y-3">
                {trainingPoints.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.65 + index * 0.15 }}
                    className="flex items-start text-muted-foreground text-lg"
                  >
                    <span className="text-accent mr-3 font-bold">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="text-lg text-foreground mb-8 leading-relaxed font-semibold"
            >
              Result: you stop reacting to football, you control it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ButtonColorful
                label="Explore Training Options"
                onClick={() => scrollToSection("programmes")}
                className="text-lg px-10 py-6 h-auto"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
