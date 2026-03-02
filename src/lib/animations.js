/**
 * Centralized Animation Configuration
 * Premium motion language: calm, confident, minimal
 * Based on rise2.studio motion principles
 */

// Core easing curves - soft, premium feel
export const easings = {
  premium: [0.25, 0.1, 0.25, 1],
  smooth: [0.43, 0.13, 0.23, 0.96],
  soft: [0.33, 0.01, 0, 1],
};

// Core animation durations
export const durations = {
  fast: 0.4,
  medium: 0.6,
  slow: 0.9,
  hover: 0.18,
};

// Stagger timings
export const stagger = {
  tight: 0.05,
  normal: 0.08,
  relaxed: 0.12,
};

// Motion distances - small and controlled
export const distances = {
  y: {
    small: 20,
    medium: 40,
    large: 60,
  },
  x: {
    small: 10,
    medium: 20,
    large: 30,
  },
  scale: {
    subtle: 0.96,
    normal: 0.95,
    hover: 1.03,
    hoverSubtle: 1.04,
  },
};

/**
 * Hero Section Intro Animation
 * For initial page load - heading and visuals
 */
export const heroIntro = {
  hidden: {
    opacity: 0,
    y: distances.y.small,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.premium,
    },
  },
};

export const heroIntroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.normal,
    },
  },
};

export const heroIntroItem = {
  hidden: {
    opacity: 0,
    y: distances.y.small,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easings.premium,
    },
  },
};

export const heroVisual = {
  hidden: {
    opacity: 0,
    scale: distances.scale.subtle,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.premium,
    },
  },
};

/**
 * Section Animations
 * For sections that appear on scroll
 */
export const fadeUpSection = {
  hidden: {
    opacity: 0,
    y: distances.y.medium,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easings.premium,
    },
  },
};

export const fadeUpSectionStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.normal,
    },
  },
};

/**
 * Item Animations
 * For cards, list items, and repeated elements
 */
export const fadeUpItem = {
  hidden: {
    opacity: 0,
    y: distances.y.medium,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easings.premium,
    },
  },
};

export const fadeUpItemStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.normal,
    },
  },
};

/**
 * Card Hover Animation
 * Subtle scale and lift on hover
 */
export const cardHover = {
  scale: distances.scale.hover,
  y: -4,
  transition: {
    duration: durations.hover,
    ease: easings.smooth,
  },
};

/**
 * Button Hover Animation
 */
export const buttonHover = {
  scale: distances.scale.hoverSubtle,
  transition: {
    duration: durations.hover,
    ease: easings.smooth,
  },
};

/**
 * Logo/Client Animations
 */
export const logoStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.tight,
    },
  },
};

export const logoItem = {
  hidden: {
    opacity: 0,
    y: distances.y.small,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.fast,
      ease: easings.premium,
    },
  },
};

export const logoHover = {
  scale: 1.05,
  opacity: 1,
  transition: {
    duration: durations.hover,
    ease: easings.smooth,
  },
};

/**
 * Testimonial/Quote Slide Transition
 */
export const slideTransition = {
  enter: {
    x: distances.x.medium,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: durations.medium,
      ease: easings.premium,
    },
  },
  exit: {
    x: -distances.x.medium,
    opacity: 0,
    transition: {
      duration: durations.medium,
      ease: easings.premium,
    },
  },
};

/**
 * Reduced Motion Variants
 * Simple fade-in only for accessibility
 */
export const reducedMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.fast,
    },
  },
};

/**
 * Viewport Configuration
 * For whileInView animations
 */
export const viewportConfig = {
  once: true,
  amount: 0.2, // Trigger when 20% visible
};

export const viewportConfigLarge = {
  once: true,
  amount: 0.1, // For larger sections
};

/**
 * Parallax Configuration
 * For scroll-linked image movement
 */
export const parallaxConfig = {
  hero: {
    inputRange: [0, 1],
    outputRange: [-20, 20], // Gentle parallax
  },
  section: {
    inputRange: [0, 1],
    outputRange: [-40, 40], // Medium parallax
  },
  image: {
    inputRange: [0, 1],
    outputRange: [0, -60], // Image moves slower than scroll
  },
};
