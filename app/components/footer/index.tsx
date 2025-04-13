import Link from "~/components/link";
import { AppThemeSwitcher } from "~/components/theme";

export const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-gray-200 dark:border-zinc-800 border-t pt-2">
      <div className="px-[2px] text-zinc-500 dark:text-zinc-300 text-sm">
        Built by{" "}
        <Link href="https://peerlist.io/fecony" text="@fecony" underline />
      </div>

      <div className="ml-auto">
        <AppThemeSwitcher />
      </div>
    </div>
  );
};
