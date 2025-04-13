import { motion } from "motion/react";

function Container({ children, className }: React.HTMLProps<HTMLDivElement>) {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Item({ children, className }: React.HTMLProps<HTMLDivElement>) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 16,
          filter: "blur(4px)",
        },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 19,
            mass: 1.2,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { Container, Item };
