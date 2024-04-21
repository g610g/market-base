import React, { useState } from 'react'
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import { Rating } from "@material-tailwind/react";

import { Button } from "@/components/ui/button"
import CancelIcon from "../../../assets/cancel.svg?react";
import ArrowIcon from "../../../assets/arrow.svg?react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Textarea } from "@/components/ui/textarea"

import Vans from "../../../assets/vans.png";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

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
    productDescription: z.string().min(2, {
      message: "Product Description must be at least 2 characters.",
    }),
    productVariant: z.string().min(2, {
      message: "Product Variant must be at least 2 characters.",
    }),
    productQuantity: z.string().min(2, {
      message: "Product Quantity must be at least 2 characters.",
    }),
    productPrice: z.string().min(2, {
      message: "Product Price must be at least 2 characters.",
    }),
  })

function CustomerCart() {

    const [ quantity, setQuantity ] = useState(0);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          productDescription: "",
          productVariant: "",
          productQuantity: quantity,
          productPrice: "",
        },
      })

  return (
    <main className="max-h-screen h-screen flex flex-col px-2">
        <div
        className="flex w-full bg-slate-800 p-8 h-[50%]"
        id="product-details-section"
        >
            <div>
                <img
                src="https://cdn.shoppable.ph/ef24cde2-2827-401b-a685-e888e3d0cbcd.jpg"
                alt="Product Image"
                className="rounded-sm h-full w-[500px]"
                />
            </div>
            <div className='flex flex-col pl-5'>
                <div className="text-white font-league font-semibold text-4xl text-[1.7rem] pt-3">
                SPAM Less Sodium Luncheon Meat
                </div>
                <div>
                    <div className="w-full flex">
                        <Rating value={4} ratedColor="red" />
                        <p className="font-league text-white text-xl ml-3 mt-1">4.8</p>
                        <p className="font-league text-red-900 text-xl ml-3 mt-1">|  1.2k Sold  |</p>
                        <p className="font-league text-white text-xl ml-3 mt-1">Product Type</p>
                    </div>
                </div>
                <div className='mt-3'>
                    <label className="block text-white font-league font-light text-xl mb-2">
                        Product Description
                    </label>
                    <Textarea 
                    className="w-[760px] h-[6rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                    placeholder="Love the taste of SPAM® but watching your sodium intake? Introducing SPAM Less Sodium, the delicious answer to your cravings! This isn't your average low-sodium option. We've kept the iconic SPAM® Classic flavor you know and love, but slashed the sodium by 25%"
                    />
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='mt-3'>
                            <label className="block text-white font-league font-light text-xl mb-2">
                                Product Variant
                            </label>
                        <Select>
                            <SelectTrigger className="w-[550px] h-[3rem] bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm">
                                <SelectValue placeholder="SPAM 25% LESS SODIUM 340G/GR" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1]">
                                <SelectItem value="variant1">SPAM 25% LESS SODIUM 340G/GR</SelectItem>
                                <SelectItem value="variant2">SPAM 25% LESS SODIUM 500G/GR</SelectItem>
                                <SelectItem value="variant3">SPAM 25% LESS SODIUM 1000G/GR</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Form {...form}>
                            <div className='flex-1 space-y-5 mt-3'>
                                <FormField
                                    control={form.control}
                                    name="productQuantity"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="block text-white font-league font-light text-xl mb-2">Quantity</FormLabel>
                                        <FormControl>
                                        <Input 
                                        placeholder="2184" 
                                        className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                        {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500"/>
                                    </FormItem>
                                    )}
                                />
                            </div>
                        </Form>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div>
                        <Form {...form}>
                            <div className='flex-1 space-y-5 mt-3'>
                                <FormField
                                    control={form.control}
                                    name="productPrice"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="block text-white font-league font-light text-xl mb-2">Product Price</FormLabel>
                                        <FormControl>
                                        <Input 
                                        placeholder="PHP XXXX   " 
                                        className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                        {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500"/>
                                    </FormItem>
                                    )}
                                />
                            </div>
                        </Form>
                    </div>
                    <div className='flex space-x-2 pl-4 pt-12'>
                        <Button 
                        variant="outline"
                        className="rounded p-3 bg-[#213243] border-none"
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
                        className="rounded p-3 bg-[#213243] border-none"
                        >
                            <ArrowIcon/>
                        </Button>
                    </div>
                    <div className='flex ml-[180px]'>
                        <Button 
                        variant="outline"
                        className="rounded p-3 bg-[#FF4C29] border-none text-white text-lg w-[200px] mt-12"
                        >
                            Add To Cart
                        </Button>
                    </div>
                </div>
            </div>
            <div className='flex flex-end m-3'>
                <Button 
                variant="outline"
                className="rounded p-3 bg-[#FF4C29] border-none"
                >
                    <CancelIcon/>
                </Button>
            </div>
        </div>
        <div className='flex flex-row'>
            <div className="text-white font-league font-semibold text-[1.7rem] pt-3 mt-10">
                See More Like This
            </div>
            <div className="text-[#FF4C29] font-league font-semibold text-[1.3rem] pt-4 mt-10 ml-[1100px]">
                View All
            </div>
        </div>
        <div>
            <div className="grid grid-cols-4  gap-x-2 gap-y-7 mt-3 pl-1">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Card
                            className="h-[430px] bg-[#19273A] rounded-[.5rem] border-none  py-4 w-[330px] hover:bg-[#334756]"
                            key={index}
                        >
                            <CardContent className=" w-full flex justify-center p-0 ">
                                <img
                                    src={Vans}
                                    alt="IDK"
                                    className="w-[257px] h-[257px] "
                                />
                            </CardContent>
                            <CardFooter>
                                <div className="py-3 w-full">
                                    <p className="font-league text-white font-semibold text-[1.4rem]">
                                        Paracetamol Nga Vans
                                    </p>
                                    <p className="font-league text-white font-semibold text-lg">
                                        EBotika Corporation
                                    </p>
                                    <div className="flex w-full justify-between">
                                        <p className="font-league text-white font-light text-lg">
                                            Pharmacy
                                        </p>
                                        <p className="font-league text-white font-light text-lg">
                                            Pain Reliever
                                        </p>
                                    </div>
                                    <div className="mt-5 w-full flex justify-between">
                                        <Rating value={4} ratedColor="red" />
                                        <p className="font-league text-[#FF4C29]">1.2k Sold</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
            </div>
        </div>
    </main>
  )
}
CustomerCart.layout = (page) => (
    <CustomerSideBarLayout>{page}</CustomerSideBarLayout>
);
export default CustomerCart
