import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const programmes = [
  {
    title: "1:1 Mentorship",
    subtitle: "Exclusive Personal Coaching",
    badge: "Only 5 spots available each month",
    description:
      "For players who want to fast track their progress and get detailed, professional feedback.",
    intro:
      "You will train directly with Patrick and receive hands on guidance on how to read the game, position smarter, and process the field faster.",
    features: [
      "Personalised video breakdowns of your matches",
      "Weekly feedback and corrections",
      "A custom scanning plan built for your position",
      "Private access for support and accountability",
      "Full access to the 8-Week Scanning Course",
    ],
    cta: "Apply to get personal help",
    link: "https://form.jotform.com/243136283502349",
    footer:
      "Only 5 players accepted per month. Every month, a few players gain this edge. Once these 5 spots are taken, the rest keep guessing.",
  },
  {
    title: "8-Week Scanning Mentorship",
    subtitle: "The full training system trusted by ambitious players across Europe",
    price: "€199",
    originalPrice: "was €397",
    description: "In 8 weeks, you will go from ball watching to controlling the rhythm of every match.",
    intro: "Inside, you will get:",
    features: [
      "Step by step progressions (no ball → with ball → under pressure)",
      "120+ exclusive scanning drills",
      "Test days to track awareness and reaction speed",
      "Mindset training to stay calm under pressure",
      "Game footage breakdowns from top professionals",
      "Weekly challenges for consistency and accountability",
    ],
    cta: "Join",
    link: "https://whop.com/pb-coaching/8-week-scanning-program/",
    footer:
      "Only 12 spots left this round. Once they are filled, enrolment closes. Every match you play without this skill is another where you fall a step behind.",
  },
  {
    title: "Master Your Scanning eBook",
    subtitle: "Start building your scanning habits today",
    price: "€57",
    originalPrice: "was €97",
    description:
      "If you want to start solo, this eBook gives you everything you need to begin improving your awareness right away.",
    intro: "Inside, you will find:",
    features: [
      "The science behind scanning and decision making",
      "Core scanning drills for every position",
      "Setup and spacing guides",
      "Access to a special app for reaction training",
      "Tools to assess and track your progress",
    ],
    cta: "Get the eBook",
    link: "https://whop.com/pb-coaching/scanning-mastery-playbook/",
    footer: null,
  },
];

export const Programmes = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Hover animation
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <section id="programmes" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">The Programmes</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {programmes.map((programme, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <Card className="h-full flex flex-col border-2 border-accent/30 hover:border-accent transition-colors duration-300 bg-gradient-to-b from-card to-secondary">
                <CardHeader>
                  {programme.badge && (
                    <div className="bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block w-fit">
                      {programme.badge}
                    </div>
                  )}
                  <CardTitle className="text-2xl mb-2">{programme.title}</CardTitle>
                  {programme.price && (
                    <div className="text-3xl font-bold text-accent mb-2">
                      {programme.price}{" "}
                      <span className="text-sm text-muted-foreground line-through">
                        {programme.originalPrice}
                      </span>
                    </div>
                  )}
                  <CardDescription className="text-base">{programme.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{programme.description}</p>
                  <p className="text-muted-foreground mb-3 font-semibold">{programme.intro}</p>
                  <ul className="space-y-2 mb-4">
                    {programme.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="text-accent mr-2 font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {programme.footer && (
                    <p className="text-sm text-muted-foreground italic mt-4 border-t border-border pt-4">
                      {programme.footer}
                    </p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full"
                    onClick={() => window.open(programme.link, "_blank")}
                  >
                    {programme.cta}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
