import React from 'react'

function DistributorInventoryTable({ tableContent }) {
    const headers = [
        "Product ID",
        "Product Name",
        "Brand Name",
        "Product Variants",
        "Product Quantity",
        "Product Pricing",
    ];
  return (
    <div className="flex flex-col  max-h-full overflow-auto ">
        <div className=" h-full">
            <table className="w-full text-left text-sm font-light h-full max-w-full">
                <thead className=" py-4 font-league text-white  text-lg bg-[#2C394B]">
                    <tr>
                        {headers.map((header) => (
                            <th scope="col" className="px-6 py-2">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableContent.map((data, index) => (
                        <tr
                            className="text-white font-league h-[5rem]  border-b border-black text-[1.5rem]"
                            key={data.brandId}
                        >
                            <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[10rem]">
                                {data.productId}
                            </td>
                            <td className=" px-6 py-4 font-medium truncate max-w-[10rem]">
                                {data.productName}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[10rem]">
                                {data.brandName}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[6rem] w-[6rem]">
                                {data.productVariants}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[6rem] w-[6rem]">
                                {data.productQuantity}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[6rem] w-[6rem]">
                                {data.productPricing}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DistributorInventoryTable;
