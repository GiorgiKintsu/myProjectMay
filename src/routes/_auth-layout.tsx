import { Outlet, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_auth-layout")({
  component: AuthLayout,
});

function AuthLayout() {
  const [authClicked, setAuthClicked] = useState<boolean>(true);
  return (
    <div className="flex w-full h-screen relative">
      <aside className="w-[50%] bg-[#ccb405]"></aside>
      <aside className="w-[50%] bg-[black]"></aside>

      {authClicked ? (
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[60px] rounded-[20px] flex items-center justify-center bg-[#e5cb00]"
          onClick={() => setAuthClicked(!authClicked)}
        >
          <h1 className="text-[24px] font-semibold cursor-pointer">ENTER</h1>
        </div>
      ) : (
        <div className=" animate-increase absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%-200px)] h-[calc(100%-200px)] px-[100px] pt-[100px] pb-[100px]">
          <Outlet />
        </div>
      )}
    </div>
  );
}
