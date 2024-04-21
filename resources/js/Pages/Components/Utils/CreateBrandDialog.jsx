import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CancelIcon from "../../../assets/cancel.svg?react";
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
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

function CreateBrandDialog({ merchantStores }) {
    const [merchant, setMerchant] = useState("");
    const brandCategories = merchantStores.filter(
        (store) => store.store_name === merchant
    )[0];
    console.log(brandCategories);
    const formSchema = z.object({
        merchantStore: z.string({
            required_error: "Please Select Merchant Store",
        }),
        brandCategory: z.string({
            required_error: "Please Select Brand Category",
        }),
        brandName: z
            .string()
            .min(2, { message: "Brand Name must be atleast 2 characters" }),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    function onSubmit(data) {
        console.log(data);
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger className="bg-[#334756] h-[3.5rem] rounded text-white font-league w-1/3 text-xl">
                Create Brand
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#19273A] border-none">
                <AlertDialogCancel className="border-none flex justify-end">
                    <CancelIcon />
                </AlertDialogCancel>
                <AlertDialogHeader>
                    <AlertDialogTitle className=" font-league text-3xl font-regular text-white">
                        Create Brand
                    </AlertDialogTitle>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-5"
                        >
                            <FormField
                                control={form.control}
                                name="merchantStore"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white font-league font-light text-lg">
                                            Merchant Store*
                                        </FormLabel>
                                        <Select
                                            onValueChange={(value) => {
                                                field.onChange;
                                                setMerchant(value);
                                            }}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="bg-[#213243] h-[3rem] border-[#082032] font-league font-light text-lg text-white rounded-sm text-left pl-3">
                                                    <SelectValue placeholder="Please Select Merchant Store" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-gray-600">
                                                {merchantStores.map(
                                                    (merchantStore) => (
                                                        <SelectItem
                                                            value={
                                                                merchantStore.store_name
                                                            }
                                                            key={
                                                                merchantStore.store_id
                                                            }
                                                            className="font-league font-light text-lg text-white"
                                                        >
                                                            {
                                                                merchantStore.store_name
                                                            }
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="brandName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white font-league font-light text-lg">
                                            Brand Name*
                                        </FormLabel>
                                        <Input
                                            className="bg-[#213243] h-[3rem] border-[#082032] font-league font-light text-lg text-white rounded-sm text-left pl-3"
                                            placeholder="Brand Name"
                                            {...field}
                                        />
                                    </FormItem>
                                )}
                            />
                            {brandCategories ? (
                                <FormField
                                    control={form.control}
                                    name="brandCategory"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white font-league font-light text-lg">
                                                Brand Category*
                                            </FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="bg-[#213243] h-[3rem] border-[#082032] font-league font-light text-lg text-white rounded-sm text-left pl-3">
                                                        <SelectValue placeholder="Please Select Brand Category" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="bg-gray-600">
                                                    {brandCategories.merchant_store_class.brand_categories.map(
                                                        (brand) => (
                                                            <SelectItem
                                                                value={
                                                                    brand.category_name
                                                                }
                                                                key={
                                                                    brand.brand_cat_id
                                                                }
                                                                className="font-league font-light text-lg text-white"
                                                            >
                                                                {
                                                                    brand.category_name
                                                                }
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />
                            ) : null}
                        </form>
                    </Form>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex justify-center">
                    <div className="w-[60%] flex justify-end">
                        <AlertDialogAction className="bg-[#FF4C29] text-white font-league text-lg w-full mt-4 hover:bg-indigo-600">
                            Continue
                        </AlertDialogAction>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default CreateBrandDialog;
