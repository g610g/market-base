import React from "react";
import MarketBaseLogo from "../../../assets/market-base-logo.svg?react";
export default function LoginLayout({ children }) {
  const headers = [
    {
      id: 1,
      href: "/about",
      text: "About",
    },
    {
      id: 2,
      href: "/register",
      text: "Register",
    },
    {
      id: 3,
      href: "/guest/login",
      text: "Login as Guest",
    },
  ];
  return (
    <div className="mx-auto px-[7rem] py-2">
      <header className="w-full">
        <ul className="flex w-full justify-between items-center">
          <div className="w-1/2">
            <MarketBaseLogo />
          </div>
          <div className="flex-1 flex justify-between">
            {headers.map((list) => (
              <li
                key={list.id}
                className="text-white text-2xl font-bold font-league"
              >
                {list.text}
              </li>
            ))}
          </div>
        </ul>
      </header>
      <div>{children}</div>
    </div>
  );
}
