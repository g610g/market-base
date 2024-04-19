import React from 'react'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

  const formSchema = z.object({
    merchantStore: z.string().min(2, {
      message: "Merchant Store must be at least 2 characters.",
    }),
  })
  

function CreateBrandDialog() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          merchantStore: "",
        },
      })
     
      function onSubmit(data){
        console.log(data);
      }
  return (
    <AlertDialog>
        <AlertDialogTrigger
        className="bg-[#334756] h-[3.5rem] rounded text-white font-league w-1/3 text-xl"
        >
        Create Brand
        </AlertDialogTrigger>
    <AlertDialogContent className="bg-[#19273A]">
        <AlertDialogHeader>
            <AlertDialogTitle
            className="text-white font-league text-3xl font-regular text-white"
            >
                Create Brand
            </AlertDialogTitle>
            <DropdownMenu>
                <label className="block text-white font-league font-light text-lg">
                    Merchant Store*
                </label>
                <DropdownMenuTrigger
                className='bg-[#213243] h-[3rem] border-[#082032] font-league font-light text-lg text-white rounded-sm text-left pl-3'
                >
                    Choose One
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col bg-[#213243] border-[#082032] w-full">
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="font-league font-light text-lg text-white">Test Classification</DropdownMenuItem>
                    <DropdownMenuItem className="font-league font-light text-lg text-white">Test Classification</DropdownMenuItem>
                    <DropdownMenuItem className="font-league font-light text-lg text-white">Test Classification</DropdownMenuItem>
                    <DropdownMenuItem className="font-league font-light text-lg text-white">Test Classification</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialogDescription>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-2">
                        <FormField
                        control={form.control}
                        name="createBrandName"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="block text-white font-league font-light text-lg mb-2">Brand Name*</FormLabel>
                            <FormControl>
                            <Input 
                            placeholder="Brand Name" 
                            className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-white rounded-sm"
                            {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500"/>
                        </FormItem>
                        )}
                    />
                    </form>
                </Form>
            </AlertDialogDescription>
            <DropdownMenu>
                <label className="block text-white font-league font-light text-lg">
                    Brand Category*
                </label>
                <DropdownMenuTrigger
                className='bg-[#213243] h-[3rem] border-[#082032] font-league font-light text-lg text-white rounded-sm text-left pl-3'
                >
                    Choose One
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col bg-[#213243] border-[#082032] w-full">
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="font-league font-light text-lg text-white">Test Category</DropdownMenuItem>
                    <DropdownMenuItem className="font-league font-light text-lg text-white">Test Category</DropdownMenuItem>
                    <DropdownMenuItem className="font-league font-light text-lg text-white">Test Category</DropdownMenuItem>
                    <DropdownMenuItem className="font-league font-light text-lg text-white">Test Category</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-center">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
            className="bg-[#FF4C29] text-white"
            >
                Continue
            </AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>

  )
}

export default CreateBrandDialog
