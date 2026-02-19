"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { skillsData } from "@/data/data";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface SkillsProps {
  delay?: number;
}

export function Skills({ delay = 0 }: SkillsProps) {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>(
    skillsData[0]?.category || "",
  );

  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={delay}>
          <div className="flex flex-col items-center justify-center space-y-2 text-center mb-6">
            <h2 className="text-3xl font-bold tracking-tighter">My Skills</h2>
            <p className="text-sm text-muted-foreground">Technologies & tools I work with</p>
          </div>
        </BlurFade>

        <BlurFade delay={delay + 0.01}>
          <div className="flex flex-wrap justify-center gap-3">
            {skillsData.map((group) => (
              <Button
                key={group.category}
                variant={
                  selectedSkillCategory === group.category
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => setSelectedSkillCategory(group.category)}
                className="px-4 py-2"
              >
                {group.category}
              </Button>
            ))}
          </div>
        </BlurFade>

        <motion.div
          key={selectedSkillCategory}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl">
            {skillsData
              .find((group) => group.category === selectedSkillCategory)
              ?.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: skillIndex * 0.03,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 w-full h-24 sm:h-28 group relative overflow-hidden"
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="text-xs text-center font-semibold text-gray-800 dark:text-gray-200 leading-tight mb-2 sm:mb-3 flex-1 flex items-center justify-center group-hover:text-primary transition-colors relative z-10">
                    {skill.name}
                  </span>
                  {"icon" in skill && skill.icon ? (
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10"
                    >
                      <Icon
                        icon={skill.icon}
                        className="text-3xl sm:text-4xl mb-1 sm:mb-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))",
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      />
                    </motion.div>
                  ) : (
                    <div className="w-10 h-10 bg-primary/10 rounded mb-1 sm:mb-2 flex-shrink-0" />
                  )}
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
