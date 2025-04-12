import { Link } from "react-router";
import type { Route } from "./+types/home";
import { ExternalLink } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Peerlist challenges" },
    { name: "description", content: "Peerlist daily challenges" },
  ];
}

const days = [
  { label: "Day 1", path: "/day-1" },
  { label: "Day 2", path: "/day-2" },
  { label: "Day 3", path: "/day-3" },
  { label: "Day 4", path: "/day-4" },
  { label: "Day 5", path: "/day-5" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center px-4 space-y-8">
      <h1 className="text-4xl font-bold text-center">
        Peerlist UI Animation Challenge
      </h1>

      <a
        target="_blank"
        className="flex space-x-2 items-center justify-center hover:underline"
        href="https://peerlist.io/challenges/ui-animation-challenge"
      >
        <span>Challenge link</span>
        <ExternalLink size={16} />
      </a>

      <div className="flex justify-center flex-wrap gap-6 w-full max-w-md">
        {days.map((day) => (
          <Link
            key={day.path}
            to={day.path}
            className="hover:bg-gray-50 rounded-lg p-6 text-center transition-colors duration-300"
          >
            <span className="text-2xl font-semibold">{day.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
