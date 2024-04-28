import React, { useState } from "react";
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
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
const MAX_FILE_SIZE = 1024 * 1024 * 10;
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];
const validationSchema = z.object({
    firstName: z.string().min(1, { message: "Firstname is required" }),
    lastName: z.string().min(1, { message: "Lastname is required" }),
    image: z
        .instanceof(FileList)
        .optional()
        .refine((files) => {
            return files?.[0]?.size <= MAX_FILE_SIZE;
        }, `Max image size is 10MB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
});

function CustomerEditProfileDialog() {
    const [image, setImage] = useState();
    const { errors } = usePage().props;
    console.log(errors);
    const form = useForm({
        resolver: zodResolver(validationSchema),
    });
    const fileRef = form.register("image");
    function handleSubmit(data) {
        const modifiedData = { ...data, image: data.image[0] };
        console.log(modifiedData);
        Inertia.post("/customer/update", modifiedData, {
            preserveState: false,
        });
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
                                            Profile Picture*
                                        </FormLabel>
                                        <Input
                                            id="image"
                                            type="file"
                                            className="text-white"
                                            {...fileRef}
                                            onChange={(e) => {
                                                field.onChange(
                                                    e.target?.files?.[0] ??
                                                        undefined
                                                );
                                                setImage(
                                                    URL.createObjectURL(
                                                        e.target.files[0]
                                                    )
                                                );
                                            }}
                                        />
                                        <FormMessage className="text-red-600" />
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-4">
                                {image ? (
                                    <img
                                        src={image}
                                        alt="Product Image"
                                        className="w-[500px] "
                                    />
                                ) : (
                                    <div className="w-[500px] h-[500px] bg-[#334756]"></div>
                                )}
                                <div className="flex flex-col  w-full gap-5 flex-1">
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
                            </div>
                        </div>
                        <AlertDialogFooter className="justify-end">
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
