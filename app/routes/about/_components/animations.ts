import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 }
    }
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

export const scaleIn: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};

export const slideInLeft: Variants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};

export const slideInRight: Variants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};

export const auroraBackground: Variants = {
    animate: {
        backgroundPosition: ['0% 0%', '100% 100%'],
        opacity: [0.4, 0.6, 0.4],
        transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
};

// Reusable viewport configuration for consistency
export const scrollViewport = {
    once: false,
    amount: 0.2, // Trigger when 20% of element is visible
    margin: "0px"
};
