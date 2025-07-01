import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("photos", "routes/photos.tsx"),
  route("thoughts", "routes/thoughts.tsx"),
] satisfies RouteConfig;
