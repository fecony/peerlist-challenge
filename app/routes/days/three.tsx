import type { Route } from "./+types/three";
import Three from "~/screens/days/three";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Peerlist challenges | Day 3" }];
}

export default function DayThree() {
  return <Three />;
}
