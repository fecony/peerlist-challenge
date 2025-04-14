import {
  CircleCheck,
  CircleDashed,
  CircleFadingArrowUp,
  Clock,
  type LucideProps,
} from "lucide-react";
import { Link } from "react-router";
import { Fragment } from "react";
import { cn } from "~/lib/cn";

type CollectionProps = {
  title: string;
};

type Status = "done" | "pending" | "idle" | "waiting";

type Day = {
  label: string;
  path: `/${string}`;
  status: Status;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

const statusColorMap: Record<Status, string> = {
  done: "text-emerald-500 dark:text-emerald-400",
  pending: "text-amber-400 dark:text-amber-300",
  idle: "text-zinc-500 dark:text-zinc-300",
  waiting: "text-blue-600 dark:text-blue-300",
};

const days: Day[] = [
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
    status: "pending",
    icon: CircleFadingArrowUp,
  },
  {
    label: "Day 4 – (Waiting)",
    path: "/day-4",
    status: "waiting",
    icon: Clock,
  },
  {
    label: "Day 5",
    path: "/day-5",
    status: "idle",
    icon: CircleDashed,
  },
];

export const Collection = ({ title }: CollectionProps) => {
  return (
    <div className="mt-6 flex flex-col">
      <Link to={`/${title}`} className="flex justify-between" viewTransition>
        <h2 className="py-2 text-zinc-500 capitalize font-medium">{title}</h2>
      </Link>

      {days.map((day) => {
        const Icon = day.icon;

        return (
          <Fragment key={day.label}>
            <div className="border-gray-200 dark:border-zinc-800 border-t" />

            <Link
              to={`/challenges${day.path}`}
              className="flex items-center leading-2 w-full space-x-2 py-2 hover:underline text-neutral-800 dark:text-zinc-100"
            >
              <Icon className={cn("size-5", statusColorMap[day.status])} />
              <span>{day.label}</span>
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
};
