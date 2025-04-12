import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("day-1", "routes/days/one.tsx"),
  // route("day-2", "routes/days/two.tsx"),
  // route("day-3", "routes/days/three.tsx"),
  // route("day-4", "routes/days/four.tsx"),
  // route("day-5", "routes/days/five.tsx"),
] satisfies RouteConfig;
