"use client";

import { motion } from "@/lib/framer-motion";

interface HeroAnimationsProps {
  children: React.ReactNode;
  delay?: number;
}

export const HeroAnimations = ({
  children,
  delay = 0,
}: HeroAnimationsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};
