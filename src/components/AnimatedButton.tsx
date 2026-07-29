"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedButtonProps = {
  children: ReactNode;
};

export function AnimatedButton({ children }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}