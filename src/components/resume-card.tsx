"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  period: string;
  description?: readonly string[];
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
        <Card className="flex hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
          <div className="flex-none">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Avatar className="border-2 border-primary/20 size-12 m-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-md group-hover:shadow-lg transition-shadow">
                <AvatarImage
                  src={logoUrl}
                  alt={altText}
                  className="object-contain p-1"
                />
                <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5">
                  {altText[0]}
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
          <div className="flex-grow ml-4 items-center flex-col">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm group-hover:text-primary transition-colors">
                  {title}
                  <motion.div
                    animate={{
                      x: isExpanded ? 4 : 0,
                      rotate: isExpanded ? 90 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRightIcon
                      className={cn(
                        "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 ml-1",
                      )}
                    />
                  </motion.div>
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right font-medium">
                  {period}
                </div>
              </div>
              {subtitle && (
                <motion.div
                  className="font-sans text-xs text-muted-foreground mt-1"
                  initial={false}
                  animate={{ opacity: isExpanded ? 0.7 : 1 }}
                >
                  {subtitle}
                </motion.div>
              )}
            </CardHeader>
            {description && (
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >
                <motion.ul
                  className="mt-2 text-xs sm:text-sm list-disc list-outside ml-4 space-y-2 px-4 pb-4"
                  initial={false}
                >
                  {description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: isExpanded ? 1 : 0,
                        x: isExpanded ? 0 : -10,
                      }}
                      transition={{
                        delay: idx * 0.05,
                        duration: 0.3,
                      }}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};
