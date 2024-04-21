import React from "react";

import CancelIcon from "../../../assets/cancel.svg?react";

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
import { Input } from "@/components/ui/input";

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
} from "@/components/ui/alert-dialog";

const formSchema = z.object({
    productName: z.string().min(2, {
        message: "Product Name must be at least 2 characters.",
    }),
    productId: z.string().min(2, {
        message: "Product ID must be at least 2 characters.",
    }),
    productDescription: z.string().min(2, {
        message: "Product Description must be at least 2 characters.",
    }),
    productType: z.string().min(2, {
        message: "Product Type must be at least 2 characters.",
    }),
    brandName: z.string().min(2, {
        message: "Brand Name must be at least 2 characters.",
    }),
});

function DistributorAddProductDialog() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            merchantStore: "",
        },
    });

    function onSubmit(data) {
        console.log(data);
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger className="text-white text-xl rounded bg-[#19273A] p-10 h-[3rem] pt-1.5 text-center font-league pt-3">
                Add New Product
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#19273A] flex flex-col border-none max-w-[1000px] w-[1000px]">
                <AlertDialogCancel className="border-none flex justify-end">
                    <CancelIcon />
                </AlertDialogCancel>
                <AlertDialogHeader>
                    <div className="flex flex-row gap-3">
                        <div>
                            <img
                                src="https://www.air-force.com/media/catalog/product/cache/cf26d88f340d099e8645dec4084bc7a6/g/e/gem0707_804_front_grijs_1_1.jpg"
                                alt="Product Image"
                                className="rounded-sm h-full w-full"
                            />
                        </div>
                        <div className=" w-full">
                            <AlertDialogTitle className="text-white font-league text-2xl font-regular">
                                Product Information
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                <div className="flex flex-row gap-4">
                                    <div>
                                        <Form {...form}>
                                            <div className="w-full mt-3">
                                                <FormField
                                                    control={form.control}
                                                    name="productName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                                Product Name*
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Product Name"
                                                                    className="w-full h-[3rem] bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage className="text-red-500" />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </Form>
                                    </div>
                                    <div className="gap-4">
                                        <Form {...form}>
                                            <div className="flex-1 mt-3">
                                                <FormField
                                                    control={form.control}
                                                    name="productId"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                                Product ID*
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Product ID"
                                                                    className="w-full h-[3rem] bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage className="text-red-500" />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                                <div>
                                    <div className=" w-full gap-4">
                                        <Form {...form}>
                                            <div className="flex-1 mt-3">
                                                <FormField
                                                    control={form.control}
                                                    name="productDescription"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                                Product
                                                                Description*
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Product Description"
                                                                    className="w-full h-[3rem] bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage className="text-red-500" />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div>
                                        <Form {...form}>
                                            <div className="w-full mt-3">
                                                <FormField
                                                    control={form.control}
                                                    name="productType"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                                Product Type*
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Product Type"
                                                                    className="w-full h-[3rem] bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage className="text-red-500" />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </Form>
                                    </div>
                                    <div className="">
                                        <Form {...form}>
                                            <div className="mt-3">
                                                <FormField
                                                    control={form.control}
                                                    name="brandName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                                Brand*
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Brand"
                                                                    className="w-full h-[3rem] bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage className="text-red-500" />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </AlertDialogDescription>
                        </div>
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <div className="w-[90%] flex justify-end">
                        <AlertDialogAction className="bg-[#FF4C29] text-white font-league text-lg w-[30%]">
                            Continue
                        </AlertDialogAction>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default DistributorAddProductDialog;
