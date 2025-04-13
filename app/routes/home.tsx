import { Link } from "react-router";
import type { Route } from "./+types/home";
import { CircleCheck, CircleDashed, ExternalLink } from "lucide-react";
import Home from "~/screens/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Peerlist challenges" },
    { name: "description", content: "Peerlist daily challenges" },
  ];
}
export default function Page() {
  return <Home />;
}
