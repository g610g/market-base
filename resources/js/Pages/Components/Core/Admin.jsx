import React from "react";
import SideBarLayout from "../Layouts/SideBarLayout";

function Admin({ merchant_store_data }) {
    console.log(merchant_store_data);
    return (
        <main className="max-h-screen h-screen flex flex-col">
            <div id="overview" className="flex w-full justify-between">
                <p className="text-white font-bold text-[3.2rem] font-league">
                    Overview
                </p>
            </div>
            <div className="flex justify-between h-[50%]">
                <div
                    id="merchant-stores"
                    className="w-[68%] bg-[#334756] rounded-md p-5"
                >
                    <p className="text-white font-league font-bold text-[2rem]">
                        Merchant Stores
                    </p>
                </div>
                <div id="sales" className="w-[30%] bg-[#334756] rounded-md p-5">
                    <p className="text-white font-league font-bold text-[1.7rem]">
                        Sales
                    </p>
                </div>
            </div>
            <div
                className="bg-[#334756] h-[20%] mt-6 rounded-md p-5"
                id="admin-profile"
            >
                <p className="text-white font-league font-bold text-[1.7rem]">
                    User Profiles
                </p>
            </div>
        </main>
    );
}

Admin.layout = (page) => <SideBarLayout>{page}</SideBarLayout>;
export default Admin;
