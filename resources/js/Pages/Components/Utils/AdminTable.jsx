import React from "react";
import AdminStatusTable from "./AdminStatusTable";

function AdminTable({ tableContent }) {
    const headers = [
        "Merchant ID",
        "Merchant Store Name",
        "No. of Brands",
        "No. of Distributors",
        "No. of Products",
        "Status",
    ];
    // console.log(tableContent);
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
                                key={data.store_id}
                            >
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[10rem]">
                                    {data.store_id}
                                </td>
                                <td className=" px-6 py-4 font-medium truncate max-w-[10rem]">
                                    {data.store_name}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[10rem]">
                                    Testing Only
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[6rem] w-[6rem]">
                                    Testing Only
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[4rem] w-[4rem]">
                                    Testing Product
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[7rem]">
                                    <AdminStatusTable
                                        status={data.is_open}
                                        id={data.store_id}
                                    />
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
