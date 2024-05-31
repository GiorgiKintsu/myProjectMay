import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth-layout")({
  component: AuthLayout,
});

function AuthLayout() {
  return <Outlet />;
}
