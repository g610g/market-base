import React from "react";
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import CarouselMe from "./CarouselMe";
function Shop() {
    return (
        <main className=" overflow-auto  max-h-screen h-screen items-center">
            <CarouselMe />
            <div className="h-[1500px] w-full">Hello</div>
        </main>
    );
}

Shop.layout = (page) => <CustomerSideBarLayout>{page}</CustomerSideBarLayout>;
export default Shop;
