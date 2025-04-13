import clsx from "clsx";
import { Menu, X } from "lucide-react";

type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => (
  <button
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    className="z-50 w-14 h-14 p-2.5 -mt-2 text-black transition-colors hover:text-gray-500 bg-gray-200 dark:bg-zinc-800 dark:text-gray-100 dark:hover:text-gray-500 rounded-full flex items-center justify-center cursor-pointer filter-[url(#gooey)]"
  >
    <div className="relative w-5 h-5">
      <Menu
        size={20}
        className={clsx(
          "absolute transition-all duration-300",
          isOpen ? "opacity-0 scale-75 blur-sm" : "opacity-100 scale-100 blur-0"
        )}
      />
      <X
        size={20}
        className={clsx(
          "absolute transition-all duration-300",
          isOpen ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-75 blur-sm"
        )}
      />
    </div>
  </button>
);
