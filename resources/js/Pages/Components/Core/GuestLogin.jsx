import React from "react";
import { Link } from "@inertiajs/inertia-react";
export default function GuestLogin({ sessionData }) {
  console.log(sessionData);
  return (
    <div>
      <Link href="/guest/login" as="button" method="post">
        Proceed as guest
      </Link>
    </div>
  );
}
// GuestLogin.layout = (page) => <Layout children={page} />;
