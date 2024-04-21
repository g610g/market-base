import React from "react";
import { usePage } from "@inertiajs/inertia-react";
export default function PrimaryLayout({ children }) {
    const { flash } = usePage().props;
    return (
        <div className="h-screen max-w-screen px-8 py-8 ">
            <h1 className="text-white"></h1>
            <div>{children}</div>
        </div>
    );
}
