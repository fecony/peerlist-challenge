import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Peerlist challenges" },
    { name: "description", content: "Peerlist daily challenges" },
  ];
}

export default function Home() {
  return (
    <div className="flex">
      <span>day 1</span>
    </div>
  );
}
