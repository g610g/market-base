import React, { useState } from "react";
import CustomerSideBarLayout from "../Layouts/CustomerSideBarLayout";
import CarouselMe from "./CarouselMe";
import ShopItems from "../SubContent/ShopItems";
import Pagination from "../Utils/Pagination";
import SearchBar from "../Utils/SearchBar";
function Shop({ products }) {
    const [search, setSearch] = useState("");
    const myProducts = products.data.filter((product) => {
        return product.product_name.includes(search);
    });
    console.log(myProducts);
    return (
        <main className=" max-h-screen h-screen items-center">
            <CarouselMe />
            <div className=" mt-[6rem] w-full text-red-700">
                <div className="w-full flex justify-between items-center">
                    <div className="w-[50%] flex gap-3">
                        <div className="px-4   rounded-[.9rem] bg-[#19273A] w-[40%] flex items-center">
                            <p className="text-white font-league text-[1.4rem] font-semibold text-center w-full">
                                See all products
                            </p>
                        </div>

                        <SearchBar setter={setSearch} />
                    </div>
                    <div className="w-[40%] flex justify-end ">
                        <Pagination
                            links={products.links}
                            prevPage={products.prev_page_url}
                            nextPage={products.next_page_url}
                        />
                    </div>
                </div>
                <ShopItems products={myProducts} />
            </div>
        </main>
    );
}

Shop.layout = (page) => <CustomerSideBarLayout>{page}</CustomerSideBarLayout>;
export default Shop;
