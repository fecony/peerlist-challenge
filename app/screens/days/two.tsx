import { useEffect, useState } from "react";
import {
  StatusBadge,
  batteryStatuses,
  defaultStatuses,
  deploymentStatuses,
  weatherStatuses,
} from "~/components/days/two";

const useCyclingStatus = <T extends Record<string, any>>(statuses: T) => {
  const keys = Object.keys(statuses) as Array<keyof T>;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keys.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [keys.length]);

  return keys[index];
};

export default function Two() {
  const transactionKey = useCyclingStatus(defaultStatuses);
  const batteryKey = useCyclingStatus(batteryStatuses);
  const weatherKey = useCyclingStatus(weatherStatuses);
  const deployKey = useCyclingStatus(deploymentStatuses);

  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-6 p-8">
      <StatusBadge statuses={defaultStatuses} status={transactionKey} />
      <StatusBadge statuses={deploymentStatuses} status={deployKey} />
      <StatusBadge statuses={batteryStatuses} status={batteryKey} />
      <StatusBadge statuses={weatherStatuses} status={weatherKey} />
    </div>
  );
}
