import React from 'react'
import DistributorSideBarLayout from '../Layouts/DistributorSideBarLayout';
import { Button } from "@/components/ui/button";

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

import DeactivateDistributorDialog from '../Utils/DeactivateDistributorDialog'

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  distributorId: z.string().min(2, {
    message: "Distributor ID must be at least 2 characters.",
  }),
  distributorEmail: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
})

function DistributorProfile() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      distributorId: "",
      distributorEmail: "",
    },
  })
 
  function onSubmit(data){
    console.log(data);
  }
  return (
    <main className="max-h-screen w-full max-w-full h-full flex flex-row px-5">
      <div class="w-full grid grid-rows-3 gap-4">
        <div 
        class="flex col-span-3 bg-slate-800 p-6"
        >
          <img
          src="https://img.lazcdn.com/g/ff/kf/Sc133c60255e34bbbb2c909dce65e42d8S.jpg_720x720q80.jpg"
          alt="Distributor Image"
          className="rounded-sm h-full w-[200px]"
         />
         <div className="flex-1">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="ml-7 w-full">
              <div className="flex gap-2 pr-6">
                <div className='w-[45%]'>
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-white font-league font-light text-xl mb-2">First Name*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="First Name" 
                            className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                            {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500"/>
                      </FormItem>
                    )}
                  />
                </div>
              <div className='flex-1'>
                <FormField
                  control={form.control}
                  name="lastName"
                  className="flex-1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-white font-league font-light text-xl mb-2">Last Name*</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Last Name" 
                          className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                          {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />
              </div>
              </div>
              <div className="flex gap-2 pr-6 mt-4">
              <div className='w-[40%]'>
                <FormField
                  control={form.control}
                  name="distributorId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-white font-league font-light text-xl mb-2">Distributor ID*</FormLabel>
                      <FormControl>
                        <Input 
                        placeholder="Distributor ID" 
                        className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                        {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex-1'>
                <FormField
                  control={form.control}
                  name="distributorEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-white font-league font-light text-xl mb-2">Email*</FormLabel>
                      <FormControl>
                        <Input 
                        placeholder="Email" 
                        className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                        {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />
              </div>
              </div>
            </form>
          </Form>
         </div>
        </div>
        <div class="row-span-3 row-start-2 p-6 bg-slate-800">
          <p className="text-white font-league font-bold text-[1.7rem]">
            Security and Preferences
          </p>  
          <Form {...form}>
            <div className='flex-1 space-y-5 mt-3'>
                  <FormField
                    control={form.control}
                    name="distributorPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-white font-league font-light text-xl mb-2">Password*</FormLabel>
                        <FormControl>
                          <Input 
                          placeholder="•••••••••••" 
                          className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                          {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500"/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="distributorConfirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-white font-league font-light text-xl mb-2">Confirm Password*</FormLabel>
                        <FormControl>
                          <Input 
                          placeholder="•••••••••••" 
                          className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                          {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500"/>
                      </FormItem>
                    )}
                  />
            </div>
          </Form>
          <div className="mt-10">
            <Button
            variant="default"
            className="bg-[#515E71] h-[4rem] rounded text-white font-league w-full text-xl"
            >
                  Edit Profile
            </Button>
            <DeactivateDistributorDialog/>
          </div>
        </div>
        <div class="row-span-3 col-span-2 p-6 bg-slate-800">
          <p className="text-white font-league font-bold text-[1.7rem]">
            Other Information
          </p>
          <Form {...form}>
            <div className='flex-1 space-y-5 mt-3'>
                  <FormField
                    control={form.control}
                    name="birthDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-white font-league font-light text-xl mb-2">Birthdate*</FormLabel>
                        <FormControl>
                          <Input 
                          placeholder="00/00/00" 
                          className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                          {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500"/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-white font-league font-light text-xl mb-2">Phone Number*</FormLabel>
                        <FormControl>
                          <Input 
                          placeholder="+00 00000 0000" 
                          className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                          {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500"/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fullAddress1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-white font-league font-light text-xl mb-2 mt-10">Full Address*</FormLabel>
                        <FormControl>
                          <Input 
                          placeholder="Barangay and City" 
                          className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                          {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500"/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fullAddress2"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                          placeholder="Province and Country" 
                          className="w-full h-[3rem] py-2 px-3 bg-[#213243] border-[#082032] font-league font-light text-lg text-[#B1B1B1] rounded-sm"
                          {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500"/>
                      </FormItem>
                    )}
                  />
            </div>
          </Form>
        </div>
      </div>
    </main>
  )
}

DistributorProfile.layout = (page) => <DistributorSideBarLayout>{page}</DistributorSideBarLayout>;
export default DistributorProfile;
