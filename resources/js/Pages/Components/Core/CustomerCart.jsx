import React, { useState } from "react";
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import { Rating } from "@material-tailwind/react";

import { Button } from "@/components/ui/button";
import CancelIcon from "../../../assets/cancel.svg?react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Textarea } from "@/components/ui/textarea";
import { Inertia } from "@inertiajs/inertia";
import Vans from "../../../assets/vans.png";
import { ToastAction } from "@/components/ui/toast";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import AddToCartDialogue from "../Utils/AddToCartDialogue";
import { usePage } from "@inertiajs/inertia-react";

const formSchema = z.object({
    productVariant: z.string().min(2, {
        message: "Product Variant must be at least 2 characters.",
    }),
    productQuantity: z.coerce
        .number()
        .min(1, { message: "Price must be a positive number" })
        .max(1000000, { message: "Max of 1 million only" }),
});

function CustomerCart({ productData }) {
    const [price, setPrice] = useState(0);
    const { toast } = useToast();
    const format = () => {
        const amount = parseFloat(price);
        const formatted = new Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP",
        }).format(amount);
        return formatted;
    };
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            productQuantity: "",
            productVariant: "",
        },
    });
    function onSubmit(data) {
        toast({
            variant: "destructive",
            className: "bg-orangeButton text-white ",
            title: "Product Added",
            description: "product added to your cart.",
            action: (
                <ToastAction altText="Continue" className="">
                    Continue
                </ToastAction>
            ),
        });
        Inertia.post("/customer/add-to-cart", {
            ...data,
            productId: productData.product_id,
        });
    }
    return (
        <main
            className="max-h-screen h-screen flex flex-col px-2"
            scroll-region
        >
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
                <div className="flex flex-col pl-5">
                    <div className="text-white font-league font-semibold text-4xl text-[1.7rem] pt-3">
                        {productData.product_name}
                    </div>
                    <div>
                        <div className="w-full flex">
                            <Rating value={4} ratedColor="red" />
                            <p className="font-league text-white text-xl ml-3 mt-1">
                                4.8
                            </p>
                            <p className="font-league text-red-900 text-xl ml-3 mt-1">
                                | 1.2k Sold |
                            </p>
                            <p className="font-league text-white text-xl ml-3 mt-1">
                                {productData.product_type.product_type}
                            </p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="block text-white font-league font-light text-xl mb-2">
                            Product Description
                        </label>
                        <Textarea
                            className="w-[760px] h-[6rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                            placeholder={productData.description}
                        />
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex gap-4 ">
                                <div className="mt-3">
                                    <FormField
                                        control={form.control}
                                        name="productVariant"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                    Product Variant
                                                </FormLabel>
                                                <Select
                                                    onValueChange={(
                                                        selectedVariant
                                                    ) => {
                                                        field.onChange(
                                                            selectedVariant
                                                        );
                                                        const index =
                                                            productData.variant.findIndex(
                                                                (variant) =>
                                                                    variant ===
                                                                    selectedVariant
                                                            );
                                                        const priceSelected =
                                                            productData.prices.filter(
                                                                (_, i) =>
                                                                    index === i
                                                            )[0];
                                                        setPrice(priceSelected);
                                                    }}
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger className="w-[550px] h-[3rem] bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm">
                                                            <SelectValue placeholder="variant" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className="bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1]">
                                                        {productData.variant.map(
                                                            (
                                                                variant,
                                                                index
                                                            ) => (
                                                                <SelectItem
                                                                    value={
                                                                        variant
                                                                    }
                                                                >
                                                                    {variant}
                                                                </SelectItem>
                                                            )
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* <div className="flex-1">
                                    <div className="flex-1 space-y-5 ">
                                        <div className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"></div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="flex flex-row">
                                <div>
                                    <div className="flex-1 space-y-5 mt-3">
                                        <FormField
                                            control={form.control}
                                            name="productPrice"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                        Product Price
                                                    </FormLabel>
                                                    <FormControl>
                                                        <p className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm">
                                                            {format()}
                                                        </p>
                                                    </FormControl>
                                                    <FormMessage className="text-red-500" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-2 pl-4  h-[95px] pt-12 w-[30%]">
                                    <div className="flex space-y-5 w-full">
                                        <FormField
                                            control={form.control}
                                            name="productQuantity"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            type="number"
                                                            min="1"
                                                            placeholder="Quantity"
                                                            className=" bg-[#515E71] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm w-full h-full"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-red-500" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <Button
                                    className="mt-11 ml-[190px]"
                                    type="submit"
                                >
                                    <AddToCartDialogue />
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
                <div className="flex flex-end m-3">
                    <Button
                        variant="outline"
                        className="rounded p-3 bg-[#FF4C29] border-none"
                    >
                        <CancelIcon />
                    </Button>
                </div>
            </div>
            <div className="flex flex-row">
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
                                        <p className="font-league text-[#FF4C29]">
                                            1.2k Sold
                                        </p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
CustomerCart.layout = (page) => (
    <CustomerSideBarLayout>{page}</CustomerSideBarLayout>
);
export default CustomerCart;
