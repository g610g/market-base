import React from "react";
import SideBarLayout from "../Layouts/SideBarLayout";
import SearchIcon from "../../../assets/search.svg?react";
import GridCard from "../Utils/GridCard";
function AdminDistributor() {
    console.log("Test admin distributor")
    const distruborsData = [
        {
            name: "Mary Soliva",
            merchantStoreNumber: 2,
            brandsNumber: 5,
            productNumber: 7,
        },
        {
            name: "Gio Gonzales",
            merchantStoreNumber: 2,
            brandsNumber: 5,
            productNumber: 7,
        },
        {
            name: "Errol  Bantono",
            merchantStoreNumber: 2,
            brandsNumber: 5,
            productNumber: 7,
        },
        {
            name: "Yvanne Josh Agot",
            merchantStoreNumber: 2,
            brandsNumber: 5,
            productNumber: 7,
        },
        {
            name: "Klinth Matugas",
            merchantStoreNumber: 2,
            brandsNumber: 5,
            productNumber: 7,
        },
        {
            name: "Fritzie Nunez",
            merchantStoreNumber: 2,
            brandsNumber: 5,
            productNumber: 7,
        },
        {
            name: "Armiex Jay Roble",
            merchantStoreNumber: 2,
            brandsNumber: 5,
            productNumber: 7,
        },
        {
            name: "Ranidel Pinera",
            merchantStoreNumber: 2,
            brandsNumber: 5,
            productNumber: 7,
        },
    ];
    return (
        <main className="max-h-screen h-screen flex flex-col">
            <div
                className="flex w-full justify-between items-center"
                id="top-header"
            >
                <div className="flex w-[21%] justify-between items-center">
                    <div className="font-league text-white text-[1.5rem] py-2 px-7 bg-loginMain rounded-[.5rem]">
                        See All Distributors
                    </div>
                    <div className="font-league text-white text-[1.5rem] p-3 bg-loginMain rounded-[.5rem]">
                        <SearchIcon />
                    </div>
                </div>
                <div className="w-[30%] text-right">Pagination</div>
            </div>
            <div
                id="main-content"
                className="h-[75%] mt-[0.5rem] grid grid-cols-4 gap-x-3 gap-y-3"
            >
                {distruborsData.map((data, index) => (
                    <GridCard data={data} id={index} />
                ))}
            </div>
        </main>
    );
}
AdminDistributor.layout = (page) => <SideBarLayout>{page}</SideBarLayout>;

export default AdminDistributor;
