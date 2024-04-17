import React, { useState } from "react";
import SideBarLayout from "../Layouts/SideBarLayout";
import Pagination from "../Utils/Pagination";
import SearchIcon from "../../../assets/search.svg?react";
import AdminTable from "../Utils/AdminTable";
import DropDown from "../Utils/DropDown";
function AdminStore({ merchantData }) {
    //brands and product are the choices
    const [tableCategory, setTableCategory] = useState("Brands");
    const options = ["Brands", "Merchant"];
    console.log(merchantData);
    return (
        <main className="max-h-screen h-screen flex flex-col">
            <div
                className="flex w-full justify-between items-center"
                id="table-top-header"
            >
                <div className="w-[50%] flex justify-between items-center">
                    <div className="  font-semibold  bg-[#2C394B] py-2 px-[1rem] w-[40%] rounded-md ">
                        <DropDown
                            tableCategory={tableCategory}
                            setTableCategory={setTableCategory}
                            options={options}
                        />
                    </div>

                    <div className="text-white font-league font-semibold text-2xl bg-[#2C394B] py-2 px-[2rem] rounded-md">
                        Create Merchant Store
                    </div>
                    <div className="py-2 px-3 bg-[#2C394B] rounded-md">
                        <SearchIcon />
                    </div>
                </div>
                <div className="w-[50%] max-w-[50%] flex justify-end">
                    <Pagination
                        links={merchantData.links}
                        nextPage={merchantData.next_page_url}
                        prevPage={merchantData.prev_page_url}
                        currentPage={merchantData.currentPage}
                    />
                </div>
            </div>
            <div className="h-[75%] mt-[2rem] bg-[#334756]">
                {tableCategory === "Brands" ? (
                    <AdminTable tableContent={merchantData.data} />
                ) : (
                    <></>
                )}
            </div>
        </main>
    );
}
AdminStore.layout = (page) => <SideBarLayout>{page}</SideBarLayout>;

export default AdminStore;
