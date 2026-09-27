export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const, // <-- Fixed here
    },
  },
};

export const subtleScale = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const, // <-- Fixed here
    },
  },
};

export const microInteractive = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const }, // <-- Fixed here
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1, ease: [0.4, 0, 0.2, 1] as const }, // <-- Fixed here
  },
};
