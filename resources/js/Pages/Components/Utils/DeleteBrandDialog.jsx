import React from 'react'

import TrashIcon from "../../../assets/trash.svg?react";
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

function DeleteBrandDialog() {
  return (
        <AlertDialog>
        <AlertDialogTrigger className="p-3 bg-[#FF4C29] h-[3.5rem] rounded">
            <TrashIcon />
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#19273A] border-none">
                <AlertDialogCancel
                className="border-none flex justify-end"
                >
                    <CancelIcon/>
                </AlertDialogCancel>
            <AlertDialogHeader>
                <DeleteIcon className="self-center"/>
            <AlertDialogTitle className="block text-white font-league text-2xl self-center">Are you sure you want to delete?</AlertDialogTitle>
            <AlertDialogDescription className="text-center text-white font-league font-light text-lg">
                This action cannot be undone. Proceeding this action would also cascade the products you added.
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

export default DeleteBrandDialog
