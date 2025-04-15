import clsx from "clsx";

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  text?: string;
  underline?: boolean;
  className?: string;
}

export default function Link({
  text,
  href,
  underline,
  className,
  children,
}: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={clsx(
        "transition-colors",
        className,
        {
          "underline decoration-1 hover:decoration-brand decoration-gray-300 dark:decoration-gray-100/50 underline-offset-2":
            underline,
        },
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded-xs ring-offset-1"
      )}
    >
      {text || children}
    </a>
  );
}
