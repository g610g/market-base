import React from "react";

function DistributorDialogTable({ brandStore }) {
    const headers = ["Brand ID", "Brand Name", "Merchant Store", "Total Sales"];
    const tableContent = [
        {
            brand_id: 11234,
            brand_name: "Test",
            merchantStore: "Test Merchant Store",
            totalSales: 12333,
        },
        {
            brand_id: 11234,
            brand_name: "Test",
            merchantStore: "Test Merchant Store",
            totalSales: 12333,
        },
        {
            brand_id: 11234,
            brand_name: "Test",
            merchantStore: "Test Merchant Store",
            totalSales: 12333,
        },
        {
            brand_id: 11234,
            brand_name: "Test",
            merchantStore: "Test Merchant Store",
            totalSales: 12333,
        },
        {
            brand_id: 11234,
            brand_name: "Test",
            merchantStore: "Test Merchant Store",
            totalSales: 12333,
        },
        {
            brand_id: 11234,
            brand_name: "Test",
            merchantStore: "Test Merchant Store",
            totalSales: 12333,
        },
    ];
    return (
        <div className="flex flex-col  max-h-full overflow-auto ">
            <div className=" h-full ">
                <table className="min-w-full text-left  text-sm font-light h-full max-w-full max-h-full">
                    <thead className=" py-2 font-league text-white  text-[1rem] border-b border-black">
                        <tr>
                            {headers.map((header) => (
                                <th scope="col" className="px-3 py-3">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="">
                        {brandStore.map((data, index) => (
                            <tr
                                className="text-white font-league h-full  border-b border-black text-[1rem]"
                                key={data.brand_id}
                            >
                                <td className="whitespace-nowrap px-2 py-2 font-medium truncate max-w-[2rem]">
                                    {data.brand_id}
                                </td>
                                <td className=" px-6 py-4 font-medium truncate max-w-[5rem]">
                                    {data?.brand_name}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[5rem]">
                                    {data?.merchant_store.store_name}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[6rem] w-[6rem]">
                                    12430
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DistributorDialogTable;
