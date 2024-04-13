import React, { useEffect, useState } from "react";
import { Link, router } from "@inertiajs/inertia-react";
import LoginLayout from "./Components/Layouts/LoginLayout.jsx";
import MarketBaseLogo from "../assets/market-base-logo.svg?react";
const Test = ({ data }) => {
  console.log(data);
  console.log("renders");
  useEffect(() => {
    console.log("renders");
  }, []);
  return (
    <LoginLayout>
      <div>
        <h1 className="text-3xl font-bold underline text-red-500">
          testaaaaTesting
        </h1>
        <Link href="/" method="get">
          Go To Home
        </Link>
        <Link href="/test" method="post" as="button">
          Post to test
        </Link>
      </div>
    </LoginLayout>
  );
};

export default Test;
