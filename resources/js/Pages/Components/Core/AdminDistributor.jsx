import React from "react";
import SideBarLayout from "../Layouts/SideBarLayout";
import SearchIcon from "../../../assets/search.svg?react";
import GridCard from "../Utils/GridCard";
import Pagination from "../Utils/Pagination";
function AdminDistributor({ distributors }) {
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
                <div className="w-[30%] flex justify-end">
                    <Pagination
                        links={distributors.links}
                        prevPage={distributors.prev_page_url}
                        nextPage={distributors.next_page_url}
                    />
                </div>
            </div>
            <div
                id="main-content"
                className="h-[75%] mt-[0.5rem] grid grid-cols-4 gap-x-3 gap-y-3"
            >
                {Array.isArray(distributors.data)
                    ? distributors.data.map((distributor, index) => (
                          <GridCard distributor={distributor} id={index} />
                      ))
                    : [...distributors.data].map((distributor, index) => (
                          <GridCard distributor={distributor} id={index} />
                      ))}
            </div>
        </main>
    );
}
AdminDistributor.layout = (page) => <SideBarLayout>{page}</SideBarLayout>;

export default AdminDistributor;
