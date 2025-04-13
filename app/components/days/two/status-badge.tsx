import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "~/lib/cn";

type Status = {
  text: string;
  icon: LucideIcon;
  color: {
    bg: `bg-${string}`;
    color: `text-${string}`;
  };
  animation?: string;
};

type Statuses = Record<string, Status>;

export const defineStatuses = <T extends Statuses>(statuses: T): T => statuses;

export const StatusBadge = <
  TStatuses extends Statuses,
  TKey extends keyof TStatuses
>({
  status,
  statuses,
}: {
  statuses: TStatuses;
  status: TKey;
}) => {
  const state = statuses[status];
  if (!status) return null;

  const Icon = state.icon;

  return (
    <div className="flex items-center justify-center">
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={cn(
          "text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2",
          state.color.bg
        )}
      >
        <motion.span
          className="flex items-center justify-center gap-2"
          key={String(status)}
        >
          <motion.div
            key={`icon-${String(status)}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Icon
              className={cn("size-5", state.color.color, state.animation)}
            />
          </motion.div>

          <span className={cn("font-medium", state.color.color)}>
            {state.text}
          </span>
        </motion.span>
      </motion.div>
    </div>
  );
};
