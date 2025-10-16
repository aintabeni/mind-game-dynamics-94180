import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
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
    "Anticipate movements before they happen",
    "Recognize patterns in real time",
    "Make faster, clearer decisions under pressure",
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
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              The System That Trains Your Brain Like a Pro
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
            >
              At PB Coaching, we built a system that trains this hidden skill — the same way
              professionals develop it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
            >
              It is called the <span className="text-accent font-semibold">Field Map Framework</span>,
              a brain-first training system that sharpens your awareness, scanning, and split-second
              decision making.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-8"
            >
              <p className="text-lg text-foreground mb-4 font-semibold">You will learn to:</p>
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

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              When you master scanning, you stop reacting to the game and start controlling it.
              You play with confidence, calm, and total clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                variant="cta"
                size="lg"
                onClick={() => scrollToSection("programmes")}
                className="text-lg"
              >
                Explore Training Options
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
        </div>
      </motion.div>
    </section>
  );
};
