import { MoreHorizontal } from "lucide-react";
import { Link } from "@inertiajs/inertia-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const columns = [
    {
        accessorKey: "productId",
        header: "Product Id",
    },
    {
        accessorKey: "productName",
        header: "Product Name",
    },
    { accessorKey: "brandName", header: "Brand Name" },
    {
        accessorKey: "variant",
        header: "Variant",
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right"> Price</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"));
            const formatted = new Intl.NumberFormat("en-PH", {
                style: "currency",
                currency: "PHP",
            }).format(amount);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },

    {
        id: "actions",
        cell: ({ row }) => {
            const product = row.original;

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
                        className="bg-orangeButton"
                    >
                        <DropdownMenuLabel className="text-white">
                            Actions
                        </DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(product.productId)
                            }
                            className="text-white hover:text-indigo-600"
                        >
                            Copy Product ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-white hover:text-indigo-600">
                            <Link
                                href={`/distributor/products/${product.productId}`}
                                method="delete"
                                as="button"
                            >
                                Delete product
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
