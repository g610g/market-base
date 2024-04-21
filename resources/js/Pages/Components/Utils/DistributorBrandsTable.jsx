import React from "react";

function DistributorBrandsTable({ tableContent }) {
    const headers = [
        "Brand ID",
        "Product ID",
        "Product Name",
        "Product Variants",
        "Product Quantity",
    ];
    return (
        <div className="flex flex-col  max-h-full overflow-auto ">
            <div className=" h-full">
                <table className="w-full text-left text-sm font-light h-full max-w-full">
                    <thead className=" py-4 font-league text-white  text-lg bg-[#2C394B]">
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    scope="col"
                                    className="px-6 py-2"
                                    key={index}
                                >
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
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[6rem]">
                                    {data.brand_id}
                                </td>
                                <td className=" px-6 py-4 font-medium truncate max-w-[6rem]">
                                    {data.product_id}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[6rem]">
                                    {data.product_name}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[3rem] ">
                                    {data.variant}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[6rem] w-[8rem]">
                                    {data.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DistributorBrandsTable;
