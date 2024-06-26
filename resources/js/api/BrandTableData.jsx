import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@inertiajs/inertia-react";
export const columns = [
    {
        accessorKey: "brandId",
        header: "Brand Id",
    },
    {
        accessorKey: "brandName",
        header: "Brand Name",
    },
    { accessorKey: "totalProducts", header: "Total Products" },
    {
        accessorKey: "merchantStore",
        header: "Merchant Store",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const brand = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className="bg-orangeButton text-white"
                    >
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(brand.brandId)
                            }
                        >
                            Copy brand ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link
                                href={`/distributor/brands/${brand.brandId}`}
                                method="delete"
                                as="button"
                            >
                                Delete brand
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
