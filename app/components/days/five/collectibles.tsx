import { LayoutGroup, motion } from "motion/react";
import { useMemo } from "react";
import { Price } from "~/components/days/five/card/price";
import { ContentItem } from "~/components/days/five/card/content-item";
import { type Collectible } from "~/components/days/five/helpers/items";
import type { LayoutOptions } from "~/components/days/five/helpers/layouts";
import { transition } from "~/components/days/five/motion";
import { cn } from "~/lib/cn";
import { ScrollArea } from "~/components/scroll-area";

export const Collectibles = ({
  items,
  layout,
}: {
  items: Collectible[];
  layout: LayoutOptions;
}) => {
  const totalValue = useMemo(() => {
    const total = items.reduce((total, item) => total + item.price, 0);
    return Number(total.toFixed(3));
  }, [items]);

  return (
    <LayoutGroup id="collectibles">
      <ScrollArea className="h-[200px] w-full rounded-xs border border-zinc-200 dark:border-zinc-800">
        <div
          className={cn("transition-all w-full duration-500 relative", {
            block: layout === "list",
            "grid grid-cols-2 gap-4 ": layout === "grid",
            "flex justify-center h-[200px]": layout === "pack",
          })}
        >
          {items.map((item, index) => (
            <ContentItem
              key={index}
              index={index}
              item={item}
              layout={layout}
            />
          ))}

          <motion.div
            layout
            initial={{ y: 20, opacity: 0 }}
            animate={
              layout === "pack" ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
            }
            exit={{ y: 20, opacity: 0 }}
            transition={transition}
            className="mt-35 text"
            style={{
              display: layout === "pack" ? "block" : "none",
            }}
          >
            <motion.h4
              layout
              transition={transition}
              className="text-md font-medium text-zinc-700 dark:text-zinc-300"
            >
              {items.length} Collectibles
            </motion.h4>

            <Price value={totalValue} className="text-center" />
          </motion.div>
        </div>
      </ScrollArea>
    </LayoutGroup>
  );
};
