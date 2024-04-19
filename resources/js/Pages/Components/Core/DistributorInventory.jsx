import React, { useState } from "react";
import DistributorSideBarLayout from '../Layouts/DistributorSideBarLayout';
//import Pagination from "../Utils/Pagination";
import SearchIcon from "../../../assets/search.svg?react";
import { Button } from "@/components/ui/button";
import DistributorInventoryTable from "../Utils/DistributorInventoryTable";

function DistributorInventory() {

        const tableContent = [
            {
                productId: 2,
                productName: "Test Product Name",
                brandName: "Test Brand Name",
                productVariants: "Test Product Variants",
                productQuantity: 123131,
                productPricing: "PHP500 - PHP1000",
            },
            {
                productId: 2,
                productName: "Test Product Name",
                brandName: "Test Brand Name",
                productVariants: "Test Product Variants",
                productQuantity: 123131,
                productPricing: "PHP500 - PHP1000",
            },
            {
                productId: 2,
                productName: "Test Product Name",
                brandName: "Test Brand Name",
                productVariants: "Test Product Variants",
                productQuantity: 123131,
                productPricing: "PHP500 - PHP1000",
            },
            {
                productId: 2,
                productName: "Test Product Name",
                brandName: "Test Brand Name",
                productVariants: "Test Product Variants",
                productQuantity: 123131,
                productPricing: "PHP500 - PHP1000",
            },
            {
                productId: 2,
                productName: "Test Product Name",
                brandName: "Test Brand Name",
                productVariants: "Test Product Variants",
                productQuantity: 123131,
                productPricing: "PHP500 - PHP1000",
            },
            {
                productId: 2,
                productName: "Test Product Name",
                brandName: "Test Brand Name",
                productVariants: "Test Product Variants",
                productQuantity: 123131,
                productPricing: "PHP500 - PHP1000",
            },
            {
                productId: 2,
                productName: "Test Product Name",
                brandName: "Test Brand Name",
                productVariants: "Test Product Variants",
                productQuantity: 123131,
                productPricing: "PHP500 - PHP1000",
            },
            {
                productId: 2,
                productName: "Test Product Name",
                brandName: "Test Brand Name",
                productVariants: "Test Product Variants",
                productQuantity: 123131,
                productPricing: "PHP500 - PHP1000",
            },
            {
                productId: 2,
                productName: "Test Product Name",
                brandName: "Test Brand Name",
                productVariants: "Test Product Variants",
                productQuantity: 123131,
                productPricing: "PHP500 - PHP1000",
            },
            {
                productId: 2,
                productName: "Test Product Name",
                brandName: "Test Brand Name",
                productVariants: "Test Product Variants",
                productQuantity: 123131,
                productPricing: "PHP500 - PHP1000",
            },
        ];
  return (
    <main className="max-h-screen h-screen flex flex-col p-5">
        <div
            className="flex w-full justify-between items-center"
            id="table-top-header"
        >
            <div className="w-[50%] flex space-x-5 items-center">
                <div className="bg-[#19273A] h-[3rem] pt-1.5 text-center font-league w-2/5">
                    <Button
                    variant="default"
                    className="text-white text-xl rounded-lg"
                    >
                        Add New Product
                    </Button>
                </div>
                {/* <CreateMerchantModel merchantClasses={merchantClasses} /> */}
                <div className="py-1 bg-[#19273A]">
                    <Button
                    variant="default"
                    className="rounded-lg"
                    >
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
        <div className="max-h-[75%] mt-[1.5rem] bg-[#334756]">
             <DistributorInventoryTable tableContent={ tableContent } /> 
        </div>
    </main>
  )
}
DistributorInventory.layout = (page) => <DistributorSideBarLayout>{page}</DistributorSideBarLayout>;
export default DistributorInventory;
