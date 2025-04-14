import type { Route } from "./+types/four";
import Four from "~/screens/days/four";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Peerlist challenges | Day 4" }];
}

export default function DayThree() {
  return <Four />;
}
