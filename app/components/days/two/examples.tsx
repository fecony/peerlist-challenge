import {
  Loader2,
  CheckCircle2,
  TriangleAlert,
  BatteryCharging,
  BatteryFull,
  BatteryWarning,
  CloudRain,
  CloudSun,
  Sun,
  Server,
  UploadCloud,
  XCircle,
} from "lucide-react";
import { defineStatuses } from "~/components/days/two/status-badge";

const defaultStatuses = defineStatuses({
  analyzing: {
    text: "Analyzing Transaction",
    icon: Loader2,
    color: {
      color: "text-sky-700 dark:text-sky-300",
      bg: "bg-sky-200 dark:bg-sky-800",
    },
    animation: "animate-spin",
  },
  safe: {
    text: "Transaction Safe",
    icon: CheckCircle2,
    color: {
      color: "text-green-700 dark:text-green-300",
      bg: "bg-green-200 dark:bg-green-800",
    },
  },
  warning: {
    text: "Transaction Warning",
    icon: TriangleAlert,
    color: {
      color: "text-red-700 dark:text-red-300",
      bg: "bg-red-200 dark:bg-red-800",
    },
    animation: "animate-shake",
  },
});

const batteryStatuses = defineStatuses({
  charging: {
    text: "Charging Battery",
    icon: BatteryCharging,
    color: {
      color: "text-blue-700 dark:text-blue-300",
      bg: "bg-blue-200 dark:bg-blue-800",
    },
  },
  full: {
    text: "Battery Full",
    icon: BatteryFull,
    color: {
      color: "text-green-700 dark:text-green-300",
      bg: "bg-green-200 dark:bg-green-800",
    },
  },
  low: {
    text: "Battery Low",
    icon: BatteryWarning,
    color: {
      color: "text-yellow-700 dark:text-yellow-300",
      bg: "bg-yellow-200 dark:bg-yellow-800",
    },
    animation: "animate-pulse",
  },
});

const weatherStatuses = defineStatuses({
  sunny: {
    text: "It's Sunny",
    icon: Sun,
    color: {
      color: "text-yellow-600 dark:text-yellow-300",
      bg: "bg-yellow-100 dark:bg-yellow-800",
    },
    animation: "animate-[spin_2s_linear_infinite]",
  },
  cloudy: {
    text: "Partly Cloudy",
    icon: CloudSun,
    color: {
      color: "text-gray-600 dark:text-gray-300",
      bg: "bg-gray-200 dark:bg-gray-800",
    },
  },
  rainy: {
    text: "Rainy Weather",
    icon: CloudRain,
    color: {
      color: "text-blue-600 dark:text-blue-300",
      bg: "bg-blue-100 dark:bg-blue-800",
    },
  },
});

const deploymentStatuses = defineStatuses({
  deploying: {
    text: "Deploying...",
    icon: UploadCloud,
    color: {
      color: "text-indigo-700 dark:text-indigo-300",
      bg: "bg-indigo-200 dark:bg-indigo-800",
    },
  },
  live: {
    text: "Live on Production",
    icon: Server,
    color: {
      color: "text-green-700 dark:text-green-300",
      bg: "bg-green-200 dark:bg-green-800",
    },
  },
  failed: {
    text: "Deployment Failed",
    icon: XCircle,
    color: {
      color: "text-red-700 dark:text-red-300",
      bg: "bg-red-200 dark:bg-red-800",
    },
    animation: "animate-shake",
  },
});

export {
  defaultStatuses,
  batteryStatuses,
  weatherStatuses,
  deploymentStatuses,
};
