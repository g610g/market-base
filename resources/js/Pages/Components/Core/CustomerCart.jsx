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
import ShopItems from "../SubContent/ShopItems";
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
import Pagination from "../Utils/Pagination";

const formSchema = z.object({
    productVariant: z.string().min(2, {
        message: "Product Variant must be at least 2 characters.",
    }),
    productQuantity: z.coerce
        .number()
        .min(1, { message: "Price must be a positive number" })
        .max(1000000, { message: "Max of 1 million only" }),
});

function CustomerCart({ productData, paginationData }) {
    const [price, setPrice] = useState(0);
    const { toast } = useToast();
    const [showCard, setShowCard] = useState(false);
    const [closeDialog, setCloseDialog] = useState(false);
    const { errors } = usePage().props;
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
    const products = paginationData.data.map((product) => ({
        id: product.product_id,
        photo: product.photo_path,
        brand: product.brand.brand_name,
        product_name: product.product_name,
        type: product.product_type.product_type,
        storeType:
            product.product_type.brand_category.merchant_store_class.class_name,
    }));
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
            productPrice: price,
        });
    }
    return (
        <main className="max-h-screen h-screen flex flex-col px-2">
            {showCard ? (
                <></>
            ) : (
                <div
                    className="flex w-full bg-slate-800 p-8 h-[50%]"
                    id="product-details-section"
                >
                    <div>
                        <img
                            src={`data:image/jpeg;base64,${productData.photo_path}`}
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
                                                                        index ===
                                                                        i
                                                                )[0];
                                                            setPrice(
                                                                priceSelected
                                                            );
                                                        }}
                                                        defaultValue={
                                                            field.value
                                                        }
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
                                                                        {
                                                                            variant
                                                                        }
                                                                    </SelectItem>
                                                                )
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
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
                                        <AddToCartDialogue
                                            setCloseDialog={setCloseDialog}
                                        />
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                    <div className="flex flex-end m-3">
                        <Button
                            variant="outline"
                            className="rounded p-3 bg-[#FF4C29] border-none"
                            onClick={() => {
                                setShowCard(!showCard);
                            }}
                        >
                            <CancelIcon />
                        </Button>
                    </div>
                </div>
            )}
            <div className="flex flex-row items-end justify-between mt-8">
                <div className="text-white font-league font-semibold text-[1.7rem] pt-3 w-[50%]">
                    See More Like This
                </div>
                <div className>
                    <Pagination
                        links={paginationData.links}
                        prevPage={paginationData.prev_page_url}
                        nextPage={paginationData.next_page_url}
                    ></Pagination>
                </div>
            </div>
            <div>
                <ShopItems products={products}></ShopItems>
            </div>
        </main>
    );
}
CustomerCart.layout = (page) => (
    <CustomerSideBarLayout>{page}</CustomerSideBarLayout>
);
export default CustomerCart;
