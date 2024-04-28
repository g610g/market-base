import React from "react";
import MarketBaseLogo from "../../../assets/market-base-logo.svg?react";
import { Link, usePage } from "@inertiajs/inertia-react";
export default function LoginLayout({ children }) {
    const { url } = usePage();
    console.log(url);
    const headers = [
        {
            id: 1,
            href: "/about",
            text: "About",
        },
        {
            id: 2,
            href: url === "/" ? "/register" : "/",
            text: url === "/" ? "Register" : "Login",
        },
        {
            id: 3,
            href: "/interact-as-guest",
            text: "Interact as Guest",
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
                            <Link
                                key={list.id}
                                className="text-white text-2xl font-bold font-league"
                                href={list.href}
                                method={
                                    list.href === "/interact-as-guest"
                                        ? "post"
                                        : "get"
                                }
                            >
                                {list.text}
                            </Link>
                        ))}
                    </div>
                </ul>
            </header>
            <div className="mt-10">{children}</div>
        </div>
    );
}
