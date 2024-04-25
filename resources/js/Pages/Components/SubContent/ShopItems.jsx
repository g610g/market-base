import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Rating } from "@material-tailwind/react";
import Vans from "../../../assets/vans.png";
import { Link } from "@inertiajs/inertia-react";
function ShopItems({ products }) {
    console.log(products);
    return (
        <div className="w-full py-[4rem]">
            <p className="font-league text-white text-[2.5rem] font-semibold ">
                Grocery
            </p>
            <div className="grid grid-cols-4  gap-x-2 gap-y-7 mt-3">
                {products.map((product, index) => (
                    <Link
                        as="button"
                        href={`/customer/product/${product.id}`}
                        method="get"
                    >
                        <Card
                            className="h-[430px] bg-[#19273A] rounded-[.5rem] border-none  py-4 w-[350px] hover:bg-[#334756]"
                            key={index}
                        >
                            <CardContent className=" w-full flex justify-center p-0 ">
                                <img
                                    src={Vans}
                                    alt="IDK"
                                    className="w-[257px] h-[257px] "
                                />
                            </CardContent>
                            <CardFooter>
                                <div className="py-3 w-full">
                                    <p className="font-league text-white font-semibold text-[1.4rem] text-left">
                                        {product.product_name}
                                    </p>
                                    <p className="font-league text-white font-semibold text-lg text-left">
                                        {product.brand}
                                    </p>
                                    <div className="flex w-full justify-between">
                                        <p className="font-league text-white font-light text-lg">
                                            {product.storeType}
                                        </p>
                                        <p className="font-league text-white font-light text-lg">
                                            {product.type}
                                        </p>
                                    </div>
                                    <div className="mt-5 w-full flex justify-between">
                                        <Rating value={4} ratedColor="orange" />
                                        <p className="font-leagu">1.2k Sold</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ShopItems;
