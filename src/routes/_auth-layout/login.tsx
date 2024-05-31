import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth-layout/login")({
  component: Login,
});

function Login() {
  return (
    <>
      <div className="bg-[red] w-[120px] h-[120px]">
        <h1 className="text-[red] font-extrabold text-[57px]">ra</h1>rame
      </div>
    </>
  );
}
