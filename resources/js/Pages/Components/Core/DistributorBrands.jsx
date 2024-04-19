import React from 'react'
import DistributorSideBarLayout from '../Layouts/DistributorSideBarLayout';
import DistributorBrandsTable from '../Utils/DistributorBrandsTable';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import TrashIcon from "../../../assets/trash.svg?react";
import ArrowIcon from "../../../assets/arrow.svg?react";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from '@radix-ui/react-label';

const formSchema = z.object({
  brandName: z.string().min(2, {
    message: "Brand Name must be at least 2 characters.",
  }),
  merchantStore: z.string().min(2, {
    message: "Merchant Store must be at least 2 characters.",
  }),
})


export function DistributorBrands() {
    // 1. Define your form.
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        brandName: "",
        merchantStore: "",
      },
    })
   
    function onSubmit(data){
      console.log(data);
    }

    const tableContent = [
      {
          brandId: 1,
          productId: 2,
          productName: "Test Product Name",
          productVariants: "Test Product Variants",
          productQuantity: 123131,
      },
      {
          brandId: 1,
          productId: 2,
          productName: "Test Product Name",
          productVariants: "Test Product Variants",
          productQuantity: 123131,
      },
      {
          brandId: 1,
          productId: 2,
          productName: "Test Product Name",
          productVariants: "Test Product Variants",
          productQuantity: 123131,
      },
      {
          brandId: 1,
          productId: 2,
          productName: "Test Product Name",
          productVariants: "Test Product Variants",
          productQuantity: 123131,
      },
      {
          brandId: 1,
          productId: 2,
          productName: "Test Product Name",
          productVariants: "Test Product Variants",
          productQuantity: 123131,
      },
      {
          brandId: 1,
          productId: 2,
          productName: "Test Product Name",
          productVariants: "Test Product Variants",
          productQuantity: 123131,
      },
      {
          brandId: 1,
          productId: 2,
          productName: "Test Product Name",
          productVariants: "Test Product Variants",
          productQuantity: 123131,
      },
      {
          brandId: 1,
          productId: 2,
          productName: "Test Product Name",
          productVariants: "Test Product Variants",
          productQuantity: 123131,
      },
      {
          brandId: 1,
          productId: 2,
          productName: "Test Product Name",
          productVariants: "Test Product Variants",
          productQuantity: 123131,
      },
      {
          brandId: 1,
          productId: 2,
          productName: "Test Product Name",
          productVariants: "Test Product Variants",
          productQuantity: 123131,
      },
  ];

  return (
    <main className="max-h-screen h-screen flex flex-col px-5"> 
      <div 
        className="flex w-full bg-slate-800 p-8"
        id="brand-form-header"
      >
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-1/2 ">
          <FormField
            control={form.control}
            name="brandName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-white font-league font-light text-xl mb-2">Brand Name*</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="brandName" 
                    className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-white rounded-sm"
                    {...field} />
                </FormControl>
                <FormMessage className="text-red-500"/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="merchantStore"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-white font-league font-light text-xl mb-2">Merchant Store*</FormLabel>
                <FormControl>
                  <Input 
                  placeholder="merchantStore" 
                  className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-white rounded-sm"
                  {...field} />
                </FormControl>
                <FormMessage className="text-red-500"/>
              </FormItem>
            )}
          />
        </form>
      </Form>
        <div
          className="flex flex-row w- bg-slate-800 pl-5 pt-8 justify-start"
        >
          <Button
           variant="default"
           className="bg-[#FF4C29] h-[3.5rem] rounded"
          >
              <TrashIcon />
          </Button>
        </div>
        <div 
          className="flex flex-row w-3/5 bg-slate-800 pt-8 space-x-5 justify-end"
        >
          <Button
            variant="default"
            className="bg-[#334756] h-[3.5rem] rounded text-white font-league w-1/3 text-xl"
            >
                  Create Brand
            </Button>
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
      <div className="max-h-[50%] mt-[3rem] bg-[#334756]">
             <DistributorBrandsTable tableContent={ tableContent } /> 
      </div>
    </main>
  );
}

DistributorBrands.layout = (page) => <DistributorSideBarLayout>{page}</DistributorSideBarLayout>;
export default DistributorBrands;
