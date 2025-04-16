import { Diamond } from "lucide-react";
import { motion } from "motion/react";
import { Price } from "~/components/days/five/card/price";
import { items, type Collectible } from "~/components/days/five/helpers/items";
import type { LayoutOptions } from "~/components/days/five/helpers/layouts";
import { transition } from "~/components/days/five/motion";
import { cn } from "~/lib/cn";

export const ContentItem = ({
  item,
  index,
  layout,
}: {
  item: Collectible;
  index: number;
  layout: LayoutOptions;
}) => {
  return (
    <motion.div
      key={item.id}
      layout
      transition={transition}
      className={cn("p-2 py-1", {
        "flex items-center": layout === "list",
        "flex flex-col": layout === "grid",
        absolute: layout === "pack",
        "pt-2": index === 0 && layout === "list",
      })}
      animate={{
        ...(layout === "pack" && {
          top: "20%",
          rotate: (index - items.length / 2) * 10,
          zIndex: index,
        }),
      }}
      style={{
        zIndex: index,
      }}
    >
      <motion.div
        layout
        transition={transition}
        className={cn(
          "rounded-xs flex justify-center items-center overflow-hidden",
          {
            "size-16 mr-2": layout === "list",
            "w-full aspect-square": layout === "grid",
            "size-20": layout === "pack",
          }
        )}
      >
        <motion.img layout src={item.image} transition={transition} />
      </motion.div>

      {layout !== "pack" && (
        <motion.div
          layout
          transition={transition}
          className={cn(layout === "list" ? "flex-1" : "w-full")}
        >
          <motion.div
            layout
            transition={transition}
            className={cn("flex relative w-full justify-between items-center", {
              "flex-col": layout === "grid",
            })}
          >
            <motion.div
              layout
              transition={transition}
              className="w-full text-zinc-700 dark:text-zinc-300 space-x-1.5 flex flex-col"
            >
              <motion.span
                layout
                transition={transition}
                className="text-md font-medium"
              >
                {item.name}
              </motion.span>

              <Price value={item.price} />
            </motion.div>

            <motion.div
              layout
              transition={transition}
              className={cn("flex items-center space-x-1", {
                "absolute bottom-1 right-0": layout === "grid",
              })}
            >
              <Diamond
                size={10}
                fill="currentColor"
                className="text-amber-200 dark:text-amber-500"
              />

              <motion.span
                layout
                transition={transition}
                className="text-xs text-zinc-400"
              >
                #{item.id}
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};
