import React, { useEffect, useState } from "react";
import { Link, router, usePage } from "@inertiajs/inertia-react";
const Authorize = ({ data }) => {
    console.log(usePage().props);
    return (
        <div>
            <h1 className="text-3xl font-bold underline text-red-500">
                aaaaTesting
            </h1>
            <Link href="/" method="get">
                Go To Home
            </Link>
            <Link href="/test" method="post" as="button">
                Post to test
            </Link>
        </div>
    );
};

export default Authorize;
