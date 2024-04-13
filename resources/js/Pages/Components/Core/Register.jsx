import LoginLayout from "../Layouts/LoginLayout.jsx";
const Register = () => {
    return (
        <form
            action=""
            className="bg-loginMain min-h-full py-[2rem] px-[3rem] flex "
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
                        <button>Distributor</button>
                        <button>Customer</button>
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
                        />
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
                        />
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
                        />
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
                        />
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
                        />
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
                        />
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
                        />
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
                            id="phone-number"
                            placeholder="Barangay and City"
                            className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                        />
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="mt-7 w-[49%]">
                            <input
                                type="text"
                                id="province"
                                placeholder="Province"
                                className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                            />
                        </div>
                        <div className="mt-7  w-[49%]">
                            <input
                                type="text"
                                id="country"
                                placeholder="Country"
                                className="w-full py-2 px-3 bg-[#515E71] border border-black  font-league text-xl"
                            />
                        </div>
                    </div>
                    <div className="mx-auto mt-5 bg-[#FF4C29] w-1/2 hover:bg-indigo-500">
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
