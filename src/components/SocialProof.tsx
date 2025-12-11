import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import feedback1 from "@/assets/feedback-1.jpg";
import feedback2 from "@/assets/feedback-2.jpg";
import feedback3 from "@/assets/feedback-3.png";
import feedback4 from "@/assets/feedback-4.jpg";
import feedback5 from "@/assets/feedback-5.jpg";
import feedback6 from "@/assets/feedback-6.jpg";
import feedback7 from "@/assets/feedback-7.jpg";
import feedback8 from "@/assets/feedback-8.jpg";
import feedback9 from "@/assets/feedback-9.png";
import feedback10 from "@/assets/feedback-10.jpg";
import feedback11 from "@/assets/feedback-11.jpg";
import feedback12 from "@/assets/feedback-12.jpg";
import feedback13 from "@/assets/feedback-13.jpg";

const feedbackImages = [
  { src: feedback11, alt: "Josh testimonial about Patrick training his son Phill during pandemic" },
  { src: feedback1, alt: "Player feedback about decision making improvement" },
  { src: feedback2, alt: "Player celebrating success from training sessions" },
  { src: feedback3, alt: "Parent feedback about player performance" },
  { src: feedback12, alt: "Jess testimonial about Patrick mentoring Connor" },
  { src: feedback4, alt: "Coach feedback about player debut" },
  { src: feedback5, alt: "Feedback about content quality" },
  { src: feedback6, alt: "Parent sharing match performance stats" },
  { src: feedback13, alt: "Thelma testimonial about Jonas transformation in Norwegian" },
  { src: feedback7, alt: "Match performance update with goals scored" },
  { src: feedback8, alt: "Comeback performance with 8 goals" },
  { src: feedback9, alt: "Henrik Hatlen Osen professional player testimonial" },
  { src: feedback10, alt: "Coach feedback on excellent game performance" },
];

export const SocialProof = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          What People Are Saying
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Real messages from players, parents, and coaches about their experience with PB Coaching
        </motion.p>

        <div className="columns-1 min-[640px]:columns-3 gap-4 space-y-4">
          {feedbackImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
