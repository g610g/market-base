import DeleteAlertDialog from "@/Components/Utils/DeleteAlertDialog";
import { TrashIcon } from "lucide-react";

export const columns = [
    {
        accessorKey: "storeId",
        header: "Store Id",
        cell: ({ row }) => {
            const cellRow = row.getValue("storeId");
            return <div className="font-league text-xl">{cellRow}</div>;
        },
    },
    {
        accessorKey: "storeName",
        header: "Merchant Store Name",
        cell: ({ row }) => {
            const cellRow = row.getValue("storeName");
            return <div className="font-league text-xl">{cellRow}</div>;
        },
    },
    {
        accessorKey: "brandsCount",
        header: "No. of Brands",
        cell: ({ row }) => {
            const cellRow = row.getValue("brandsCount");
            return <div className="font-league text-xl">{cellRow}</div>;
        },
    },
    {
        accessorKey: "distributorsCount",
        header: "No. of Distributors",
        cell: ({ row }) => {
            const cellRow = row.getValue("distributorsCount");
            return <div className="font-league text-xl">{cellRow}</div>;
        },
    },
    {
        accessorKey: "productsCount",
        header: "No. of Products",
        cell: ({ row }) => {
            const cellRow = row.getValue("productsCount");
            return <div className="font-league text-xl">{cellRow}</div>;
        },
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
