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
    "Build a field map before the ball arrives",
    "Anticipate movements using pre cues",
    "Make fast, clean one touch decisions",
    "Scan automatically, without forcing it",
  ];

  const trainingPoints = [
    "Awareness driven drills",
    "Decision making games (small space → full pitch)",
    "Match breakdowns with actionable, timestamped feedback",
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-card">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg-custom:grid-cols-2 gap-12 items-center">
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
              PB Coaching Brain First Methodology™
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              It's a system created by combining the best ideas I've learned from elite mentors, scouts, analysts, and coaches throughout my career, and shaping them into something players can actually use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-6"
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

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mb-6"
            >
              <p className="text-lg text-foreground mb-4 font-semibold">You will train with:</p>
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

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="text-lg text-foreground mb-8 leading-relaxed"
            >
              <p className="font-semibold mb-2">End result:</p>
              <p className="text-muted-foreground">Football slows down. Your decisions speed up. And suddenly, everything makes sense.</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <ButtonColorful
            label="Explore Training Options"
            onClick={() => scrollToSection("programmes")}
            className="text-lg px-10 py-6 h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
