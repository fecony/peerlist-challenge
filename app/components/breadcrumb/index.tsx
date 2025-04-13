import { ChevronRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router";
import { cn } from "~/lib/cn";

export const Breadcrumb = () => {
  const { pathname } = useLocation();

  const paths = pathname
    .split("/")
    .filter((path) => path !== "")
    .map((path) =>
      path.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
    );

  return (
    <div
      className={cn(
        "mt-0 mb-4 flex w-full items-center gap-1 align-middle font-normal text-xs"
      )}
    >
      <Link className="text-zinc-500 dark:text-zinc-300" to="/">
        Home
      </Link>

      <ChevronRight size={12} className="text-zinc-500 dark:text-zinc-300" />

      {paths.map((path, index) => {
        const href = `/${paths
          .slice(0, index + 1)
          .join("/")
          .toLowerCase()}`;

        const isLast = index === paths.length - 1;

        return (
          <React.Fragment key={path}>
            {isLast ? (
              <span className="text-zinc-500 dark:text-zinc-300">{path}</span>
            ) : (
              <Link className="text-zinc-500 dark:text-zinc-300" to={href}>
                {path}
              </Link>
            )}

            {index < paths.length - 1 && (
              <ChevronRight
                size={12}
                className="text-zinc-500 dark:text-zinc-300"
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
