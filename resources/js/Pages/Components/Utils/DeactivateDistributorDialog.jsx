import React from 'react'

import DeleteIcon from "../../../assets/delete-icon.svg?react";
import CancelIcon from "../../../assets/cancel.svg?react"

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
            <AlertDialogCancel
            className="border-none flex justify-end"
            >
                <CancelIcon/>
            </AlertDialogCancel>
        <AlertDialogHeader>
            <DeleteIcon className="self-center"/>
        <AlertDialogTitle className="block text-white font-league text-2xl self-center">Are you sure you want to deactivate?</AlertDialogTitle>
        <AlertDialogDescription className="text-center text-white font-league font-light text-lg">
            Proceeding this action would also delete your brands and inventory.
        </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
                <div className='w-[60%]'>
                    <AlertDialogAction 
                        className="bg-[#FF4C29] text-white font-league text-lg w-full mt-4">
                        Continue
                    </AlertDialogAction>
                </div>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeactivateDistributorDialog;
