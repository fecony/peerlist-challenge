import { useState } from "react";
import { GooeyFilter, MenuButton, MenuDropdown } from "~/components/days/one";

export default function One() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <GooeyFilter />

      <div className="flex flex-col filter filter-[url(#gooey)] absolute top-5 left-5">
        <MenuButton onClick={toggleMenu} isOpen={isOpen} />
        <MenuDropdown isOpen={isOpen} />
      </div>

      <span className="text-xl font-light text-black dark:text-white text-center">
        Day 1 | Open the menu in top left corner
      </span>
    </>
  );
}
