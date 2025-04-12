import type { Route } from "./+types/one";
import { useState } from "react";
import { GooeyFilter } from "~/components/gooey";
import { MenuButton } from "~/components/menu-button";
import { MenuDropdown } from "~/components/menu-items";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Peerlist challenges | Day 1" }];
}

export default function DayOne() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <GooeyFilter />

      <div className="flex flex-col filter filter-[url(#gooey)] absolute top-10 left-10">
        <MenuButton onClick={toggleMenu} isOpen={isOpen} />
        <MenuDropdown isOpen={isOpen} />
      </div>

      <span className="text-xl font-light text-black dark:text-white text-center">
        Day 1 | Open the menu in top left corner
      </span>
    </>
  );
}
