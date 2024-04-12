import React, { useState, useEffect } from "react";
import { router, Link } from "@inertiajs/inertia-react";
const Test = ({data}) => {
    console.log(data)
    console.log("renders")
    useEffect(() =>{
        console.log("renders")
    } , [])
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

export default Test;
