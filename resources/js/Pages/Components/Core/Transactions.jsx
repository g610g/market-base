import React, { useState } from 'react'
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button";
import { Rating } from "@material-tailwind/react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { useForm } from "react-hook-form";
  import { z } from "zod";
  import { zodResolver } from "@hookform/resolvers/zod";
  
    import {
      Form,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
    } from "@/components/ui/form"
    import { Input } from "@/components/ui/input"

    const formSchema = z.object({
        addQuantity: z.string().min(2, {
          message: "Quantity must be at least 2 characters.",
        }),
      })

function Transactions() {
    const [ quantity, setQuantity ] = useState(0);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            addQuantity: quantity,
        },
      })
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
                                <p className="font-league text-[#FF4C29] text-lg ml-9 mt-1">Order Total: 200</p>
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
                            <Button 
                            variant="default"
                            className="rounded text-white font-league bg-[#FF4C29] w-[300px] p-7 text-lg"
                            >
                                Rate Transaction
                            </Button>
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
