import { motion } from "motion/react";
import { viewIcons } from "~/components/days/five/helpers/icons";
import {
  layoutOptions,
  type LayoutOptions,
} from "~/components/days/five/helpers/layouts";
import { cn } from "~/lib/cn";

type TabsProps = {
  value: LayoutOptions;
  onChange: (value: LayoutOptions) => void;
};

export const Tabs = ({ value, onChange }: TabsProps) => {
  return (
    <div className="flex bg-gray-50 dark:bg-zinc-800 justify-between p-1 w-full rounded-xs">
      {layoutOptions.map((layout) => (
        <TabButton
          key={layout}
          layout={layout}
          currentLayout={value}
          onClick={onChange}
        />
      ))}
    </div>
  );
};

type TabButtonProps = {
  layout: LayoutOptions;
  currentLayout: LayoutOptions;
  onClick: (value: LayoutOptions) => void;
};

const TabButton = ({ layout, currentLayout, onClick }: TabButtonProps) => {
  const isActive = layout === currentLayout;
  const IconComponent = viewIcons[layout];

  return (
    <button
      onClick={() => onClick(layout)}
      className={cn(
        "relative cursor-pointer flex items-center justify-center space-x-2 px-4 py-2 text-sm rounded-xs transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-blue-500",
        isActive
          ? "text-blue-700"
          : "text-zinc-500 dark:text-zinc-300 hover:text-gray-800 hover:dark:text-zinc-100"
      )}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-blue-100 rounded-xs z-0 w-full"
          layoutId="active-tab-background"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}

      <span className="relative z-10 flex items-center space-x-1.5">
        <IconComponent />
        <span className="capitalize">{layout} view</span>
      </span>
    </button>
  );
};
