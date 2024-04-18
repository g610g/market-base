import React from "react";
import MessageIcon from "../../../assets/message.svg?react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DistributorInfoDialog from "./DistributorInfoDialog";
function GridCard({ distributor, id }) {
    return (
        <Card
            className="h-[380px] bg-[#19273A] rounded-[.5rem] border-none px-5 py-2 w-full"
            key={distributor.distributorData.user.id}
        >
            <CardHeader className="space-y-4 p-3">
                <div className="w-full flex justify-center">
                    <img
                        src="https://img.lazcdn.com/g/ff/kf/Sc133c60255e34bbbb2c909dce65e42d8S.jpg_720x720q80.jpg"
                        alt="Distributor Image"
                        className="rounded-sm h-[150px] w-[150px]"
                    />
                </div>
                <CardDescription className="w-full flex justify-center font-league text-white text-xl font-semibold border-b border-white truncate">
                    {`#00${id + 1}`}{" "}
                    {distributor.distributorData.user.first_name}{" "}
                    {distributor.distributorData.user.last_name}
                </CardDescription>
            </CardHeader>
            <CardContent className="p-2">
                <div className="flex w-full justify-between">
                    <p className="font-league text-white text-xl">
                        Merchant Stores
                    </p>
                    <p className="font-league text-white text-xl">
                        {distributor.merchantStoreCount}
                    </p>
                </div>
                <div className="flex w-full justify-between">
                    <p className="font-league text-white text-xl">Brands</p>
                    <p className="font-league text-white text-xl">
                        {distributor.brandsCount}
                    </p>
                </div>
                <div className="flex w-full justify-between">
                    <p className="font-league text-white text-xl">Product</p>
                    <p className="font-league text-white text-xl">88</p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="flex w-full justify-center space-x-2">
                    <DistributorInfoDialog
                        distributorData={distributor.distributorData}
                    />
                    <Button
                        variant="default"
                        className="bg-[#334756] rounded-[.8rem]"
                    >
                        <MessageIcon />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default GridCard;
