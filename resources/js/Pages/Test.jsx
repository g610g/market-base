import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import LoginLayout from "./Components/Layouts/LoginLayout.jsx";
export default function Test({ data, error }) {
  console.log(data);
  if (error) {
    console.log(error);
  }
  return (
    <LoginLayout>
      <div>
        <h1 className="">Hello World</h1>
        <Link href="/test" method="get">
          Go To Test
        </Link>
        <Link
          href="/admin/login"
          method="post"
          as="button"
          data={{
            email: "runolfsdottir.maida@example.net",
            password: "password",
          }}
        >
          Login admin
        </Link>
      </div>
    </LoginLayout>
  );
}
