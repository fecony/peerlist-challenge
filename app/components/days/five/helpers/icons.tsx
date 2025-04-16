import { Layers, LayoutGrid, LayoutList, type LucideProps } from "lucide-react";
import type { JSX } from "react";
import type { LayoutOptions } from "~/components/days/five/helpers/layouts";

export const viewIcons: Record<
  LayoutOptions,
  (props: LucideProps) => JSX.Element
> = {
  list: (props: LucideProps) => <LayoutList size={16} {...props} />,
  grid: (props: LucideProps) => <LayoutGrid size={16} {...props} />,
  pack: (props: LucideProps) => <Layers size={16} {...props} />,
};
