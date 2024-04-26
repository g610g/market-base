import React, { useState } from "react";
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
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
} from "@/components/ui/form";
import OrderItemsDialogue from "../Utils/OrderItemsDialogue";
import CartItem from "../Utils/CartItem";

const formSchema = z.object({
    items: z.array(z.number()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
});

function MyCart({ cartData }) {
    console.log(cartData);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            items: [],
        },
    });
    function handleCartSubmit(data) {
        console.log(data);
    }
    return (
        <main className="max-h-screen h-screen flex flex-col px-2">
            <div className="flex flex-col space-y-7 w-full bg-slate-800 p-8 h-[85%]">
                <label className="text-white font-league font-semibold text-4xl text-[1.7rem] pt-3">
                    My Cart
                </label>
                <div className="max-h-full overflow-auto">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleCartSubmit)}>
                            <FormField
                                control={form.control}
                                name="items"
                                render={() => (
                                    <FormItem>
                                        {cartData.map((cartItem) => {
                                            return (
                                                <FormField
                                                    key={cartItem.id}
                                                    control={form.control}
                                                    name="items"
                                                    render={({ field }) => (
                                                        <FormItem
                                                            key={cartItem.id}
                                                            className="flex items-center gap-3 bg-[#334756] px-3 py-2"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    className="text-white data-[state=checked:text-white"
                                                                    checked={field.value?.includes(
                                                                        cartItem.id
                                                                    )}
                                                                    onCheckedChange={(
                                                                        checked
                                                                    ) => {
                                                                        return checked
                                                                            ? field.onChange(
                                                                                  [
                                                                                      ...field.value,
                                                                                      cartItem.id,
                                                                                  ]
                                                                              )
                                                                            : field.onChange(
                                                                                  field.value?.filter(
                                                                                      (
                                                                                          value
                                                                                      ) =>
                                                                                          value !==
                                                                                          cartItem.id
                                                                                  )
                                                                              );
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <CartItem
                                                                cartData={
                                                                    cartItem
                                                                }
                                                            />
                                                        </FormItem>
                                                    )}
                                                />
                                            );
                                        })}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <Button type="submit">Order</Button> */}
                        </form>
                    </Form>
                </div>
                {/* <div className="flex w-full bg-[#213243] h-[25%] p-5">
                    <Checkbox className="ml-5 mr-10 border-white self-center" />
                    <div>
                        <img
                            src="https://cdn.shoppable.ph/ef24cde2-2827-401b-a685-e888e3d0cbcd.jpg"
                            alt="Product Image"
                            className="rounded-sm h-full w-full"
                        />
                    </div>
                    <div className="pl-5">
                        <div className="text-white font-league font-semibold text-2xl text-[1.7rem] pt-3">
                            SPAM Less Sodium Luncheon Meat
                        </div>
                        <div>
                            <label className="block text-white font-league font-light text-xl mb-2 mt-2">
                                Product Variant
                            </label>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <Select>
                                <SelectTrigger className="w-[550px] h-[3rem] bg-[#515E71] border-[#515E71] font-league font-light text-lg text-[#B1B1B1] rounded-sm">
                                    <SelectValue placeholder="SPAM 25% LESS SODIUM 340G/GR" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#515E71] border-[#082032] font-league font-light text-lg text-[#B1B1B1]">
                                    <SelectItem value="variant1">
                                        SPAM 25% LESS SODIUM 340G/GR
                                    </SelectItem>
                                    <SelectItem value="variant2">
                                        SPAM 25% LESS SODIUM 500G/GR
                                    </SelectItem>
                                    <SelectItem value="variant3">
                                        SPAM 25% LESS SODIUM 1000G/GR
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="flex pl-3 space-x-3 pt-1">
                                <Button
                                    variant="outline"
                                    className="rounded p-3 bg-[#515E71] border-none"
                                >
                                    <ArrowIcon className="transform rotate-180" />
                                </Button>
                                <Form {...form}>
                                    <div className="flex space-y-5">
                                        <FormField
                                            control={form.control}
                                            name="addQuantity"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            placeholder={
                                                                quantity
                                                            }
                                                            className="w-[3rem] bg-[#515E71] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-red-500" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </Form>
                                <Button
                                    variant="outline"
                                    className="rounded p-3 bg-[#515E71] border-none"
                                >
                                    <ArrowIcon />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col pl-[150px]">
                        <div className="text-white font-league font-semibold text-3xl mb-2 mt-3 hover:text-[#FF4C29]">
                            PHP200
                        </div>
                        <div className="flex justify-end p-9">
                            <Button className="bg-[#FF4C29] rounded p-3">
                                <DeleteIcon className="p-1" />
                            </Button>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="flex flex-row gap-4 w-full bg-[#515E71] p-8 h-[11%]">
                <div className="p-3">
                    <Checkbox className="ml-5 border-white self-center" />
                </div>
                <div className="text-white font-league font-semibold text-2xl mt-2">
                    All
                </div>
                <div className="text-[#FF4C29] font-league font-semibold text-2xl ml-[700px] flex flex-row mt-2">
                    Total:
                    <p className="text-white pl-2">PHP 1000</p>
                </div>
                <div className="ml-10">
                    <OrderItemsDialogue />
                </div>
            </div>
        </main>
    );
}

MyCart.layout = (page) => <CustomerSideBarLayout>{page}</CustomerSideBarLayout>;
export default MyCart;
