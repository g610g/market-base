import React from "react";
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
import { Button } from "@/components/ui/button";
import { Inertia } from "@inertiajs/inertia";
function DeleteAlertDialog({ children, id }) {
    function handleDelete() {
        Inertia.delete(`/admin/store/${id}`);
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive" className="px-2 py-1 rounded-lg">
                    {children}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-mainBg">
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-league text-orangeButton text-2xl">
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-white font-league">
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers."
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default DeleteAlertDialog;
