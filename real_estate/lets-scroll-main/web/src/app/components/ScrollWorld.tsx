"use client";

import React, { useEffect, useRef } from "react";
import { mountLetsScroll } from "../scrub-engine";

export interface Section {
  id: string;
  label: string;
  still: string;
  stillMobile?: string;
  clip?: string;
  clipMobile?: string;
  accent?: string;
  scroll?: number;
  linger?: number;
  eyebrow?: string;
  title?: string;
  body?: string;
  tags?: string[];
  cta?: {
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
}

interface ScrollWorldProps {
  brandName: string;
  sections: Section[];
}

export default function ScrollWorld({ brandName, sections }: ScrollWorldProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear the container to prevent duplicate elements on React double-mount (StrictMode/HMR)
    containerRef.current.innerHTML = "";

    mountLetsScroll(containerRef.current, {
      brand: { name: brandName, href: "#top" },
      diveScroll: 1.3,
      connScroll: 0.9,
      hint: "scroll to fly in",
      nav: true,
      atmosphere: true,
      sections: sections,
    });
  }, [brandName, sections]);

  return (
    <div ref={containerRef} id="world" className="relative w-full" />
  );
}
