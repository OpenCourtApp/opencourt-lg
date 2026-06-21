"use client";

import { motion, type Variants } from "motion/react";
import type { LucideIcon } from "lucide-react";

/**
 * A Lucide icon that plays its own animation when an ancestor motion component
 * switches to the "hover" variant (e.g. the card it sits in). Pass the per-icon
 * `variants` from icon-animations.ts.
 */
export function AnimatedIcon({
  icon: Icon,
  variants,
  className,
}: {
  icon: LucideIcon;
  variants: Variants;
  className?: string;
}) {
  return (
    <motion.span aria-hidden variants={variants} className="inline-flex">
      <Icon className={className} />
    </motion.span>
  );
}
