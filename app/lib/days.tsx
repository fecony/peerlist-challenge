import {
  type LucideProps,
  CircleCheck,
  Clock,
  CircleDashed,
  CircleFadingArrowUp,
} from "lucide-react";

type Status = "done" | "pending" | "idle" | "waiting";

type Day = {
  label: string;
  path: `/${string}`;
  status: Status;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export const statusColorMap: Record<Status, string> = {
  done: "text-emerald-500 dark:text-emerald-400",
  pending: "text-amber-400 dark:text-amber-300",
  idle: "text-zinc-500 dark:text-zinc-300",
  waiting: "text-blue-600 dark:text-blue-300",
};

export const days: Day[] = [
  {
    label: "Day 1 – (Fluid Menu)",
    path: "/day-1",
    status: "done",
    icon: CircleCheck,
  },
  {
    label: "Day 2 – (Dynamaic Status Indicator)",
    path: "/day-2",
    status: "done",
    icon: CircleCheck,
  },
  {
    label: "Day 3 – (Animated Checkboxes)",
    path: "/day-3",
    status: "done",
    icon: CircleCheck,
  },
  {
    label: "Day 4 – (Animated Toggles)",
    path: "/day-4",
    status: "done",
    icon: CircleCheck,
  },
  {
    label: "Day 5 – (Shared Layout Tabs)",
    path: "/day-5",
    status: "pending",
    icon: CircleFadingArrowUp,
  },
];
