"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  link,
  image,
  video,
  links,
  className,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.div 
      ref={ref} 
      className="group mb-3 sm:mb-8 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        className="bg-gradient-to-br from-gray-50 to-gray-100 max-w-[58rem] border border-black/5 rounded-xl overflow-hidden dark:text-white dark:from-white/5 dark:to-white/10 cursor-pointer relative group"
        onClick={handleClick}
        whileHover={{ 
          y: -8,
          scale: 1.01,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl" />
        <div className="flex flex-col lg:flex-row relative z-10">
          <div className="p-6 lg:w-1/2 flex flex-col h-full">
            <motion.h3 
              className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>

            <Markdown className="leading-relaxed text-gray-700 dark:text-white/70 mb-3 prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
              {description}
            </Markdown>

            <div className="flex">
              {link && (
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="mr-2 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <BiLinkExternal className="mr-1 w-4 h-4" /> Live
                  </a>
                </Button>
              )}

              {links &&
                links.length > 0 &&
                links.map((linkItem, idx) => {
                  if (
                    linkItem.type.toLowerCase().includes("demo") ||
                    linkItem.type.toLowerCase().includes("video")
                  ) {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="default"
                        size="sm"
                        className="mr-2 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillYoutube className="mr-1 w-4 h-4" /> Demo
                        </a>
                      </Button>
                    );
                  } else if (linkItem.type.toLowerCase().includes("github")) {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="outline"
                        size="sm"
                        className="mr-2 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillGithub className="mr-1 w-4 h-4 opacity-70" />{" "}
                          <span className="opacity-70">GitHub</span>
                        </a>
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="default"
                        size="sm"
                        className="mr-2 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BiLinkExternal className="mr-1 w-4 h-4" />{" "}
                          {linkItem.type}
                        </a>
                      </Button>
                    );
                  }
                })}
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:items-end lg:justify-end relative overflow-hidden">
            {image && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-64 lg:h-auto lg:max-w-md"
              >
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={300}
                  quality={95}
                  className="w-full h-full shadow-2xl object-cover rounded-r-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-100/50 dark:to-white/5" />
              </motion.div>
            )}

            {video && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-64 lg:h-auto lg:max-w-md"
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full rounded-r-xl shadow-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-100/50 dark:to-white/5 rounded-r-xl" />
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
