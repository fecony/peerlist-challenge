import Link from "~/components/link";

export const Me = () => {
  return (
    <Link href="https://github.com/fecony" className="flex w-max">
      <img
        src="https://unavatar.io/fecony"
        alt="fecony's GitHub avatar"
        className="rounded-full border size-8 border-gray-300 dark:border-zinc-700"
      />
    </Link>
  );
};
