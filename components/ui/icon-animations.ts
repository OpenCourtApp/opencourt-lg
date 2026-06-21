import type { Variants } from "motion/react";

// One distinct animation per icon (played while the parent card is hovered),
// in the spirit of lucide-animated.com — each glyph moves in a way that fits
// its meaning. The parent card sets initial="rest" / whileHover="hover" and the
// icon inherits the active variant.

export const pulse: Variants = {
  rest: { scale: 1 },
  hover: { scale: [1, 1.2, 0.95, 1.1, 1], transition: { duration: 0.7, ease: "easeInOut" } },
};

export const tilt: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: [0, -12, 8, -4, 0], transition: { duration: 0.6, ease: "easeInOut" } },
};

export const pop: Variants = {
  rest: { scale: 1 },
  hover: { scale: [1, 1.25, 1], transition: { duration: 0.4, ease: "backOut" } },
};

export const bounce: Variants = {
  rest: { y: 0 },
  hover: { y: [0, -5, 0, -3, 0], transition: { duration: 0.6, ease: "easeOut" } },
};

export const wiggle: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: [0, -10, 10, -7, 4, 0], transition: { duration: 0.55, ease: "easeInOut" } },
};

export const send: Variants = {
  rest: { x: 0, y: 0 },
  hover: { x: [0, 3, 0], y: [0, -3, 0], transition: { duration: 0.5, ease: "easeOut" } },
};

export const raise: Variants = {
  rest: { y: 0, scale: 1 },
  hover: { y: [0, -3, 0], scale: [1, 1.08, 1], transition: { duration: 0.5, ease: "easeInOut" } },
};

export const shake: Variants = {
  rest: { x: 0 },
  hover: { x: [0, -2, 2, -2, 2, 0], transition: { duration: 0.45 } },
};

export const spin: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.6, ease: "easeInOut" } },
};
