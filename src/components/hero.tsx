"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { personalData } from "@/data/data";

interface HeroProps {
  delay?: number;
}

export function Hero({ delay = 0 }: HeroProps) {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-6 flex flex-col sm:flex-row sm:justify-between sm:items-start">
          <div className="flex-col flex flex-1 space-y-4">
            <BlurFadeText
              delay={delay}
              className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent"
              yOffset={8}
              text={`Hi, I'm ${personalData.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] text-lg md:text-xl text-muted-foreground"
              delay={delay + 0.1}
              text={personalData.description}
            />
            <BlurFade delay={delay + 0.2}>
              <p className="text-sm md:text-base text-muted-foreground mt-2 leading-relaxed">
                {personalData.summary.replace(/\*\*/g, "")}
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={delay + 0.15}>
            <Avatar className="size-32 sm:size-36 border-2 border-primary/20 shadow-lg">
              <AvatarImage
                alt={personalData.name}
                src={personalData.avatarUrl}
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold">
                {personalData.initials}
              </AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
