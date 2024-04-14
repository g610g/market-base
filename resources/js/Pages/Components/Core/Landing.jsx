import React, { useState } from "react";
import LoginLayout from "../Layouts/LoginLayout";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import Modal from "../Utils/Modal";
const Landing = ({ user }) => {
    const error = usePage().props.errors?.not_found_user
        ? usePage().props.errors?.not_found_user[0]
        : false;
    console.log(usePage().props.errors, error);

    const validationSchema = z.object({
        email: z.string().min(1, { message: "Email is required" }).email({
            message: "Must be a valid email",
        }),
        password: z
            .string()
            .min(6, { message: "Password must be atleast 6 characters" }),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(validationSchema) });
    const onSubmit = (data) => {
        Inertia.post("/login", data, { preserveState: false });
    };
    return (
        <div className="flex min-h-[35rem]">
            {error && <Modal shouldOpen={true} message={error} />}
            {/* <Modal /> */}
            <div className="flex justify-center items-center min-h-full w-[60%]">
                <p className="font-league text-white text-[7rem] font-bold leading-[7rem] text-left max-h-1/2 ">
                    Supermarket Management System
                </p>
            </div>
            <div className="flex-1">
                <div className="flex min-h-full flex-1 flex-col justify-center bg-loginMain  ">
                    <div className="px-7 flex-col ">
                        <form
                            className="space-y-6 flex flex-col min-h-[15rem]"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        {...register("email")}
                                        placeholder="Email"
                                        className="block w-full rounded-md border-0 h-[3rem] bg-[#515E71] py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 font-league text-2xl  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors.email && (
                                        <p className="text-xs italic text-red-500 mt-2">
                                            {errors.email?.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        {...register("password")}
                                        placeholder="Password"
                                        required
                                        className="block w-full rounded-md border-0 h-[3rem] bg-[#515E71] py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors.password && (
                                        <p className="text-xs italic text-red-500 mt-2">
                                            {errors.password?.message}
                                        </p>
                                    )}
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#FF4C29] px-3 py-3 text-lg  font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get Started
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
Landing.layout = (page) => <LoginLayout>{page}</LoginLayout>;
export default Landing;
