import React from 'react'
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button";
import { Rating, Textarea } from "@material-tailwind/react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import RatedTransactionDialog from '../Utils/RatedTransactionDialog';
  

function Transactions() {

  return (
    <main className="max-h-screen h-screen flex flex-col px-2">
        <div className="flex flex-col space-y-7 w-full bg-slate-800 p-8 h-[85%]">
            <label className="text-white font-league font-semibold text-4xl text-[1.7rem] pt-3">
                My Orders
            </label>
            <label className="block text-white font-league font-light text-xl mt-2">
                Today
            </label>
            <div className="flex w-full bg-[#213243] h-[25%] p-4">
                <Checkbox className="ml-5 mr-10 border-white self-center"/>
                    <div>
                        <img
                        src="https://cdn.shoppable.ph/ef24cde2-2827-401b-a685-e888e3d0cbcd.jpg"
                        alt="Product Image"
                        className="rounded-sm h-full w-full"
                        />
                    </div>
                    <div className='pl-5 mr-20'>
                        <div className="text-white font-league font-semibold text-2xl text-[1.7rem] pt-3">
                        SPAM Less Sodium Luncheon Meat
                        </div>
                        <div>
                            <label className="block text-[#B1B1B1] font-league font-light text-xl mt-2">
                                SPAM 25% LESS SODIUM 340G/GR
                            </label>
                        </div>
                        <div>
                            <div className="w-full flex">
                                <Rating value={4} ratedColor="red" />
                                <p className="font-league text-white text-lg ml-3 mt-1">No Rating</p>
                            </div>
                        </div>
                        <div className='mt-2 pl-7 pt-1 bg-[#515E71] w-[30%] rounded font-league text-white'>
                        Delivered
                        </div>
                    </div>
                    <div>
                        <div className='p-4 space-y-2 flex flex-col'>
                            <Button 
                            variant="outline"
                            className="rounded text-white font-league border-solid border-2 border-[#515E71] w-[300px] p-7 text-lg"
                            >
                                Get Invoice
                            </Button>
                            <Sheet>
                            <SheetTrigger 
                            className="rounded text-white font-league bg-[#FF4C29] w-[300px] p-3 text-lg"
                            >
                                Rate Transaction
                            </SheetTrigger>
                            <SheetContent
                            className="bg-[#213243]"
                            >
                                <SheetHeader>
                                <SheetTitle className="mt-9">
                                <label className="text-white font-league font-semibold text-4xl pt-3">
                                    Rate Transaction
                                </label>
                                </SheetTitle>
                                <SheetDescription>
                                    <div>
                                        <label className="block text-white font-league font-light text-xl mb-2 mt-2">
                                            Product Quality
                                        </label>
                                        <div className="w-full flex flex-row">
                                            <Rating value={4} ratedColor="red" />
                                            <p className="font-league text-white text-lg ml-3 mt-1">No Rating</p>
                                        </div>
                                        <div>
                                            <p className="font-league text-[#FF4C29] text-lg mt-1">Satisfactory!</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-white font-league font-light text-xl mb-2 mt-2">
                                            Service Transaction
                                        </label>
                                        <div className="w-full flex flex-row">
                                            <Rating value={4} ratedColor="red" />
                                            <p className="font-league text-white text-lg ml-3 mt-1">No Rating</p>
                                        </div>
                                        <div>
                                            <p className="font-league text-[#FF4C29] text-lg mt-1">Satisfactory!</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-white font-league font-light text-xl mb-2 mt-4">
                                            Comments
                                        </label> 
                                        <Textarea/> 
                                    </div>
                                    <div className='mt-4 flex w-full pl-6'>
                                        <RatedTransactionDialog/>
                                    </div>
                                </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                            </Sheet>

                        </div>
                    </div>
                    <div className='ml-2 pt-4'>
                            <Button 
                            variant="default"
                            className="rounded text-white font-league bg-[#515E71] w-full pt-10 pb-20 text-lg"
                            >
                                Delete Order History
                            </Button>
                    </div>
            </div>
        </div>
    </main>
  )
}

Transactions.layout = (page) => (<CustomerSideBarLayout>{page}</CustomerSideBarLayout>);
export default Transactions
