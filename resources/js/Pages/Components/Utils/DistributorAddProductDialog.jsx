import React, { useState } from "react";

import CancelIcon from "../../../assets/cancel.svg?react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inertia } from "@inertiajs/inertia";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
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
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { usePage } from "@inertiajs/inertia-react";
import { Button } from "@/components/ui/button";
const MAX_FILE_SIZE = 1024 * 1024 * 10;
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

function DistributorAddProductDialog({ brandsData }) {
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState();
    const { toast } = useToast();
    const { errors, flash } = usePage().props;
    //filters the product types base on the selected brand
    const productTypes = brandsData.filter((brandItem) => {
        return brandItem.brand_name === brand;
    })[0]?.brand_category?.product_types;
    const formSchema = z.object({
        price: z.coerce
            .number()
            .min(0, { message: "Price must be a positive number" })
            .max(1000000, { message: "Max of 1 million only" }),
        image: z
            .instanceof(FileList)
            .refine((files) => {
                return files?.[0]?.size <= MAX_FILE_SIZE;
            }, `Max image size is 10MB.`)
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
        variant: z.string().min(2, {
            message: "Product Variant must be at least 2 characters",
        }),
        productType: z.string({ required_error: "Select Product Type" }),
        brandName: z.string({ required_error: "Select Brand Name" }),
    });
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    const fileRef = form.register("image");
    //the submithandler when trying to add the product into the server
    function handleFormSubmit(data) {
        const modifiedData = { ...data, image: data.image[0] };
        toast({
            variant: "destructive",
            className: "bg-orangeButton text-white ",
            title: "Form Submission",
            description: "form submmitted in the server.",
            action: <ToastAction altText="Continue">Continue</ToastAction>,
        });
        Inertia.post("/distributor/inventory", modifiedData, {
            preserveState: false,
        });
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
                            <form
                                onSubmit={form.handleSubmit(handleFormSubmit)}
                            >
                                <div className="flex w-full gap-7">
                                    <div className="space-y-5 w-full">
                                        <FormField
                                            control={form.control}
                                            name="image"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel
                                                        className="block text-white font-league font-light text-xl mb-2"
                                                        htmlFor="image"
                                                    >
                                                        Product Picture*
                                                    </FormLabel>
                                                    <Input
                                                        id="image"
                                                        type="file"
                                                        className="text-white"
                                                        {...fileRef}
                                                        onChange={(e) => {
                                                            field.onChange(
                                                                e.target
                                                                    ?.files?.[0] ??
                                                                    undefined
                                                            );
                                                            setImage(
                                                                URL.createObjectURL(
                                                                    e.target
                                                                        .files[0]
                                                                )
                                                            );
                                                        }}
                                                    />
                                                    <FormMessage className="text-red-600" />
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
                                                    <Input
                                                        className=" w-full bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                        {...field}
                                                    />
                                                    <FormMessage className="text-red-600" />
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
                                                    <Input
                                                        className=" w-full bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                        {...field}
                                                    />
                                                    <FormMessage className="text-red-600" />
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
                                                    <Select
                                                        defaultValue={
                                                            field.value
                                                        }
                                                        onValueChange={(
                                                            value
                                                        ) => {
                                                            field.onChange(
                                                                value
                                                            );
                                                            setBrand(value);
                                                        }}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className="bg-[#213243] h-[3rem] border-[#082032] font-league font-light text-lg text-white rounded-sm text-left pl-3">
                                                                <SelectValue placeholder="Please Select Brand Name" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className="bg-gray-600">
                                                            {brandsData.map(
                                                                (brand) => (
                                                                    <SelectItem
                                                                        value={
                                                                            brand.brand_name
                                                                        }
                                                                        key={
                                                                            brand.brand_id
                                                                        }
                                                                    >
                                                                        {
                                                                            brand.brand_name
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
                                        {productTypes ? (
                                            <FormField
                                                control={form.control}
                                                name="productType"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                            Product Type*
                                                        </FormLabel>
                                                        <Select
                                                            onValueChange={
                                                                field.onChange
                                                            }
                                                            defaultValue={
                                                                field.value
                                                            }
                                                        >
                                                            <FormControl>
                                                                <SelectTrigger className="bg-[#213243] h-[3rem] border-[#082032] font-league font-light text-lg text-white rounded-sm text-left pl-3">
                                                                    <SelectValue placeholder="Please Select Brand Name" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent className="bg-gray-600">
                                                                {productTypes.map(
                                                                    (
                                                                        product
                                                                    ) => (
                                                                        <SelectItem
                                                                            value={
                                                                                product.product_type
                                                                            }
                                                                            key={
                                                                                product.id
                                                                            }
                                                                        >
                                                                            {
                                                                                product.product_type
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
                                        <div className="flex w-full gap-3">
                                            <FormField
                                                control={form.control}
                                                name="variant"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                            Product Variant*
                                                        </FormLabel>
                                                        <Input
                                                            className=" w-full bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                            {...field}
                                                        />
                                                        <FormMessage className="text-red-600" />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="price"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="block text-white font-league font-light text-xl mb-2">
                                                            Product Price*
                                                        </FormLabel>
                                                        <Input
                                                            className=" w-full bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                                                            {...field}
                                                        />
                                                        <FormMessage className="text-red-600" />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[90%] mt-7 flex justify-end">
                                    <Button
                                        type="submit"
                                        className="bg-[#FF4C29] text-white font-league text-lg w-[30%] hover:bg-indigo-600"
                                    >
                                        Continue
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default DistributorAddProductDialog;
