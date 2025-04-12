import { Menu, X } from "lucide-react";

type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="z-50 w-14 h-14 p-2.5 -mt-2 text-black transition-colors hover:text-gray-500 bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:text-gray-500 rounded-full flex items-center justify-center cursor-pointer"
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
};
