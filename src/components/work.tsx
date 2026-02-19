"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { experiencesData } from "@/data/data";

interface WorkProps {
  delay?: number;
}

export function Work({ delay = 0 }: WorkProps) {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay}>
          <div className="flex flex-col items-center justify-center space-y-2 mb-6">
            <h2 className="text-3xl font-bold tracking-tighter">Work Experience</h2>
            <p className="text-sm text-muted-foreground">Building scalable backend systems & AI solutions</p>
          </div>
        </BlurFade>
        {experiencesData.map((work, id) => (
          <BlurFade key={work.company} delay={delay + 0.01 + id * 0.05}>
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
