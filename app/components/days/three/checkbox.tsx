import { Check } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "~/lib/cn";

type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: number;
  iconSize?: number;
  checkStrokeWidth?: number;
  className?: string;
};

export const Checkbox = ({
  id,
  label,
  checked,
  onChange,
  size = 36,
  iconSize = 20,
  checkStrokeWidth = 3,
  className = "",
}: CheckboxProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <motion.div
        className="relative flex items-center justify-center"
        whileHover={"hover"}
      >
        {/* Invisible actual checkbox for accessibility */}
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only"
          aria-checked={checked}
        />

        {/* Visual checkbox container */}
        <motion.label
          htmlFor={id}
          className={cn(
            "relative flex items-center justify-center rounded cursor-pointer overflow-hidden",
            checked ? "border-neutral-800" : "border-slate-300"
          )}
          style={{ width: `${size}px`, height: `${size}px` }}
          initial={{ borderWidth: "1px" }}
          variants={{
            default: { borderWidth: "1px" },
            hover: { borderWidth: "2px" },
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {/* Background fill that animates from border to inside - no additional border */}
          <motion.div
            className="absolute inset-0"
            // style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            {/* These four divs create the border-to-inside fill effect */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-neutral-800 overlow-hidden"
              initial={{ height: 0 }}
              animate={{ height: checked ? "100%" : 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-neutral-800 overlow-hidden"
              initial={{ height: 0 }}
              animate={{ height: checked ? "100%" : 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-neutral-800 overlow-hidden"
              initial={{ width: 0 }}
              animate={{ width: checked ? "100%" : 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 bg-neutral-800 overlow-hidden"
              initial={{ width: 0 }}
              animate={{ width: checked ? "100%" : 0 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>

          {/* Check icon - appears after the fill animation completes */}
          <motion.div
            className="text-white z-10 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: checked ? 1 : 0,
              opacity: checked ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              // Delay the icon animation until after the fill completes
              delay: checked ? 0.15 : 0,
              duration: 0.3,
            }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <Check size={iconSize} strokeWidth={checkStrokeWidth} />
          </motion.div>
        </motion.label>
      </motion.div>

      <motion.label
        htmlFor={id}
        className={cn(
          "text-neutral-800 dark:text-zinc-100 select-none cursor-pointer",
          {
            "line-through": checked,
          }
        )}
        animate={checked ? { x: [0, 5, 0] } : { x: [0, -5, 0] }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {label}
      </motion.label>
    </div>
  );
};
