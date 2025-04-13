import type { Route } from "./+types/one";
import One from "~/screens/days/one";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Peerlist challenges | Day 1" }];
}

export default function DayOne() {
  return <One />;
}
