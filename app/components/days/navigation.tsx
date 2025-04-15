import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { cn } from "~/lib/cn";
import { days } from "~/lib/days";

export const DayNavigation = () => {
  const { pathname } = useLocation();

  const currentIndex = days.findIndex(
    (day) => `/challenges${day.path}` === pathname
  );
  const prevDay = days[currentIndex - 1];
  const nextDay = days[currentIndex + 1];

  console.log({ pathname, currentIndex, prevDay, nextDay });
  const prevPath = prevDay ? `/challenges${prevDay.path}` : "";
  const nextPath = nextDay ? `/challenges${nextDay.path}` : "";

  return (
    <span className="flex h-fit rounded bg-stone-100 dark:bg-zinc-800">
      <NavigationLink
        to={prevPath}
        disabled={!prevDay}
        ariaLabel="Go to previous day"
      >
        <ChevronLeft width={12} />
      </NavigationLink>

      <NavigationLink
        to={nextPath}
        disabled={!nextDay}
        ariaLabel="Go to next day"
      >
        <ChevronRight width={12} />
      </NavigationLink>
    </span>
  );
};

const NavigationLink = ({
  to,
  disabled,
  ariaLabel,
  children,
}: {
  to: string;
  disabled: boolean;
  ariaLabel: string;
  children: React.ReactNode;
}) => {
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        className={cn(
          "transition-all flex h-6 w-6 items-center justify-center rounded-[4px] opacity-40 cursor-not-allowed",
          "dark:text-zinc-300"
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      to={to}
      aria-label={ariaLabel}
      className={cn(
        "transition-all flex h-6 w-6 items-center justify-center rounded-[4px] dark:text-zinc-300",
        "hover:bg-gray-200 hover:dark:bg-zinc-700 hover:dark:text-zinc-100",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
      )}
    >
      {children}
    </Link>
  );
};
