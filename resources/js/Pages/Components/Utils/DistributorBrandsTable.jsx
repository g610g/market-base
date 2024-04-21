import React from "react";
import { columns } from "../../../api/BrandTableData";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
} from "@tanstack/react-table";
function DistributorBrandsTable({ tableContent }) {
    //tranform table Content
    const data = tableContent.map((data) => {
        return {
            brandId: data.brandData.brand_id,
            brandName: data.brandData.brand_name,
            totalProducts: data.productsCount,
            merchantStore: data.brandData.merchant_store.store_name,
        };
    });
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });
    return (
        <div className="rounded-md max-h-full overflow-auto">
            <Table>
                <TableHeader className="bg-[#19273A] text-white font-league font-bold text-2xl">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="min-w-full text-white">
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                className="border-black"
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
        // <div className="flex flex-col  max-h-full overflow-auto ">
        //     <div className=" h-full">
        //         <table className="w-full text-left text-sm font-light h-full max-w-full">
        //             <thead className=" py-4 font-league text-white  text-lg bg-[#2C394B]">
        //                 <tr>
        //                     {headers.map((header, index) => (
        //                         <th
        //                             scope="col"
        //                             className="px-6 py-2"
        //                             key={index}
        //                         >
        //                             {header}
        //                         </th>
        //                     ))}
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {tableContent.map((data, index) => (
        //                     <tr
        //                         className="text-white font-league h-[5rem]  border-b border-black text-[1.5rem]"
        //                         key={index}
        //                     >
        //                         <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[6rem]">
        //                             {data.brandData.brand_id}
        //                         </td>
        //                         <td className=" px-6 py-4 font-medium truncate max-w-[6rem]">
        //                             {data.brandData.brand_name}
        //                         </td>
        //                         <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[6rem]">
        //                             {data.productsCount}
        //                         </td>
        //                         <td className="whitespace-nowrap px-6 py-4 font-medium truncate max-w-[3rem] ">
        //                             {data.brandData.merchant_store.store_name}
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    );
}

export default DistributorBrandsTable;
