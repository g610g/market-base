import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
    phoneNumber: z
        .string()
        .regex(/^(09|\+639)\d{9}$/, {
            message: "Invalid phone number",
        })
        .min(11)
        .max(11),

    image: z
        .instanceof(FileList)
        .optional()
        .refine((files) => {
            return files?.[0]?.size <= MAX_FILE_SIZE;
        }, `Max image size is 10MB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported.",
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
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-orangeButton text-white px-6 py-5 w-full font-league text-2xl rounded-[.5rem]  hover:bg-indigo-600 "
                >
                    Edit Profile
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-bgDark">
                <DialogHeader>
                    <DialogTitle className="text-white">
                        Edit profile
                    </DialogTitle>
                    <DialogDescription className="text-white">
                        Make changes to your profile here. Click save when
                        you're done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <div className="grid gap-4 py-4">
                            <div className="grid   items-center gap-6">
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
                                                className="text-white rounded-[.5rem]"
                                                {...fileRef}
                                                onChange={(e) => {
                                                    field.onChange(
                                                        e.target?.files?.[0] ??
                                                            undefined,
                                                    );
                                                    setImage(
                                                        URL.createObjectURL(
                                                            e.target.files[0],
                                                        ),
                                                    );
                                                }}
                                            />
                                            <FormMessage className="text-red-600" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid items-center gap-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                className="block text-white font-league font-light text-xl mb-2"
                                                htmlFor="image"
                                            >
                                                First Name
                                            </FormLabel>
                                            <Input
                                                id="image"
                                                type="text"
                                                className="text-white rounded-[.5rem]"
                                                {...field}
                                            />
                                            <FormMessage className="text-red-600" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid items-center gap-4">
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                className="block text-white font-league font-light text-xl mb-2"
                                                htmlFor="image"
                                            >
                                                Last Name
                                            </FormLabel>
                                            <Input
                                                id="image"
                                                type="text"
                                                className="text-white rounded-[.5rem]"
                                                {...field}
                                            />
                                            <FormMessage className="text-red-600" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid items-center gap-4">
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                className="block text-white font-league font-light text-xl mb-2"
                                                htmlFor="image"
                                            >
                                                Phone Nummber{" "}
                                            </FormLabel>
                                            <Input
                                                id="image"
                                                type="text"
                                                className="text-white rounded-[.5rem]"
                                                {...field}
                                            />
                                            <FormMessage className="text-red-600" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid justify-items-end">
                                <Button
                                    type="submit"
                                    className="bg-orangeButton rounded-[.5rem] hover:opacity-80 hover:bg-orangeButton"
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default CustomerEditProfileDialog;
