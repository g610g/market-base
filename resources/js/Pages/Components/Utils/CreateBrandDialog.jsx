import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inertia } from "@inertiajs/inertia";
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
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
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
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { usePage } from "@inertiajs/inertia-react";

function CreateBrandDialog({ merchantStores }) {
    const [merchant, setMerchant] = useState("");
    const error = usePage().props.errors?.error;
    const { toast } = useToast();
    //filtering the brand categories base on the selected merchant store
    const brandCategories = merchantStores.filter(
        (store) => store.store_name === merchant
    )[0];
    //schema
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
    //form
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    //form handler
    function onSubmit(data) {
        toast({
            variant: "destructive",
            className: "bg-orangeButton text-white ",
            title: "Form Submission",
            description: "form submmitted in the server.",
            action: (
                <ToastAction altText="Continue" className="">
                    Continue
                </ToastAction>
            ),
        });
        //xhr request
        Inertia.post("/distributor/brands", data, { preserveState: false });
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
                                                field.onChange(value);
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
                                                            Name
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
                                        <FormMessage className="text-red-600" />
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
                                        <FormMessage className="text-red-600" />
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
                                            <FormMessage className="text-red-600" />
                                        </FormItem>
                                    )}
                                />
                            ) : null}
                            <div className="w-60% flex justify-end">
                                <Button
                                    type="submit"
                                    className="bg-[#FF4C29] text-white font-league text-lg w-full mt-4 hover:bg-indigo-600 rounded-[.5rem]"
                                >
                                    Continue
                                </Button>
                            </div>
                        </form>
                    </Form>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default CreateBrandDialog;
