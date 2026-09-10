export const TRANSITION_EASE = [0.22, 1, 0.36, 1] as const;

export const dualSideLeftVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: TRANSITION_EASE,
    },
  },
};

export const dualSideRightVariants = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: TRANSITION_EASE,
    },
  },
};

export const verticalStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      ease: TRANSITION_EASE,
    },
  },
};

export const verticalCardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: TRANSITION_EASE,
    },
  },
};

export const crossfadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: TRANSITION_EASE,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: TRANSITION_EASE,
    },
  },
};
