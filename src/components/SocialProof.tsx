import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
import feedback14 from "@/assets/feedback-14.png";
import feedback15 from "@/assets/feedback-15.png";
import feedbackElias from "@/assets/feedback-elias.png";

const feedbackImages = [
  { src: feedback11, alt: "Josh testimonial about Patrick training his son Phill during pandemic" },
  { src: feedback1, alt: "Player feedback about decision making improvement" },
  { src: feedback4, alt: "Coach feedback about player debut" },
  { src: feedback12, alt: "Jess testimonial about Patrick mentoring Connor" },
  { src: feedback2, alt: "Player celebrating success from training sessions" },
  { src: feedback5, alt: "Feedback about content quality" },
  { src: feedback13, alt: "Thelma testimonial about Jonas transformation in Norwegian" },
  { src: feedback3, alt: "Parent feedback about player performance" },
  { src: feedback6, alt: "Parent sharing match performance stats" },
  { src: feedback14, alt: "Tournament win celebration with 3 games won" },
  { src: feedback7, alt: "Match performance update with goals scored" },
  { src: feedback8, alt: "Comeback performance with 8 goals" },
  { src: feedback15, alt: "Narhan Roberts sharing goal scored in recent match" },
  { src: feedback9, alt: "Henrik Hatlen Osen professional player testimonial" },
  { src: feedback10, alt: "Coach feedback on excellent game performance" },
  { src: feedbackElias, alt: "Elias training session - developing elite scanning and decision-making skills on the pitch" },
];

const INITIAL_COUNT = 6;

export const SocialProof = () => {
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const visibleImages = showAll ? feedbackImages : feedbackImages.slice(0, INITIAL_COUNT);

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
          {visibleImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="break-inside-avoid overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {!showAll && feedbackImages.length > INITIAL_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="group"
            >
              Load More
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
