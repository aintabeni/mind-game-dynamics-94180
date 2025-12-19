import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import ahmedImage from "@/assets/ahmed-ibrahim.png";
import henrikImage from "@/assets/henrik-hatlen.jpg";
import eliasImage from "@/assets/elias-training.png";
import erikAkselImage from "@/assets/erik-aksel.png";
import matheoImage from "@/assets/matheo.png";
import filipImage from "@/assets/filip.png";
import aryImage from "@/assets/ary.png";
import emilieHannahImage from "@/assets/emilie-hannah.png";
import anmarImage from "@/assets/anmar.png";
import phillipImage from "@/assets/phillip.png";
import muhammedImage from "@/assets/muhammed.png";

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
    quote: "My son went from being hesitant on the ball to confident and decisive. The mental training was a game-changer for his development.",
    name: "King",
    designation: "Parent",
    src: erikAkselImage,
  },
  {
    quote: "The scanning drills completely changed how I read the game. I see passes before they happen now.",
    name: "Elias",
    designation: "Academy Player",
    src: eliasImage,
  },
  {
    quote: "After just a few sessions, my decision-making under pressure improved dramatically. I feel two steps ahead of defenders now.",
    name: "Matheo",
    designation: "Academy Player",
    src: matheoImage,
  },
  {
    quote: "Patrick taught me how to scan effectively. Now I always know where my teammates and opponents are before I receive the ball.",
    name: "Filip",
    designation: "Youth Player",
    src: filipImage,
  },
  {
    quote: "The Field Map Framework changed everything. I went from losing the ball under pressure to creating chances every game.",
    name: "Ary",
    designation: "Academy Player",
    src: aryImage,
  },
  {
    quote: "Training together with PB Coaching pushed us both to new levels. We understand the game so much better now.",
    name: "Emilie & Hannah",
    designation: "Academy Players",
    src: emilieHannahImage,
  },
  {
    quote: "I used to panic when defenders closed in. Now I stay calm because I already know my options before the ball arrives.",
    name: "Anmar",
    designation: "Youth Player",
    src: anmarImage,
  },
  {
    quote: "The cognitive training gave me an edge I never had before. My coaches noticed the difference within weeks.",
    name: "Phillip",
    designation: "Academy Player",
    src: phillipImage,
  },
  {
    quote: "Learning to scan properly made me see the game differently. I create more chances and make smarter decisions every match.",
    name: "Muhammed",
    designation: "Youth Player",
    src: muhammedImage,
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
