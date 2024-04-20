import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Rating } from "@material-tailwind/react";
import Vans from "../../../assets/vans.png";
function ShopItems() {
    return (
        <div className="grid grid-cols-4 py-[4rem] gap-x-2 gap-y-7">
            {Array.from({ length: 8 }).map((_, index) => (
                <Card className="h-[430px] bg-[#19273A] rounded-[.5rem] border-none  py-4 w-[350px]">
                    <CardContent className=" w-full flex justify-center p-0">
                        <img
                            src={Vans}
                            alt="IDK"
                            className="w-[257px] h-[257px] "
                        />
                    </CardContent>
                    <CardFooter>
                        <div className="py-3 w-full">
                            <p className="font-league text-white font-semibold text-[1.4rem]">
                                Paracetamol Nga Vans
                            </p>
                            <p className="font-league text-white font-semibold text-lg">
                                EBotika Corporation
                            </p>
                            <div className="flex w-full justify-between">
                                <p className="font-league text-white font-light text-lg">
                                    Pharmacy
                                </p>
                                <p className="font-league text-white font-light text-lg">
                                    Pain Reliever
                                </p>
                            </div>
                            <div className="mt-5 w-full flex justify-between">
                                <Rating value={4} ratedColor="orange" />
                                <p className="font-leagu">1.2k Sold</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

export default ShopItems;
