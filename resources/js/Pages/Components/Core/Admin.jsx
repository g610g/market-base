import React from "react";
import SideBarLayout from "../Layouts/SideBarLayout";

function Admin() {
    return <div>Admin</div>;
}

Admin.layout = (page) => <SideBarLayout>{page}</SideBarLayout>;
export default Admin;
