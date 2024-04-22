import React from 'react'

import CancelIcon from "../../../assets/cancel.svg?react"
import AddIcon from "../../../assets/add-cart.svg?react"

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

function RatedTransactionDialog() {
  return (
    <AlertDialog>
    <AlertDialogTrigger className="bg-[#FF4C29] h-[3rem] rounded text-white font-league font-semibold text-lg pt-3 p-9">
        Submit Transaction Rating
    </AlertDialogTrigger>
    <AlertDialogContent className="bg-[#19273A] border-none">
            <AlertDialogCancel
            className="border-none flex justify-end"
            >
                <CancelIcon/>
            </AlertDialogCancel>
        <AlertDialogHeader>
            <AddIcon className="self-center mb-4"/>
        <AlertDialogTitle className="block text-white font-league text-2xl self-center">Order Rated Successfully!</AlertDialogTitle>
        {/* <AlertDialogDescription className="text-center text-white font-league font-light text-lg">
            This action cannot be undone. Proceeding this action would also cascade the products you added.
        </AlertDialogDescription> */}
        </AlertDialogHeader>
        <AlertDialogFooter>
            <div className='w-[60%]'>
                <AlertDialogAction 
                    className="bg-[#FF4C29] text-white font-league text-lg w-full">
                    Continue
                </AlertDialogAction>
            </div>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
  )
}

export default RatedTransactionDialog
