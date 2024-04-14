import React from "react";
import SideBarLayout from "../Layouts/SideBarLayout";

function Admin({ merchant_store_data }) {
  console.log(merchant_store_data);
  return <div>Admin</div>;
}

Admin.layout = (page) => <SideBarLayout>{page}</SideBarLayout>;
export default Admin;
