import { Link } from "react-router";
import { Fragment } from "react";
import { cn } from "~/lib/cn";
import { days, statusColorMap } from "~/lib/days";

type CollectionProps = {
  title: string;
};

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
