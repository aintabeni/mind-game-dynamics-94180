import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import patrickHeadshot from "@/assets/patrick-headshot.jpg";

export const WhoAmI = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const paragraphs = [
    "My name is Patrick Bergmann, and I am the founder of PB Coaching.",
    "I have spent more than a decade coaching and playing across Europe, helping players of all levels develop their football IQ, awareness, and decision-making skills.",
    "My mission is simple: to teach players how to train their mind the same way they train their body.",
    "I hold UEFA coaching licences and have mentored youth and professional players worldwide. Every concept inside PB Coaching has been tested in real academies and competitive matches, not theory, but what works under pressure.",
    "If you are serious about playing with clarity, confidence, and control, I would be honored to help you think faster and play smarter.",
  ];

  return (
    <section id="who-am-i" ref={ref} className="py-24 px-6 bg-card">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Meet Patrick Bergmann
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex justify-center"
          >
            <img
              src={patrickHeadshot}
              alt="Patrick Bergmann"
              className="rounded-lg shadow-2xl w-full max-w-md"
            />
          </motion.div>

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
      </motion.div>
    </section>
  );
};
