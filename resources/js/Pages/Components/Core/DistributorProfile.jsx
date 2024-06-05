import React, { useState } from "react";
import DistributorSideBarLayout from "../Layouts/DistributorSideBarLayout";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import DistributorEditProfileDialog from "../Utils/DistributorEditProfileDialog";
const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First Name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last Name must be at least 2 characters.",
    }),
    distributorEmail: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
});

function DistributorProfile() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            distributorId: "",
            distributorEmail: "",
        },
    });

    function onSubmit(data) {
        console.log(data);
    }
    return (
        <main className="max-h-screen w-full max-w-full h-full flex flex-col px-5 space-y-5">
            <div class="w-full grid grid-cols-4 gap-1 h-[30%] bg-[#19273A] p-5 rounded-[.2rem]">
                <div className="">
                    <img
                        src="https://img.lazcdn.com/g/ff/kf/Sc133c60255e34bbbb2c909dce65e42d8S.jpg_720x720q80.jpg"
                        alt="Distributor Image"
                        className="rounded-sm w-[200px]"
                    />
                </div>
                <div className="grid  col-span-3 text-white">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <p
                                id="firstName"
                                className="p-3 bg-[#213243] rounded-[.5rem] text-[#B1B1B1]"
                            >
                                First Name Right Here
                            </p>
                        </div>
                        <div>
                            <Label>Last Name</Label>
                            <p
                                id="firstName"
                                className="p-3 bg-[#213243] rounded-[.5rem] text-[#B1B1B1]"
                            >
                                First Name Right Here
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Distributor Id</Label>
                            <p
                                id="firstName"
                                className="p-3 bg-[#213243] rounded-[.5rem] text-[#B1B1B1]"
                            >
                                First Name Right Here
                            </p>
                        </div>
                        <div>
                            <Label>Email</Label>
                            <p
                                id="firstName"
                                className="p-3 bg-[#213243] rounded-[.5rem] text-[#B1B1B1]"
                            >
                                First Name Right Here
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full grid grid-rows-* grid-cols-3 text-white gap-2 h-full">
                <div className="bg-[#19273A] grid p-5">
                    <h1 className="text-lg font-semibold">
                        Security And Preferences
                    </h1>
                    <div className="flex space-y-3 flex-col">
                        <Label>Password</Label>
                        <p
                            id="firstName"
                            className="p-3 bg-[#213243] rounded-[.5rem] text-[#B1B1B1]"
                        >
                            Password right here
                        </p>
                    </div>
                    <div className="flex space-y-3 flex-col">
                        <Label>Confirm Password</Label>
                        <p
                            id="firstName"
                            className="p-3 bg-[#213243] rounded-[.5rem] text-[#B1B1B1]"
                        >
                            Password right here
                        </p>
                    </div>
                    <DistributorEditProfileDialog />
                    <Button className="bg-orangeButton hover:bg-orangeButton ">
                        Deactivate Distributor Account
                    </Button>
                </div>
                <div className="bg-[#19273A] p-5 col-span-2 grid grid-rows-* text-white">
                    <h1 className="text-[2rem] font-semibold">
                        Other Information
                    </h1>
                    <div className="w-full grid grid-cols-2 gap-3 -mt-10">
                        <div className="flex flex-col space-y-3">
                            <Label>BirthDate</Label>
                            <p
                                id="firstName"
                                className="p-3 bg-[#213243] rounded-[.5rem] text-[#B1B1B1]"
                            >
                                First Name Right Here
                            </p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Label>Phone Number</Label>
                            <p
                                id="firstName"
                                className="p-3 bg-[#213243] rounded-[.5rem] text-[#B1B1B1]"
                            >
                                Phone Number here
                            </p>
                        </div>
                        <div className="w-full flex flex-col space-y-3 col-span-3">
                            <Label className="text-xl">BirthDate</Label>
                            <p
                                id="firstName"
                                className="p-3 bg-[#213243] rounded-[.5rem] text-[#B1B1B1]"
                            >
                                First Name Right Here
                            </p>
                            <p
                                id="firstName"
                                className="p-3 bg-[#213243] rounded-[.5rem] text-[#B1B1B1]"
                            >
                                First Name Right Here
                            </p>
                            <p
                                id="firstName"
                                className="p-3 bg-[#213243] rounded-[.5rem] text-[#B1B1B1]"
                            >
                                First Name Right Here
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

DistributorProfile.layout = (page) => (
    <DistributorSideBarLayout>{page}</DistributorSideBarLayout>
);
export default DistributorProfile;
