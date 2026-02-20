"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { personalData } from "@/data/data";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface AboutProps {
  delay?: number;
}

export function About({ delay = 0 }: AboutProps) {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Anant_Yadav_CV_2026.pdf";
    link.download = "Anant_Kumar_Yadav_CV_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      <BlurFade delay={delay + 0.02}>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.03, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {/* Glow effect - greenish with less opacity */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

            <Button
              onClick={handleDownloadCV}
              className="group relative flex items-center gap-3 bg-gradient-to-r from-emerald-500/80 via-green-600/80 to-teal-600/80 hover:from-emerald-400/90 hover:via-green-500/90 hover:to-teal-500/90 text-white px-8 py-4 rounded-xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 border-2 border-white/20 dark:border-white/15 font-semibold text-base backdrop-blur-md"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FileText className="w-5 h-5 group-hover:scale-110 transition-transform drop-shadow-sm" />
              </motion.div>
              <span className="font-semibold tracking-wide drop-shadow-sm">
                Download My CV
              </span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform drop-shadow-sm" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </BlurFade>
    </section>
  );
}
