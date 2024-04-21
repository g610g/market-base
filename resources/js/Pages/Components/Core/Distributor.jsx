import React from "react";
import DistributorSideBarLayout from "../Layouts/DistributorSideBarLayout";

function Distributor({ merchant_store_data }) {
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
                    id="brands"
                    className="w-[68%] bg-[#334756] rounded-md p-5"
                >
                    <p className="text-white font-league font-bold text-[2rem]">
                        Brands
                    </p>
                </div>
                <div
                    id="ratings"
                    className="w-[30%] bg-[#334756] rounded-md p-5"
                >
                    <p className="text-white font-league font-bold text-[1.7rem]">
                        Rating
                    </p>
                </div>
            </div>
            <div
                className="bg-[#334756] h-[20%] mt-6 rounded-md p-5"
                id="product-sales"
            >
                <p className="text-white font-league font-bold text-[1.7rem]">
                    Product Sales
                </p>
            </div>
        </main>
    );
}

Distributor.layout = (page) => (
    <DistributorSideBarLayout>{page}</DistributorSideBarLayout>
);
export default Distributor;
