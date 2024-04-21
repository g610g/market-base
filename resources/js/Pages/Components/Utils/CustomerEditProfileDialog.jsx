import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Inertia } from "@inertiajs/inertia";

function CustomerEditProfileDialog() {
    const validationSchema = z.object({
        firstName: z.string().min(1, { message: "Firstname is required" }),
        lastName: z.string().min(1, { message: "Lastname is required" }),
        //polish the date
    });

    const form = useForm({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    });
    function handleSubmit(data) {
        Inertia.patch("/customer/update", data, { preserveState: false });
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-orangeButton text-white px-6 py-5 w-full font-league text-2xl rounded-[.5rem]  hover:bg-indigo-600 "
                >
                    Edit Profile
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-bgDark  w-[1000px] max-w-[1000px] border-none ">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="flex flex-col space-y-5"
                    >
                        <div className="flex w-full justify-between gap-3">
                            <FormField
                                control={form.control}
                                name="firstName"
                                className="w-full"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <Label
                                            className="text-white font-league font-semibold text-[1rem]"
                                            htmlFor="firstName"
                                        >
                                            First Name
                                        </Label>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                id="firstName"
                                                className="bg-[#515E71] border-none rounded-[.4rem] text-white"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 font-bold" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                className="w-full"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <Label
                                            className="text-white font-league font-semibold text-[1rem]"
                                            htmlFor="lastName"
                                        >
                                            Last Name
                                        </Label>
                                        <Input
                                            {...field}
                                            id="lastName"
                                            className="bg-[#515E71] border-none rounded-[.4rem] text-white"
                                        />
                                        <FormMessage className="text-red-500 font-bold" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="bg-gray-700 border-none  text-white rounded-[.5rem] hover:bg-gray-600">
                                Cancel
                            </AlertDialogCancel>
                            <Button
                                type="submit"
                                className="bg-orangeButton rounded-[.5rem] text-white hover:bg-indigo-600"
                            >
                                Continue
                            </Button>
                        </AlertDialogFooter>
                    </form>
                </Form>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default CustomerEditProfileDialog;
