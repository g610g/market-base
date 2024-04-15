import React from "react";
import SideBarLayout from "../Layouts/SideBarLayout";
import Pagination from "../Utils/Pagination";
import SearchIcon from "../../../assets/search.svg?react";
import AdminTable from "../Utils/AdminTable";
function AdminStore() {
    return (
        <main className="max-h-screen h-screen flex flex-col">
            <div
                className="flex w-full justify-between items-center"
                id="table-top-header"
            >
                <div className="w-[50%] flex justify-between items-center">
                    <div className="text-white font-league font-semibold text-2xl bg-[#2C394B] py-2 px-[2rem] rounded-md">
                        All Merchant Stores
                    </div>
                    <div className="text-white font-league font-semibold text-2xl bg-[#2C394B] py-2 px-[2rem] rounded-md">
                        Create Merchant Store
                    </div>
                    <div className="py-2 px-3 bg-[#2C394B] rounded-md">
                        <SearchIcon />
                    </div>
                </div>
                <div className="w-[50%] flex justify-end">
                    <Pagination />
                </div>
            </div>
            <div className="h-[60%] mt-[2rem] bg-[#334756]">
                <AdminTable />
            </div>
        </main>
    );
}
AdminStore.layout = (page) => <SideBarLayout>{page}</SideBarLayout>;

export default AdminStore;
