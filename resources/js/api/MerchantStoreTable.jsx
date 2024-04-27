import DeleteAlertDialog from "@/Components/Utils/DeleteAlertDialog";
import { TrashIcon } from "lucide-react";

export const columns = [
    {
        accessorKey: "storeId",
        header: "Store Id",
    },
    {
        accessorKey: "storeName",
        header: "Merchant Store Name",
    },
    { accessorKey: "brandsCount", header: "No. of Brands" },
    {
        accessorKey: "distributorsCount",
        header: "No. of Distributors",
    },
    {
        accessorKey: "productsCount",
        header: "No. of Products",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status");
            return (
                <div className="">
                    <p
                        className={`py-3 px-4 rounded-md text-2xl ${
                            status ? "text-textGreen" : "text-textRed"
                        } font-league font-light bg-[#19273A]`}
                    >
                        {status ? "Open" : "Close"}
                    </p>
                    {/* <DeleteAlertDialog id={id}>
                        <TrashIcon />
                    </DeleteAlertDialog> */}
                    {/* <button className="">Delete</button> */}
                </div>
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const cellRow = row.original;
            return (
                <DeleteAlertDialog id={cellRow.storeId}>
                    <TrashIcon />
                </DeleteAlertDialog>
            );
        },
    },
];
