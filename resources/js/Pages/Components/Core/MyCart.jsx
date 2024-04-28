import React, { useState } from "react";
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import CartItem from "../Utils/CartItem";

const formSchema = z.object({
    items: z.array(z.number()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
});

function MyCart({ cartData }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const { toast } = useToast();
    const { errors } = usePage().props;
    console.log(cartData);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            items: [],
        },
    });
    const format = () => {
        const amount = parseFloat(totalPrice);
        const formatted = new Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP",
        }).format(amount);
        return formatted;
    };
    function handleCartSubmit(data) {
        toast({
            variant: "destructive",
            className: "bg-orangeButton text-white ",
            title: "Order Products",
            description: "products has been added to order lists.",
            action: (
                <ToastAction altText="Continue" className="">
                    Continue
                </ToastAction>
            ),
        });

        console.log(data);
        Inertia.post("/customer/remove-to-cart", data, {
            preserveState: false,
        });
    }
    return (
        <main className="max-h-full h-full ">
            <div className="flex flex-col space-y-7 w-full bg-slate-800 pt-8 px-8 pb-3 h-[85%] max-h-[85%]">
                <label className="text-white font-league font-semibold text-4xl text-[1.7rem] pt-3">
                    My Cart
                </label>
                <div className=" overflow-auto">
                    {cartData && cartData?.length !== 0 ? (
                        <div className="overflow-auto">
                            <Form {...form}>
                                <form
                                    className="  "
                                    onSubmit={form.handleSubmit(
                                        handleCartSubmit
                                    )}
                                >
                                    <FormField
                                        control={form.control}
                                        name="items"
                                        render={() => (
                                            <FormItem>
                                                {cartData?.map((cartItem) => {
                                                    return (
                                                        <FormField
                                                            key={cartItem.id}
                                                            control={
                                                                form.control
                                                            }
                                                            name="items"
                                                            render={({
                                                                field,
                                                            }) => (
                                                                <FormItem
                                                                    key={
                                                                        cartItem.id
                                                                    }
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
                                                                                if (
                                                                                    checked
                                                                                ) {
                                                                                    field.onChange(
                                                                                        [
                                                                                            ...field.value,
                                                                                            cartItem.id,
                                                                                        ]
                                                                                    );
                                                                                    setTotalPrice(
                                                                                        totalPrice +
                                                                                            cartItem.total_price
                                                                                    );
                                                                                    return;
                                                                                }
                                                                                setTotalPrice(
                                                                                    totalPrice -
                                                                                        cartItem.total_price
                                                                                );
                                                                                field.onChange(
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
                                                <FormMessage className="text-red-600 font-bold" />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex flex-row gap-4  justify-end w-full bg-[#515E71] p-8">
                                        <div className="text-[#FF4C29] font-league font-semibold text-2xl flex flex-row mt-2">
                                            Total:
                                            <p className="text-white pl-2">
                                                {format()}
                                            </p>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="bg-orangeButton rounded-[.5rem] text-white text-xl p-3 hover:bg-indigo-600"
                                        >
                                            Order Now
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </main>
    );
}

MyCart.layout = (page) => <CustomerSideBarLayout>{page}</CustomerSideBarLayout>;
export default MyCart;
