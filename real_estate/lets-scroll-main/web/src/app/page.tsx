import ScrollWorld, { Section } from "./components/ScrollWorld";

export const metadata = {
  title: "Aetheria Residences — Premium Coastal Real Estate",
  description: "Experience a scroll-driven cinematic walkthrough of the clifftop sanctuary.",
};

const SECTIONS: Section[] = [
  {
    id: "entrance",
    label: "Entrance",
    still: "/assets/entrance.png",
    clip: "/assets/vid/entrance.mp4",
    accent: "#C5A880", // Warm bronze
    scroll: 1.5,
    linger: 0.3,
    eyebrow: "THE GATEWAY",
    title: "Where horizon meets home.",
    body: "An architectural masterpiece sculpted into the coastal cliffs of the Pacific.",
    tags: ["Coastal Clifftop", "Brutalist Stone", "Panoramic Ocean"],
  },
  {
    id: "atrium",
    label: "Great Room",
    still: "/assets/atrium.png",
    clip: "/assets/vid/atrium.mp4",
    accent: "#E6DFD5", // Warm sand
    scroll: 1.5,
    linger: 0.4,
    eyebrow: "CULTIVATED COMFORT",
    title: "Spaces that breathe.",
    body: "Expansive double-height living areas bathed in warm golden hour light.",
    tags: ["Double-Height Ceilings", "Polished Concrete", "Custom Furnishings"],
  },
  {
    id: "deck",
    label: "The Deck",
    still: "/assets/deck.png",
    clip: "/assets/vid/deck.mp4",
    accent: "#C5A880", // Warm bronze
    scroll: 1.5,
    linger: 0.4,
    eyebrow: "INFINITE SERENITY",
    title: "Boundaries dissolved.",
    body: "An infinity-edge pool blending into the endless blue of the ocean.",
    tags: ["Infinity Pool", "Sunken Lounge", "Hardwood Decking"],
  },
  {
    id: "suite",
    label: "Master Suite",
    still: "/assets/suite.png",
    clip: "/assets/vid/suite.mp4",
    accent: "#E6DFD5", // Warm sand
    scroll: 1.8,
    linger: 0.5,
    eyebrow: "YOUR SANCTUARY",
    title: "Wake up to the ocean.",
    body: "Wake up to the soothing sound of waves and 180-degree coastal vistas.",
    tags: ["Ocean Balcony", "Oak Panel Walls", "Smart Lighting"],
    cta: {
      primary: { label: "Schedule Tour", href: "#tour" },
      secondary: { label: "View Brochure", href: "#brochure" },
    },
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollWorld brandName="AETHERIA" sections={SECTIONS} />
    </main>
  );
}
