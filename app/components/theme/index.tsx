import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme, type Theme } from "~/providers/theme-provider";
import { cn } from "~/lib/cn";

export const AppThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const buttons = [
    {
      label: "system",
      icon: <Monitor width={13} />,
      active: theme === "system",
    },
    { label: "dark", icon: <Moon width={13} />, active: theme === "dark" },
    { label: "light", icon: <Sun width={13} />, active: theme === "light" },
  ];

  return (
    <span className="flex w-fit items-center gap-0.5 overflow-hidden rounded-[6px] bg-stone-100 dark:bg-zinc-800 p-[2px]">
      {buttons.map(({ label, icon, active }) => (
        <button
          type="button"
          key={label}
          aria-label={`${label} theme`}
          onClick={() => setTheme(label as Theme)}
          className={cn(
            "ransition-all dark:text-zinc-300 flex h-6 w-6 items-center justify-center rounded-[4px] hover:opacity-50 dark:hover:bg-zinc-700 cursor-pointer",
            active ? "bg-gray-200 dark:bg-zinc-800 dark:text-zinc-100" : "",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
          )}
        >
          {icon}
        </button>
      ))}
    </span>
  );
};
