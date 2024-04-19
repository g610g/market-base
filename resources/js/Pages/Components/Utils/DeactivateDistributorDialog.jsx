import React from 'react'

import DeleteIcon from "../../../assets/delete-icon.svg?react";

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
  } from "@/components/ui/alert-dialog"

function DeactivateDistributorDialog() {
  return (
    <AlertDialog>
    <AlertDialogTrigger className="p-3 bg-[#FF4C29] h-[3.5rem] text-white font-league text-lg rounded mt-4 w-full">
        Deactivate Distributor Account
    </AlertDialogTrigger>
    <AlertDialogContent className="bg-[#19273A]">
        <AlertDialogHeader>
            <DeleteIcon className="self-center"/>
        <AlertDialogTitle className="block text-white font-league text-2xl self-center">Are you sure you want to delete?</AlertDialogTitle>
        <AlertDialogDescription className="text-center text-white font-league font-light text-lg">
            This action cannot be undone. Proceeding this action would also cascade the products you added.
        </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-[#FF4C29] text-white">Continue</AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeactivateDistributorDialog;
