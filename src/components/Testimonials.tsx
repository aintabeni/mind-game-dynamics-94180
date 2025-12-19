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

// Feedback screenshots
import feedbackGentina from "@/assets/feedback-gentina.jpg";
import feedbackMsg1 from "@/assets/feedback-msg-1.jpg";
import feedbackMsg2 from "@/assets/feedback-msg-2.jpg";
import feedbackMsg3 from "@/assets/feedback-msg-3.jpg";
import feedbackMsg4 from "@/assets/feedback-msg-4.jpg";
import feedbackMsg5 from "@/assets/feedback-msg-5.jpg";
import feedbackMsg6 from "@/assets/feedback-msg-6.jpg";
import feedbackMsg7 from "@/assets/feedback-msg-7.png";

const feedbackScreenshots = [
  feedbackGentina,
  feedbackMsg1,
  feedbackMsg2,
  feedbackMsg3,
  feedbackMsg4,
  feedbackMsg5,
  feedbackMsg6,
  feedbackMsg7,
];

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

        {/* Feedback Screenshots Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-muted-foreground">
            Messages from Parents & Players
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {feedbackScreenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={screenshot}
                  alt={`Feedback message ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
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
