import React, { useState } from "react";
import SideBarLayout from "../Layouts/SideBarLayout";
import Pagination from "../Utils/Pagination";
import SearchIcon from "../../../assets/search.svg?react";
import DropDown from "../Utils/DropDown";
import CreateMerchantModel from "../Utils/CreateMerchantModel";
import AdminStoreTable from "./AdminStoreTable";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
function AdminStore({ merchantData, merchantClasses }) {
    //brands and product are the choices
    const [tableCategory, setTableCategory] = useState("merchant");
    //handle error adding merchant stores
    console.log(merchantData);
    const options = ["brands", "merchant"];
    return (
        <main className="max-h-screen h-screen flex flex-col">
            <div
                className="flex w-full justify-between items-center"
                id="table-top-header"
            >
                <div className="w-[50%] flex justify-between items-center gap-4">
                    <Select
                        onValueChange={(value) => {
                            setTableCategory(value);
                        }}
                    >
                        <SelectTrigger className="w-full bg-[#2C394B] rounded-[.5rem] py-5 px-7 border-none text-white font-league font-semibold text-2xl">
                            <SelectValue placeholder="Select Table" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2C394B] text-white">
                            <SelectItem value="brands">Brands</SelectItem>
                            <SelectItem value="merchant">Merchant</SelectItem>
                        </SelectContent>
                    </Select>

                    <CreateMerchantModel merchantClasses={merchantClasses} />
                    <div className="py-2 px-3 bg-[#2C394B] rounded-md">
                        <SearchIcon />
                    </div>
                </div>
                <div className="w-[50%] max-w-[50%] flex justify-end">
                    <Pagination
                        links={merchantData.links}
                        nextPage={merchantData.next_page_url}
                        prevPage={merchantData.prev_page_url}
                    />
                </div>
            </div>
            <div className="h-[75%] mt-[2rem] bg-[#334756] rounded-2xl">
                {tableCategory === "merchant" ? (
                    <AdminStoreTable data={merchantData.data} />
                ) : (
                    <></>
                )}
            </div>
            {/* <div className="h-[75%] mt-[2rem] bg-[#334756]">
                {tableCategory === "Brands" ? (
                    <AdminTable tableContent={merchantData.data} />
                ) : (
                    <></>
                )}
            </div> */}
        </main>
    );
}
AdminStore.layout = (page) => <SideBarLayout>{page}</SideBarLayout>;

export default AdminStore;
