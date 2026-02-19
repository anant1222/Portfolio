"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { educationData } from "@/data/data";

interface EducationProps {
  delay?: number;
}

export function Education({ delay = 0 }: EducationProps) {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay}>
          <div className="flex flex-col items-center justify-center space-y-2 mb-6">
            <h2 className="text-3xl font-bold tracking-tighter">Education</h2>
            <p className="text-sm text-muted-foreground">Continuous learning & growth</p>
          </div>
        </BlurFade>
        {educationData.map((education, id) => (
          <BlurFade key={education.school} delay={delay + 0.01 + id * 0.05}>
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
              description={education.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
