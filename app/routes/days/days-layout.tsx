import { Outlet } from "react-router";

export default function Layout() {
  return (
    <section className="relative bg-white dark:bg-neutral-900 border border-zinc-200 dark:border-zinc-800 rounded-sm p-4 grid place-items-center h-96">
      <Outlet />
    </section>
  );
}
