import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import ahmedImage from "@/assets/ahmed-ibrahim.png";
import henrikImage from "@/assets/henrik-hatlen.jpg";
import marianneImage from "@/assets/marianne-son.jpg";

const testimonials = [
  {
    quote: "PB Coaching helped me to think faster on the pitch.",
    name: "Ahmed Ibrahim",
    designation: "Player",
    src: ahmedImage,
  },
  {
    quote: "PB Coaching improved my performance instantly.",
    name: "Henrik Hatlen Osen",
    designation: "Professional Player",
    src: henrikImage,
  },
  {
    quote: "PB Coaching developed the winning mindset and decision making that changed my son's game.",
    name: "Marianne",
    designation: "Parent",
    src: marianneImage,
  },
];

export const Testimonials = () => {
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

  return (
    <section id="testimonials" ref={ref} className="py-24 px-6 bg-secondary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Real Players. Real Results.
        </motion.h2>

        <div className="flex items-center justify-center mb-12">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#f7f7ff",
              designation: "#e1e1e1",
              testimony: "#f1f1f7",
              arrowBackground: "hsl(45, 90%, 55%)",
              arrowForeground: "#141414",
              arrowHoverBackground: "#f7f7ff",
            }}
            fontSizes={{
              name: "28px",
              designation: "18px",
              quote: "20px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <ButtonColorful
            label="Join the Mentorship"
            onClick={() => scrollToSection("programmes")}
            className="text-lg px-10 py-6 h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
