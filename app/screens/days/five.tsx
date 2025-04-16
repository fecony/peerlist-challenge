import { useState } from "react";
import { Collectibles } from "~/components/days/five/collectibles";
import { items } from "~/components/days/five/helpers/items";
import {
  layoutOptions,
  type LayoutOptions,
} from "~/components/days/five/helpers/layouts";
import { Tabs } from "~/components/days/five/tabs";

export default function Five() {
  const [activeLayout, setActiveLayout] = useState<LayoutOptions>(
    layoutOptions[0]
  );

  return (
    <div className="flex h-full w-full justify-center items-center flex-col max-w-96 space-y-2">
      <h3 className="text-neutral-800 dark:text-zinc-300 self-start font-medium text-xl">
        Collectibles
      </h3>

      <Tabs value={activeLayout} onChange={setActiveLayout} />

      <div className="border-b border-gray-200 dark:border-zinc-800 w-full"></div>

      <Collectibles items={items} layout={activeLayout} />
    </div>
  );
}
