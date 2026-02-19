"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { personalData } from "@/data/data";
import Markdown from "react-markdown";

interface AboutProps {
  delay?: number;
}

export function About({ delay = 0 }: AboutProps) {
  return (
    <section id="about">
      <BlurFade delay={delay}>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
      </BlurFade>
      <BlurFade delay={delay + 0.01}>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <Markdown className="text-pretty font-sans text-base text-muted-foreground leading-relaxed">
            {personalData.summary}
          </Markdown>
        </div>
      </BlurFade>
    </section>
  );
}
