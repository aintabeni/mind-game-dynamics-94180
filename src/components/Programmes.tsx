import { ButtonColorful } from "@/components/ui/button-colorful";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

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
    ],
    cta: "Get the eBook",
    link: "https://whop.com/pb-coaching/scanning-mastery-playbook/",
    footer: null,
  },
];

export const Programmes = () => {
  return (
    <section id="programmes" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">The Programmes</h2>

        <div className="grid lg-custom:grid-cols-3 gap-8">
          {programmes.map((programme, index) => (
            <div key={index} className="min-h-[28rem]">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                  {programme.badge && (
                    <div className="bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block w-fit">
                      {programme.badge}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{programme.title}</h3>
                  
                  {programme.price && (
                    <div className="text-3xl font-bold text-accent mb-2">
                      {programme.price}{" "}
                      <span className="text-sm text-muted-foreground line-through">
                        {programme.originalPrice}
                      </span>
                    </div>
                  )}
                  
                  <p className="text-base text-muted-foreground mb-4">{programme.subtitle}</p>
                  
                  <div className="flex-grow">
                    <p className="text-muted-foreground mb-4">{programme.description}</p>
                    <p className="text-muted-foreground mb-3 font-semibold">{programme.intro}</p>
                    <ul className="space-y-2 mb-4">
                      {programme.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground text-sm">
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
                  </div>
                  
                  <div className="mt-6">
                    <ButtonColorful
                      label={programme.cta}
                      className="w-full h-auto px-6 py-3"
                      onClick={() => window.open(programme.link, "_blank")}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
