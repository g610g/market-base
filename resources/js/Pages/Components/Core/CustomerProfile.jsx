import React, { useState } from "react";
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import { Button } from "@/components/ui/button";
import { usePage } from "@inertiajs/inertia-react";

import CustomerEditProfileDialog from "../Utils/CustomerEditProfileDialog";
function CustomerProfile({ customerInfo }) {
    const { flash } = usePage().props;
    const { user } = flash.userData;
    // console.log(flash);
    return (
        <div className="flex flex-col space-y-3 h-full">
            <div className="flex w-full bg-[#19273A] px-7 py-5 max-h-[20rem] p-3">
                <div className="w-[20%] ">
                    <img
                        src={`data:image/jpeg;base64,${customerInfo.profile_picture}`}
                        alt="Distributor Image"
                        className="rounded-sm h-[220px] w-[250px]"
                    />
                </div>
                <div className="flex-1 space-y-4">
                    <div className="flex gap-3 ">
                        <div className="w-[45%]">
                            <span className="text-white font-league text-2xl">
                                First Name*
                            </span>
                            <p className=" text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md">
                                {user.first_name}
                            </p>
                        </div>
                        <div className="flex-1">
                            <span className="text-white font-league text-2xl">
                                Last Name*
                            </span>
                            <p className=" text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md">
                                {user.last_name}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 ">
                        <div className="w-[35%]">
                            <span className="text-white font-league text-2xl ">
                                Customer Id*
                            </span>
                            <p className=" text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md truncate">
                                {user.id}
                            </p>
                        </div>
                        <div className="flex-1">
                            <span className="text-white font-league text-2xl">
                                Email*
                            </span>
                            <p className=" text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex min-h-[68%] gap-3">
                <div className="flex flex-col bg-[#19273A] w-[35%] px-6 py-2 h-full">
                    <p className="font-league text-[2rem] text-white font-semibold">
                        Security and Preferences
                    </p>
                    <div className="border-b border-white mb-7">
                        <div className="mt-2 ">
                            <span className="text-white font-league text-2xl font-light">
                                Password*
                            </span>
                            <p className="shadow-lg text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md flex  items-center mt-3">
                                *************
                            </p>
                        </div>
                        <div className="mt-6 mb-[3rem]">
                            <span className="text-white font-league text-2xl font-light">
                                Confirm Password*
                            </span>
                            <p className="shadow-lg text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md flex  items-center mt-3">
                                *************
                            </p>
                        </div>
                    </div>
                    <CustomerEditProfileDialog
                        profile_picture={customerInfo.profile_picture}
                    />

                    <div className="h-full w-full flex items-center">
                        <Button className="bg-orangeButton text-white px-6 py-5 w-full font-league text-2xl rounded-[.5rem]  hover:bg-indigo-600 ">
                            Deactivate Customer Account
                        </Button>
                    </div>
                </div>
                <div
                    id="personal-info"
                    className="py-2 px-6 bg-[#19273A] flex-1 max-w-full space-y-3"
                >
                    <p className="font-league text-[2rem] text-white font-semibold">
                        Other Information
                    </p>
                    <div className="flex justify-between gap-1">
                        <div className="w-[49%]">
                            <span className="text-white font-league text-2xl font-light">
                                Birthdate
                            </span>
                            <p className="shadow-md text-[#B1B1B1] font-league text-2xl font-light bg-[#515E71] p-4 mt-2">
                                {user.birth_date}
                            </p>
                        </div>
                        <div className="w-[49%]">
                            <span className="text-white font-league text-2xl font-light">
                                Phone Number
                            </span>
                            <p className="shadow-md text-[#B1B1B1] font-league text-2xl font-light bg-[#515E71] p-4 mt-2">
                                {user.phone_number}
                            </p>
                        </div>
                    </div>
                    <div className="w-full ">
                        <p className="text-white font-league text-2xl font-light">
                            Address*
                        </p>
                        <div className="space-y-5">
                            <p className="shadow-md text-[#B1B1B1] font-league text-2xl font-light bg-[#515E71] p-4 mt-2">
                                {user.barangay}, {user.city}
                            </p>
                            <p className="shadow-md text-[#B1B1B1] font-league text-2xl font-light bg-[#515E71] p-4 mt-2">
                                {user.province}
                            </p>
                            <p className="shadow-md text-[#B1B1B1] font-league text-2xl font-light bg-[#515E71] p-4 mt-2">
                                {user.country}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CustomerProfile.layout = (page) => (
    <CustomerSideBarLayout>{page}</CustomerSideBarLayout>
);
export default CustomerProfile;
