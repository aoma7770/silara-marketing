// Design reminder: ambient care-context imagery should feel architectural and alive on scroll, while remaining subordinate to readable editorial content.
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type SceneTone = "light" | "mist" | "deep";

export default function SectionScene({
  src,
  tone = "light",
  position = "center center",
  className = "",
}: {
  src: string;
  tone?: SceneTone;
  position?: string;
  className?: string;
}) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-7%", "7%"]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1.07, 1.07] : [1.07, 1.18]);
  const sceneOpacity = tone === "deep" ? [0.72, 1, 0.8] : [0.48, 0.76, 0.58];
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [sceneOpacity[1], sceneOpacity[1], sceneOpacity[1]] : sceneOpacity);

  return (
    <div ref={sceneRef} className={`section-scene section-scene--${tone} ${className}`} aria-hidden="true">
      <motion.img
        src={src}
        alt=""
        className="section-scene__image"
        style={{ y, scale, opacity, objectPosition: position }}
      />
    </div>
  );
}
