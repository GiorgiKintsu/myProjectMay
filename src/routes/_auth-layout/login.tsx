import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BlockIcon, ProfileIcon } from "../../components/icons";
import { useState } from "react";
import { AuthData } from "../../types/authType";
import axios from "axios";
import Cookies from "js-cookie";

export const Route = createFileRoute("/_auth-layout/login")({
  component: Login,
});

function Login() {
  const [authData, setAuthData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  console.log(authData);

  const login = (e) => {
    e.preventDefault();
    axios.post("https://dummyjson.com/auth/login", authData).then((res) => {
      Cookies.set("token", res.data.token);
      navigate({ to: "/" });
    });
  };

  return (
    <>
      <div className="bg-[#e5cb00]  w-[100%] rounded-[20px] h-full shadow-sm flex justify-center items-center animate-visibility">
        <form onSubmit={login}>
          <section className="flex flex-col items-center gap-[15px]">
            <h2 className="text-[22px] text-[black] font-bold uppercase">
              login
            </h2>
            <div className="w-[400px] h-[50px] flex items-center border-solid border-[black] border-[1px] rounded-[5px] px-[10px]">
              <input
                type="text"
                placeholder="Username"
                className="w-[95%] h-full bg-transparent placeholder-black focus:outline-none focus:border-transparent"
                onChange={(e) =>
                  setAuthData((state) => ({
                    ...state,
                    username: e.target.value,
                  }))
                }
              />
              <ProfileIcon fill="black" />
            </div>
            <div className="w-[400px] h-[50px] flex items-center border-solid border-[black] border-[1px] rounded-[5px] px-[10px]">
              <input
                type="text"
                placeholder="Username"
                className="w-[95%] h-full bg-transparent text-[black] placeholder-black focus:outline-none focus:border-transparent"
                onChange={(e) =>
                  setAuthData((state) => ({
                    ...state,
                    password: e.target.value,
                  }))
                }
              />
              <BlockIcon fill="black" />
            </div>
            <div className="flex justify-end w-[100%]">
              <div className="cursor-pointer">
                <h5>forger password</h5>
              </div>
            </div>
            <button
              className="w-[100%] h-[50px] bg-[#f7f0b7] border-solid border-[1px] border-[black] rounded-[5px]"
              type="submit"
            >
              login
            </button>
          </section>
        </form>
      </div>
    </>
  );
}
