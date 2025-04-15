import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Button } from "~/components/days/four/button";
import { cn } from "~/lib/cn";

const spring = {
  type: "spring",
  stiffness: 550,
  damping: 45,
  mass: 0.9,
};

const itemAppear = {
  initial: { opacity: 0, scale: 0.95, y: 5 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 0.5,
      delay: 0.05,
    },
  },
  exit: { opacity: 0, scale: 0.9, y: -5, transition: { duration: 0.15 } },
};

const titleScaleDownExit = {
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -5,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const subtitleFadeExit = {
  exit: { opacity: 0, y: -5, transition: { duration: 0.1 } },
};

export const SegmentedControl = () => {
  const [primarySelection, setPrimarySelection] = useState<"free" | "premium">(
    "free"
  );
  const [secondarySelection, setSecondarySelection] = useState<
    "annual" | "monthly"
  >("monthly");

  const handlePrimaryClick = (selection: "free" | "premium") => {
    setPrimarySelection(selection);
  };

  const handleSecondaryClick = (selection: "annual" | "monthly") => {
    if (primarySelection === "premium") {
      setSecondarySelection(selection);
    }
  };

  const handlePremiumOverviewClick = () => {
    setPrimarySelection("premium");
  };

  return (
    <div className="flex justify-center p-4">
      <div className="relative flex w-[300px] items-center rounded-xs bg-gray-100 dark:bg-zinc-800 p-1 shadow-inner">
        <motion.div
          layoutId="primary-selector-bubble"
          className={cn(
            "absolute inset-y-0 my-auto h-[calc(100%-8px)] w-1/2 rounded-xs bg-zinc-800 dark:bg-zinc-700",
            primarySelection === "premium"
              ? "left-[calc(50%-4px)]"
              : "left-[4px]"
          )}
          transition={spring}
          style={{ zIndex: 5 }}
        />

        <div className="relative z-10 flex w-full items-center">
          <button
            onClick={() => handlePrimaryClick("free")}
            className={cn(
              "relative flex cursor-pointer h-[38px] w-1/2 items-center justify-center rounded-xs text-sm transition-all duration-300 focus:outline-none",
              primarySelection === "premium"
                ? "text-neutral-700 dark:text-zinc-300 hover:text-black dark:hover:text-zinc-100"
                : "text-white",
              primarySelection === "free" && "font-medium"
            )}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            Free
          </button>

          <div className="relative flex h-[38px] w-1/2 items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              {primarySelection === "free" && (
                <motion.div
                  key="premium-overview-wrapper"
                  className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center rounded-xs focus:outline-none text-neutral-700 dark:text-zinc-300 hover:text-black dark:hover:text-zinc-100"
                  onClick={handlePremiumOverviewClick}
                  initial={{ opacity: 1 }}
                  exit={{}}
                >
                  <motion.span
                    key="premium-title"
                    className="text-sm leading-tight"
                    variants={titleScaleDownExit}
                    exit="exit"
                  >
                    Premium
                  </motion.span>

                  <motion.span
                    key="premium-subtitle"
                    className="text-xs leading-tight text-neutral-500 dark:text-neutral-600"
                    variants={subtitleFadeExit}
                    exit="exit"
                  >
                    Monthly • Annual
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {primarySelection === "premium" && (
                <motion.div
                  key="premium-detail-container"
                  className="absolute inset-0 flex w-full items-center"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={itemAppear}
                >
                  <motion.div
                    layoutId="secondary-selector-bubble"
                    className={cn(
                      "absolute inset-y-0 my-auto h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-xs bg-white",
                      secondarySelection === "annual" ? "left-1/2" : "left-0"
                    )}
                    transition={spring}
                    style={{ zIndex: 15 }}
                  />

                  <Button
                    active={secondarySelection === "monthly"}
                    type="monthly"
                    onClick={() => handleSecondaryClick("monthly")}
                  />

                  <Button
                    active={secondarySelection === "annual"}
                    type="annual"
                    onClick={() => handleSecondaryClick("annual")}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
