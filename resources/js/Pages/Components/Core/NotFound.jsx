import { Link } from "@inertiajs/inertia-react";
import React from "react";

function NotFound() {
    return (
        <main
            className="grid min-h-[40rem]
         place-items-center px-6 py-[1.4rem] sm:py-20 lg:px-8 overflow-hidden"
        >
            <div className="text-center ">
                <p className="text-[3rem] font-bold text-indigo-600">404</p>
                <h1 className="mt-4  text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/"
                        className="rounded-md bg-orangeButton px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go back home
                    </Link>
                    <a href="#" className="text-sm font-semibold text-white">
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </main>
    );
}

export default NotFound;
