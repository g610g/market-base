import React from "react";
import AtIcon from "../../../assets/at.svg?react";
import PhoneIcon from "../../../assets/phone.svg?react";
import LocationIcon from "../../../assets/location.svg?react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import DistributorDialogTable from "./DistributorDialogTable";

function DistributorInfoDialog({ distributorData }) {
    console.log(distributorData);
    return (
        <Dialog>
            <DialogTrigger className="bg-orangeButton rounded-[.8rem] text-white font-league font-semibold text-[1rem] hover:bg-indigo-600 px-5">
                Profile
            </DialogTrigger>
            <DialogContent className="px-[1rem] py-[2.5rem]  max-w-[650px] bg-[#19273A]">
                <div className="h-[500px] w-full flex flex-col">
                    <div className="flex w-full justify-between">
                        <img
                            src="https://img.lazcdn.com/g/ff/kf/Sc133c60255e34bbbb2c909dce65e42d8S.jpg_720x720q80.jpg"
                            alt="Distributor Image"
                            className="rounded-[.5rem] h-[200px] w-[40%] "
                        />
                        <div className="flex-1 flex flex-col w-full max-w-full px-[.5rem]">
                            <p className="text-white font-league text-2xl">
                                {distributorData?.user.first_name}{" "}
                                {distributorData?.user.last_name}
                            </p>
                            <p className="text-white font-league truncate font-semibold">
                                Distributor ID: {distributorData?.user.id}
                            </p>
                            <div className="bg-[#334756] w-full max-w-full py-4 px-[.7rem] space-y-3 rounded-[.5rem]">
                                <div className="items-center flex w-full justify-between">
                                    <AtIcon className="" />
                                    <p className=" w-[90%] max-w-[90%] text-white font-semibold font-league">
                                        {distributorData.user.email}
                                    </p>
                                </div>
                                <div className="flex w-full items-center justify-between">
                                    <PhoneIcon />
                                    <p className="truncate w-[90%] max-w-[90%] text-white font-semibold font-league">
                                        {distributorData.user.phone_number}
                                    </p>
                                </div>
                                <div className="flex w-full items-center justify-between">
                                    <LocationIcon />
                                    <p className=" w-[90%] max-w-[90%] text-white font-semibold font-league">
                                        Brgy. Villa Kananga, Butuan City, Agusan
                                        Del Norte, Philippines
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full mt-4 bg-[#2C394B] overflow-auto rounded-[.2rem]">
                        <DistributorDialogTable
                            brandStore={distributorData.brands}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default DistributorInfoDialog;
