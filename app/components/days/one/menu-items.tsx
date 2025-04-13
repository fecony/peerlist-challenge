import { House, Mail, User, Settings } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const menuItems = [
  { icon: <House size={20} />, label: "Home", href: "#home" },
  { icon: <Mail size={20} />, label: "Mail", href: "#mail" },
  { icon: <User size={20} />, label: "User", href: "#user" },
  { icon: <Settings size={20} />, label: "Settings", href: "#settings" },
];

export const MenuDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial="closed"
          animate="open"
          exit="closed"
          role="menu"
          aria-label="Expanded menu items"
          className="absolute filter-[url(#gooey)]"
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={item.label}
              className="-mt-3"
              variants={{
                open: {
                  y: (index + 1) * 48,
                  transition: { type: "spring", stiffness: 300, damping: 30 },
                },
                closed: {
                  y: 4,
                  transition: { type: "spring", stiffness: 300, damping: 30 },
                },
              }}
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <a
                href={item.href}
                role="menuitem"
                aria-label={item.label}
                className="flex items-center transition justify-center w-14 h-14 bg-gray-200 dark:bg-zinc-800 dark:hover:text-zinc-200  hover:text-black text-[#909090] rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {item.icon}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
