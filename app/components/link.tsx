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
      className={clsx("transition-colors", className, {
        "underline decoration-1 hover:decoration-brand decoration-gray-300 dark:decoration-gray-100/50 underline-offset-2":
          underline,
      })}
    >
      {text || children}
    </a>
  );
}
