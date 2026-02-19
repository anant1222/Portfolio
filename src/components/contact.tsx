"use client";

import { useState, useRef } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { SubmitButton } from "@/components/SubmitButton";
import { sendEmailViaEmailJS } from "@/lib/emailjs";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

interface ContactProps {
  delay?: number;
}

export function Contact({ delay = 0 }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const senderEmail = formData.get("senderEmail") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const senderName = formData.get("senderName") as string;

    try {
      const result = await sendEmailViaEmailJS({
        from_email: senderEmail,
        from_name: senderName,
        subject: subject,
        message: message,
        reply_to: senderEmail,
      });

      if (result.success) {
        toast.success("Email sent successfully! I'll get back to you soon.");
        // Reset form safely using ref
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        toast.error(result.error || "Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={delay}>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter">
              Get in Touch
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-base">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. Feel free to reach out!
            </p>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Contact me directly at{" "}
              <motion.a 
                className="underline hover:text-primary transition-colors font-medium"
                href="mailto:anydec22@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                anydec22@gmail.com
              </motion.a>{" "}
              or use the form below.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={delay + 0.01}>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col w-[min(100%,38rem)] mx-auto dark:text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.1, duration: 0.5 }}
          >
            <motion.input
              className="h-14 px-4 rounded-lg border border-input dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary mb-3"
              name="senderName"
              type="text"
              required
              maxLength={100}
              placeholder="Your name *"
              disabled={isSubmitting}
              whileFocus={{ scale: 1.01 }}
            />
            <motion.input
              className="h-14 px-4 rounded-lg border border-input dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary mb-3"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email *"
              disabled={isSubmitting}
              whileFocus={{ scale: 1.01 }}
            />
            <motion.input
              className="h-14 px-4 rounded-lg border border-input dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary mb-3"
              name="subject"
              type="text"
              required
              maxLength={200}
              placeholder="Subject *"
              disabled={isSubmitting}
              whileFocus={{ scale: 1.01 }}
            />
            <motion.textarea
              className="h-52 mb-3 rounded-lg border border-input p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              name="message"
              placeholder="Your message *"
              required
              maxLength={5000}
              disabled={isSubmitting}
              whileFocus={{ scale: 1.01 }}
            />
            <motion.div
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 disabled:cursor-not-allowed mx-auto"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                ) : (
                  <>
                    Submit{" "}
                    <svg
                      className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>
        </BlurFade>
      </div>
    </section>
  );
}
