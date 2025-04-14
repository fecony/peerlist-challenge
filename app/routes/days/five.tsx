import type { Route } from "./+types/five";
import Five from "~/screens/days/five";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Peerlist challenges | Day 5" }];
}

export default function DayThree() {
  return <Five />;
}
