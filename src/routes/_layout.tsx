import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import Cookies from "js-cookie";

function Layout() {
  return (
    <div>
      <h3>Welcome Home!</h3>
      <Outlet />
    </div>
  );
}
export const Route = createFileRoute("/_layout")({
  beforeLoad: async () => {
    const token = Cookies.get("token");
    if (!token) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: Layout,
});
