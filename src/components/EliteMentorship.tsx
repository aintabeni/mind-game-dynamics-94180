import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import menteesImage from "@/assets/mentees-playing.png";

export const EliteMentorship = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const paragraphs = [
    "Training the body without training the mind is like driving a sports car with no steering wheel.",
    "With over a decade of coaching and playing experience across Europe, I have helped players from academy to professional level develop the mental side of their game.",
    "Every session combines technical drills with cognitive training to build mental clarity, decision confidence, and football IQ.",
    "You will train like the pros — clear, focused, and in control.",
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-secondary">
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
            className="order-2 lg-custom:order-1"
          >
            <img
              src={menteesImage}
              alt="Training session with mentees"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>

          <div className="order-1 lg-custom:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Built on Elite Mentorship — Refined Through Experience
            </motion.h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.15 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
