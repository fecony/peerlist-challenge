import { motion } from "motion/react";
import { transition } from "~/components/days/five/motion";
import { cn } from "~/lib/cn";

export const Price = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => (
  <motion.div
    layout
    transition={transition}
    className={cn("space-x-1", className)}
  >
    <motion.span
      layout
      transition={transition}
      className="font-mono text-sm text-zinc-800 dark:text-zinc-300"
    >
      {value}
    </motion.span>

    <motion.span
      layout
      transition={transition}
      className="text-xs text-zinc-500 dark:text-zinc-500 font-medium"
    >
      ETH
    </motion.span>
  </motion.div>
);
