import React, { useState } from 'react'
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import AddToCartDialogue from '../Utils/AddToCartDialogue';

import { Button } from "@/components/ui/button";
import ArrowIcon from "../../../assets/arrow.svg?react";

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

function MyCart() {

    
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
                My Cart
            </label>
            <div className="flex w-full bg-[#213243] h-[25%] p-5">
                <div className='w-[27px] h-[27px] self-center ml-4 mr-8 border-solid border-2 border-white text-transparent'>
                0
                </div>
                <div>
                    <img
                    src="https://cdn.shoppable.ph/ef24cde2-2827-401b-a685-e888e3d0cbcd.jpg"
                    alt="Product Image"
                    className="rounded-sm h-full w-full"
                    />
                </div>
                <div className='pl-5'>
                    <div className="text-white font-league font-semibold text-2xl text-[1.7rem] pt-3">
                    SPAM Less Sodium Luncheon Meat
                    </div>
                    <div>
                        <label className="block text-white font-league font-light text-xl mb-2 mt-2">
                                    Product Variant
                        </label>
                    </div>
                    <div className='mt-2 flex flex-row'>
                        <Select>
                            <SelectTrigger className="w-[550px] h-[3rem] bg-[#515E71] border-[#515E71] font-league font-light text-lg text-[#B1B1B1] rounded-sm">
                                <SelectValue placeholder="SPAM 25% LESS SODIUM 340G/GR" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#515E71] border-[#082032] font-league font-light text-lg text-[#B1B1B1]">
                                <SelectItem value="variant1">SPAM 25% LESS SODIUM 340G/GR</SelectItem>
                                <SelectItem value="variant2">SPAM 25% LESS SODIUM 500G/GR</SelectItem>
                                <SelectItem value="variant3">SPAM 25% LESS SODIUM 1000G/GR</SelectItem>
                            </SelectContent>
                        </Select>
                            <div className='flex pl-3 space-x-3 pt-1'>
                            <Button 
                            variant="outline"
                            className="rounded p-3 bg-[#515E71] border-none"
                            >
                                <ArrowIcon className="transform rotate-180"/>
                            </Button>
                                <Form {...form}>
                                    <div className='flex space-y-5'>
                                        <FormField
                                            control={form.control}
                                            name="addQuantity"
                                            render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                <Input 
                                                placeholder = { quantity }
                                                className="w-[3rem] bg-[#515E71] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-500"/>
                                            </FormItem>
                                            )}
                                        />
                                    </div>
                                </Form>
                            <Button 
                            variant="outline"
                            className="rounded p-3 bg-[#515E71] border-none"
                            >
                                <ArrowIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
                    <div className='flex flex-col pl-[150px]'>
                        <div className='text-white font-league font-semibold text-3xl mb-2 mt-3 text-[#FF4C29]'>
                            PHP200
                        </div>
                    </div>
            </div>
        </div>
        <div className="flex flex-row gap-4 w-full bg-[#515E71] p-8 h-[11%]">
            <div className='w-[27px] h-[27px] ml-5 border-solid border-2 border-slate-800 bg-[#515E71] text-transparent mt-2'>
            0
            </div>
            <div className="text-white font-league font-semibold text-2xl mt-2">
                All
            </div>
            <div className="text-[#FF4C29] font-league font-semibold text-2xl ml-[800px] flex flex-row mt-2">
                Total:
                <p className='text-white pl-2'>
                    PHP 1000
                </p>
            </div>
            <div className='ml-10'>
                {/* <AddToCartDialogue/>  */}
            </div>
        </div>
    </main>
  )
}

MyCart.layout = (page) => (<CustomerSideBarLayout>{page}</CustomerSideBarLayout>);
export default MyCart;
