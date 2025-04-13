import type { Route } from "./+types/two";
import Two from "~/screens/days/two";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Peerlist challenges | Day 2" }];
}

export default function DayTwo() {
  return <Two />;
}
