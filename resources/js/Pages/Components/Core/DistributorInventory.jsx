import React, { useState } from "react";
import DistributorSideBarLayout from "../Layouts/DistributorSideBarLayout";
//import Pagination from "../Utils/Pagination";
import SearchIcon from "../../../assets/search.svg?react";
import { Button } from "@/components/ui/button";
import DistributorAddProductDialog from "../Utils/DistributorAddProductDialog";
import DistributorProductsTable from "../Utils/DistributorProductsTable";

const DistributorInventory = ({ inventory }) => {
    //filter based on search :( not optimized
    const data = inventory.products.map((product) => {
        return {
            productId: product.product_id,
            productName: product.product_name,
            brandName: product.brand.brand_name,
            variant: product.variant,
            quantity: 20,
            price: product.price,
        };
    });
    return (
        <main className="max-h-screen h-screen flex flex-col p-5">
            <div
                className="flex w-full justify-between items-center"
                id="table-top-header"
            >
                <div className="w-[50%] flex space-x-5 items-center">
                    <div>
                        <DistributorAddProductDialog />
                    </div>
                    {/* <CreateMerchantModel merchantClasses={merchantClasses} /> */}
                    <div className="py-1 bg-[#19273A]">
                        <Button variant="default" className="rounded-lg">
                            <SearchIcon />
                        </Button>
                    </div>
                </div>
                <div className="w-[50%] max-w-[50%] flex justify-end">
                    {/* <Pagination
                    links={merchantData.links}
                    nextPage={merchantData.next_page_url}
                    prevPage={merchantData.prev_page_url}
                    currentPage={merchantData.currentPage}
                /> */}
                </div>
            </div>
            <div className="max-h-[75%]  h-[75%] mt-[1.5rem] bg-[#334756] rounded-2xl">
                <DistributorProductsTable data={data} />
            </div>
        </main>
    );
};
DistributorInventory.layout = (page) => (
    <DistributorSideBarLayout>{page}</DistributorSideBarLayout>
);
export default DistributorInventory;
