import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const MAX_FILE_SIZE = 1024 * 1024 * 10;
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];
const formSchema = z.object({
    firstName: z.string().min(1, { message: "first name is required" }),
    lastName: z.string().min(1, { message: "first name is required" }),
    phoneNumber: z
        .string()
        .regex(/^(09|\+639)\d{9}$/, { message: "invalid phone number" })
        .min(11, { message: "must be 11 characters long" }),
    profile: z
        .instanceof(FileList)
        .refine((files) => {
            return files?.[0]?.size <= MAX_FILE_SIZE;
        }, `Max image size is 10MB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported.",
        ),
});

export default function DistributorEditProfileDialog() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    const fileRef = form.register("profile");
    function onSubmit(formData) {
        if (!formData.profile[0]) {
            throw new Error("No picture");
        }
        const data = { ...formData, profile: formData.profile[0] };
        Inertia.post("/distributor/profile", data, {
            preserveState: false,
        });
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-orangeButton hover:bg-orangeButton ">
                    Edit Profile
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid gap-3 py-4">
                            <FormField
                                name="profile"
                                render={({ field }) => (
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <FormLabel
                                            htmlFor="name"
                                            className="text-right"
                                        >
                                            Profile Picture
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                id="name"
                                                className="col-span-3 rounded-[.5rem]"
                                                type="file"
                                                {...fileRef}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                            <FormField
                                name="firstName"
                                render={({ field }) => (
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <FormLabel className="text-right">
                                            First Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                id="name"
                                                className="col-span-3 rounded-[.5rem]"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                            <FormField
                                name="lastName"
                                render={({ field }) => (
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <FormLabel className="text-right">
                                            Last Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                id="name"
                                                className="col-span-3 rounded-[.5rem]"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                            <FormField
                                name="phoneNumber"
                                render={({ field }) => (
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <FormLabel className="text-right">
                                            Phone Number
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                id="name"
                                                className="col-span-3 rounded-[.5rem]"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <Button
                                type="submit"
                                className="bg-orangeButton rounded-[.5rem] hover:bg-blue-600"
                            >
                                Save changes
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
