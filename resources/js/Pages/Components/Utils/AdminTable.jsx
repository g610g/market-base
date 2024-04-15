import React from "react";
import AdminStatusTable from "./AdminStatusTable";

function AdminTable() {
    const headers = [
        "Merchant ID",
        "Merchant Store Name",
        "No. of Brands",
        "No. of Distributors",
        "No. of Products",
        "Status",
    ];
    const tableContent = [
        {
            id: "123123819310983910831038108w123813793712837192879831937197",
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Open",
        },
        {
            id: 1,
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Close",
        },
        {
            id: 1,
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Open",
        },
        {
            id: 1,
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Close",
        },
        {
            id: 1,
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Open",
        },
        {
            id: 1,
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Open",
        },
        {
            id: 1,
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Open",
        },
        {
            id: 1,
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Open",
        },
        {
            id: 1,
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Open",
        },
        {
            id: 1,
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Open",
        },
        {
            id: 1,
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Open",
        },
        {
            id: 1,
            store_name: "Testing Merchant Name",
            brands: 23,
            distributors: 5,
            products: 1,
            status: "Close",
        },
    ];
    return (
        <div className="flex flex-col  max-h-full overflow-auto ">
            <div className=" h-full">
                <table className="min-w-full text-left text-sm font-light h-full max-w-full">
                    <thead className=" py-4 font-league text-white  text-xl bg-[#2C394B]">
                        <tr>
                            {headers.map((header) => (
                                <th scope="col" className="px-6 py-4">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent.map((data, index) => (
                            <tr
                                className="text-white font-league h-[5rem]  border-b border-black text-[1.5rem]"
                                key={index}
                            >
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[10rem]">
                                    {data.id}
                                </td>
                                <td className=" px-6 py-4 font-medium truncate max-w-[10rem]">
                                    {data.store_name}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[10rem]">
                                    {data.brands}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[6rem] w-[6rem]">
                                    {data.distributors}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[4rem] w-[4rem]">
                                    {data.products}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[7rem]">
                                    <AdminStatusTable status={data.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminTable;
