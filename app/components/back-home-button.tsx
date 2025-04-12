import { Link, useLocation } from "react-router";

export const BackHomeButton = () => {
  const location = useLocation();

  if (location.pathname === "/") return;

  return (
    <Link
      to="/"
      aria-label="Go back home"
      className="w-5 flex justify-center items-center text-lg hover:bg-gray-100"
    >
      /
    </Link>
  );
};
