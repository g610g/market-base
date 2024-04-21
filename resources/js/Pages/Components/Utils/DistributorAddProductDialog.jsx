import React, { useState } from "react";

import CancelIcon from "../../../assets/cancel.svg?react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];
const formSchema = z.object({
    image: z
        .any()
        .refine((files) => {
            return files?.[0]?.size <= MAX_FILE_SIZE;
        }, `Max image size is 5MB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
    productName: z.string().min(2, {
        message: "Product Name must be at least 2 characters.",
    }),
    productDescription: z.string().min(2, {
        message: "Product Description must be at least 2 characters.",
    }),
    productType: z.string({ required_error: "Select Product Type" }),
    brandName: z.string({ required_error: "Select Brand Name" }),
});

function DistributorAddProductDialog() {
    const [image, setImage] = useState();
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(data) {
        console.log(data);
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger className="text-white text-xl rounded bg-[#19273A] p-10 h-[3rem]  text-center font-league pt-3">
                Add New Product
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#19273A] flex flex-col border-none max-w-[1000px] w-[1000px]">
                <AlertDialogCancel className="border-none flex justify-end">
                    <CancelIcon />
                </AlertDialogCancel>

                <AlertDialogHeader>
                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="flex w-full gap-7">
                                    <div className="space-y-5 w-full">
                                        <FormField
                                            control={form.control}
                                            name="image"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                        Product Picture*
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            id="image"
                                                            type="file"
                                                            className="text-white"
                                                            onChange={(e) =>
                                                                setImage(
                                                                    URL.createObjectURL(
                                                                        e.target
                                                                            .files[0]
                                                                    )
                                                                )
                                                            }
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <img
                                            src={image}
                                            alt="Product Image"
                                            className="w-[500px] "
                                        />
                                    </div>
                                    <div className="w-full space-y-3">
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
                                                            id="image"
                                                            className=" w-full bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="productDescription"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                        Product Description*
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            id="image"
                                                            className=" w-full bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="brandName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                        Product Brand*
                                                    </FormLabel>
                                                    <Select>
                                                        <FormControl>
                                                            <SelectTrigger className="bg-[#213243] h-[3rem] border-[#082032] font-league font-light text-lg text-white rounded-sm text-left pl-3">
                                                                <SelectValue placeholder="Please Select Brand Name" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                    </Select>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </div>
                    {/* <div className="flex flex-row gap-3">
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
                    </div> */}
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
