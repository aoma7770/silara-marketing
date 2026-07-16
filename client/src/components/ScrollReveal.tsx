// Design reminder: motion is quiet and governed—small distance, strong ease-out, and never essential to comprehension.
import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function ScrollReveal({ children, className = "", delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.46, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

