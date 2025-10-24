import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "PB Coaching helped me to think faster on the pitch.",
    author: "Ahmed Ibrahim",
  },
  {
    quote: "PB Coaching improved my performance instantly.",
    author: "Henrik Hatlen Osen, Professional Player",
  },
  {
    quote: "PB Coaching developed the winning mindset and decision making that changed my son's game.",
    author: "Marianne",
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + index * 0.15 }}
            >
              <Card className="h-full bg-card border-accent/20 hover:border-accent transition-colors duration-300">
                <CardContent className="p-6">
                  <p className="text-lg text-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-accent font-semibold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
