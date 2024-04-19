import React from "react";
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import { Button } from "@/components/ui/button";
function CustomerProfile() {
    return (
        <div className="flex flex-col space-y-3 h-full">
            <div className="flex w-full bg-[#19273A] px-7 py-5 max-h-[20rem] p-3">
                <div className="w-[20%] ">
                    <img
                        src="https://img.lazcdn.com/g/ff/kf/Sc133c60255e34bbbb2c909dce65e42d8S.jpg_720x720q80.jpg"
                        alt="Distributor Image"
                        className="rounded-sm h-full w-[200px]"
                    />
                </div>
                <div className="flex-1 space-y-4">
                    <div className="flex gap-3 ">
                        <div className="w-[45%]">
                            <span className="text-white font-league text-2xl">
                                First Name*
                            </span>
                            <p className=" text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md">
                                Mary Abigail
                            </p>
                        </div>
                        <div className="flex-1">
                            <span className="text-white font-league text-2xl">
                                Last Name*
                            </span>
                            <p className=" text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md">
                                Soliva
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 ">
                        <div className="w-[35%]">
                            <span className="text-white font-league text-2xl">
                                Customer Id*
                            </span>
                            <p className=" text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md">
                                Mary Abigail
                            </p>
                        </div>
                        <div className="flex-1">
                            <span className="text-white font-league text-2xl">
                                Email*
                            </span>
                            <p className=" text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md">
                                Soliva
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
                    <div className="border-b border-white">
                        <div className="mt-2 ">
                            <span className="text-white font-league text-2xl font-light">
                                Password*
                            </span>
                            <p className="shadow-lg text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md flex  items-center mt-3">
                                *************
                            </p>
                        </div>
                        <div className="mt-6 mb-[4rem]">
                            <span className="text-white font-league text-2xl font-light">
                                Confirm Password*
                            </span>
                            <p className="shadow-lg text-[#B1B1B1] font-league text-2xl bg-[#213243] p-4 font-light rounded-md flex  items-center mt-3">
                                *************
                            </p>
                        </div>
                    </div>
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
                                03-21-2002
                            </p>
                        </div>
                        <div className="w-[49%]">
                            <span className="text-white font-league text-2xl font-light">
                                Phone Number
                            </span>
                            <p className="shadow-md text-[#B1B1B1] font-league text-2xl font-light bg-[#515E71] p-4 mt-2">
                                03-21-2002
                            </p>
                        </div>
                    </div>
                    <div className="w-full ">
                        <p className="text-white font-league text-2xl font-light">
                            Address*
                        </p>
                        <div className="space-y-5">
                            <p className="shadow-md text-[#B1B1B1] font-league text-2xl font-light bg-[#515E71] p-4 mt-2">
                                Brgy. Villa Kananga, Butuan City{" "}
                            </p>
                            <p className="shadow-md text-[#B1B1B1] font-league text-2xl font-light bg-[#515E71] p-4 mt-2">
                                Agusan Del Norte
                            </p>
                            <p className="shadow-md text-[#B1B1B1] font-league text-2xl font-light bg-[#515E71] p-4 mt-2">
                                Philippines
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
