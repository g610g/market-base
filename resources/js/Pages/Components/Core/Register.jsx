import LoginLayout from "../Layouts/LoginLayout.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

const Register = () => {
    const [userType, setUserType] = useState("");
    const [hasError, setHasError] = useState(false);
    const validUserType = ["distributor", "customer"];
    console.log(usePage().props);
    const validationSchema = z
        .object({
            firstName: z.string().min(1, { message: "Firstname is required" }),
            lastName: z.string().min(1, { message: "Lastname is required" }),
            email: z.string().min(1, { message: "Email is required" }).email({
                message: "Must be a valid email",
            }),
            //polish the date
            birthDate: z.string().min(1, { message: "Must be a valid date" }),
            brgyCity: z
                .string()
                .min(1, { message: "Barangay and City is required" }),
            province: z.string().min(1, { message: "Province is required" }),
            phoneNumber: z.string().regex(/^(09|\+639)\d{9}$/, {
                message: "Invalid phone number",
            }),
            country: z.string().min(1, { message: "Country is required" }),
            password: z
                .string()
                .min(6, { message: "Password must be atleast 6 characters" }),
            confirmPassword: z
                .string()
                .min(1, { message: "Confirm Password is required" }),
        })
        .refine((data) => data.password === data.confirmPassword, {
            path: ["confirmPassword"],
            message: "Password don't match",
        });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(validationSchema) });
    if (hasError) {
        console.log("Error");
    }
    console.log(userType);
    const handleUserType = (type) => {
        if (!validUserType.includes(type)) {
            setHasError(true);
            return;
        }
        setUserType(type);
    };
    const onSubmit = (data) => {
        data = { ...data, type: userType };
        console.log(data);
        Inertia.post("/register", data);
    };
    return (
        <form
            className="bg-loginMain min-h-full py-[2rem] px-[3rem] flex "
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col space-y-3 w-[40%] border-r-2 border-white pl-[1.5rem] pr-[3rem]">
                <p className="text-[2.6rem] text-white font-league ">
                    Register as MarketBase User
                </p>
                <div>
                    <p className="text-[2rem] text-white font-league">
                        Type of User
                    </p>
                    <div className="flex w-full justify-between">
                        <button
                            className={`font-league px-[4rem] rounded-full py-[0.8rem] ${
                                userType === "distributor"
                                    ? "bg-[#FF4C29]"
                                    : "bg-[#515E71]"
                            } text-white text-center`}
                            onClick={() => {
                                handleUserType("distributor");
                            }}
                        >
                            Distributor
                        </button>
                        <button
                            className={`font-league px-[4rem] rounded-full py-[0.8rem] ${
                                userType === "customer"
                                    ? "bg-[#FF4C29]"
                                    : "bg-[#515E71]"
                            } text-white text-center`}
                            onClick={() => {
                                handleUserType("customer");
                            }}
                        >
                            Customer
                        </button>
                    </div>
                    <div className="mt-7">
                        <label
                            htmlFor="email"
                            className="block text-white font-league text-xl mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div className="mt-7">
                        <label
                            htmlFor="password"
                            className="block text-white font-league text-xl mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                            {...register("password")}
                        />
                        {errors.password && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <div className="mt-7">
                        <label
                            htmlFor="confirm-password"
                            className="block text-white font-league text-xl mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                            {...register("confirmPassword")}
                        />
                        {errors.confirmPassword && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.confirmPassword?.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-3 flex-1 px-[2rem]">
                <div className="flex w-full justify-between">
                    <div className=" w-[49%]">
                        <label
                            htmlFor="first-name"
                            className="block text-white font-league text-xl mb-2"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="first-name"
                            placeholder="First Name"
                            className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                            {...register("firstName")}
                        />
                        {errors.firstName && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.firstName?.message}
                            </p>
                        )}
                    </div>
                    <div className="  w-[49%]">
                        <label
                            htmlFor="last-name"
                            className="block text-white font-league text-xl mb-2"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="last-name"
                            placeholder="Last Name"
                            className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                            {...register("lastName")}
                        />
                        {errors.lastName && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.lastName?.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex w-full justify-between">
                    <div className="mt-7 w-[49%]">
                        <label
                            htmlFor="phone-number"
                            className="block text-white font-league text-xl mb-2"
                        >
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone-number"
                            placeholder="Phone Number"
                            className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                            {...register("phoneNumber")}
                        />
                        {errors.phoneNumber && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.phoneNumber?.message}
                            </p>
                        )}
                    </div>
                    <div className="mt-7  w-[49%]">
                        <label
                            htmlFor="birth-date"
                            className="block text-white font-league text-xl mb-2"
                        >
                            Birth Date
                        </label>
                        <input
                            type="date"
                            id="birth-date"
                            placeholder="Last Name"
                            className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                            {...register("birthDate")}
                        />
                        {errors.birthDate && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.birthDate?.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="mt-7 w-full">
                        <label
                            htmlFor="phone-number"
                            className="block text-white font-league text-xl mb-2"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Barangay and City"
                            className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                            {...register("brgyCity")}
                        />
                        {errors.brgyCity && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.brgyCity?.message}
                            </p>
                        )}
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="mt-7 w-[49%]">
                            <input
                                type="text"
                                id="province"
                                placeholder="Province"
                                className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                                {...register("province")}
                            />
                            {errors.province && (
                                <p className="text-xs italic text-red-500 mt-2">
                                    {errors.province?.message}
                                </p>
                            )}
                        </div>
                        <div className="mt-7  w-[49%]">
                            <input
                                type="text"
                                id="country"
                                placeholder="Country"
                                className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                                {...register("country")}
                            />
                            {errors.country && (
                                <p className="text-xs italic text-red-500 mt-2">
                                    {errors.country?.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="mx-auto mt-5 bg-orangeButton w-1/2 hover:bg-indigo-500">
                        <button
                            type="submit"
                            className="px-[2.5rem] py-[1rem] w-full font-league text-white text-2xl font-bold"
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
Register.layout = (page) => <LoginLayout>{page}</LoginLayout>;

export default Register;
