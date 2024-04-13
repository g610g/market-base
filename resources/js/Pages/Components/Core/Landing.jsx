import React, { useState } from "react";
import LoginLayout from "../Layouts/LoginLayout";
import { router } from "@inertiajs/inertia-react";
const Landing = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    function handleChange(event) {
        const key = event.target.id;
        const value = event.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        router.post("/login", values);
    };
    console.log(values);
    return (
        <div className="flex min-h-[35rem]">
            <div className="flex justify-center items-center min-h-full w-[60%]">
                <p className="font-league text-white text-[7rem] font-bold leading-[7rem] text-left max-h-1/2 ">
                    Supermarket Management System
                </p>
            </div>
            <div className="flex-1">
                <div className="flex min-h-full flex-1 flex-col justify-center bg-loginMain  ">
                    {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div> */}

                    <div className="px-7 flex-col ">
                        <form
                            className="space-y-6 flex flex-col min-h-[15rem]"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="Email"
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 h-[3rem] bg-[#515E71] py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 font-league text-2xl  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        // value={values.password}
                                        placeholder="Password"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 h-[3rem] bg-[#515E71] py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
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
