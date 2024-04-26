import React from "react";

import CancelIcon from "../../../assets/cancel.svg?react";
import AddIcon from "../../../assets/add-cart.svg?react";
import { Link } from "@inertiajs/inertia-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function AddToCartDialogue() {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="bg-[#FF4C29] h-[3rem] rounded text-white font-league font-semibold text-lg pt-3 p-9">
                Add To Cart
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#19273A] border-none">
                <AlertDialogCancel className="border-none flex justify-end">
                    <CancelIcon />
                </AlertDialogCancel>
                <AlertDialogHeader>
                    <AddIcon className="self-center mb-4 fill-[#FF4C29]" />
                    <AlertDialogTitle className="block text-white font-league text-2xl self-center">
                        Product Added Successfully!
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <div className="w-[60%] bg-[#FF4C29] text-white font-league text-lg  hover:bg-indigo-600 p-3 rounded-[.5rem] text-center">
                        <Link href="/customer/shop" as="button" method="get">
                            Continue
                        </Link>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default AddToCartDialogue;
