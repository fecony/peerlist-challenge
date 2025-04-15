import { motion } from "motion/react";
import { cn } from "~/lib/cn";

export const Button = ({
  type,
  active,
  onClick,
}: {
  type: string;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "cursor-pointer capitalize relative z-20 flex h-full w-1/2 items-center justify-center text-xs transition-colors duration-300 focus:outline-none",
        active
          ? "text-neutral-800 hover:text-neutral-500"
          : "text-white hover:text-neutral-300"
      )}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {type}
    </motion.button>
  );
};
