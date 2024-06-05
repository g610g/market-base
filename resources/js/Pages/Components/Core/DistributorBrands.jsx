import React from "react";
import DistributorSideBarLayout from "../Layouts/DistributorSideBarLayout";
import DistributorBrandsTable from "../Utils/DistributorBrandsTable";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import ArrowIcon from "../../../assets/arrow.svg?react";

import CreateBrandDialog from "../Utils/CreateBrandDialog";
import DeleteBrandDialog from "../Utils/DeleteBrandDialog";
import { usePage } from "@inertiajs/inertia-react";

export function DistributorBrands({ tableData, merchantStores }) {
    const { errors } = usePage().props;
    const formSchema = z.object({
        brandName: z.string().min(2, {
            message: "Brand Name must be at least 2 characters.",
        }),
        merchantStore: z.string().min(2, {
            message: "Merchant Store must be at least 2 characters.",
        }),
    });
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    function onSubmit(data) {
        console.log(data);
    }

    return (
        <main className="max-h-screen h-screen flex flex-col px-5">
            <div
                className="flex w-full bg-slate-800 p-8"
                id="brand-form-header"
            >
                <div className="flex flex-row w-full bg-slate-800  space-x-5 justify-between">
                    <CreateBrandDialog merchantStores={merchantStores} />
                    <div className="flex gap-5">
                        <Button
                            variant="default"
                            className="bg-[#848484] h-[3.5rem] rounded transform rotate-180"
                        >
                            <ArrowIcon />
                        </Button>
                        <Button
                            variant="default"
                            className="bg-[#FF4C29] h-[3.5rem] rounded"
                        >
                            <ArrowIcon />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="max-h-[65%] min-w-[50%]  h-[65%] rounded-2xl mt-[3rem] bg-[#334756] ">
                <DistributorBrandsTable tableData={tableData} />
            </div>
        </main>
    );
}

DistributorBrands.layout = (page) => (
    <DistributorSideBarLayout>{page}</DistributorSideBarLayout>
);
export default DistributorBrands;
