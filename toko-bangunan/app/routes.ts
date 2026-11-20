import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("produk", "routes/products.tsx"),
  route("tentang", "routes/about.tsx"),
  route("kontak", "routes/contact.tsx"),
] satisfies RouteConfig;
