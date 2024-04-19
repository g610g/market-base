import React from "react";
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import CarouselMe from "./CarouselMe";
import SearchIcon from "../../../assets/search.svg?react";
function Shop() {
    return (
        <main className=" max-h-screen h-screen items-center">
            <CarouselMe />
            <div className=" mt-[6rem] w-full text-red-700">
                <div className="w-full flex justify-between ">
                    <div className="w-[30%] flex gap-3">
                        <div className="px-4  py-1 rounded-[.9rem] bg-[#19273A] w-[60%] flex items-center">
                            <p className="text-white font-league text-[1.4rem] font-semibold text-center w-full">
                                See all products
                            </p>
                        </div>
                        <div className="bg-[#19273A] flex items-center  rounded-[.5rem] p-4">
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="w-[40%] flex justify-end ">pagination</div>
                </div>
            </div>
        </main>
    );
}

Shop.layout = (page) => <CustomerSideBarLayout>{page}</CustomerSideBarLayout>;
export default Shop;