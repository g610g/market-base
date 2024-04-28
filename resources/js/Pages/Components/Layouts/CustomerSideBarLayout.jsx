import React from "react";
import ProfileIcon from "../../../assets/customer-profile.svg?react";
import ShopIcon from "../../../assets/customer-shop.svg?react";
import CartIcon from "../../../assets/customer-cart.svg?react";
import TransactionIcon from "../../../assets/customer-transaction.svg?react";
import NotificatonIcon from "../../../assets/bell.svg?react";
import Arrow from "../../../assets/arrow.svg?react";
import DownArrow from "../../../assets/down-arrow.svg?react";
import LogoutDropDown from "../Utils/LogoutDropDown";
import { Link, usePage } from "@inertiajs/inertia-react";
import MarketBaseLogo from "../../../assets/market-base-secondary.svg?react";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
function CustomerSideBarLayout({ children }) {
    const { flash } = usePage().props;
    const { is_guest, is_validated } = flash.userData.session;
    const { url, component } = usePage();
    console.log(flash);
    const iconDesign = "w-[2rem] h-[2rem]";
    const sideBarItems = [
        {
            itemName: " Profile",
            disabled: is_guest ? true : false,
            href: "/customer",
            icon: <ProfileIcon className={iconDesign} />,
            component: "Components/Core/CustomerProfile",
        },
        {
            itemName: "Shop",
            href: "/customer/shop",
            disabled: is_guest || is_validated ? false : true,
            icon: <ShopIcon className={iconDesign} />,
            component: "Components/Core/Shop",
        },
        {
            itemName: "Cart",
            href: "/customer/cart",
            disabled: is_guest ? true : false,
            icon: <CartIcon className={iconDesign} />,
            component: "Components/Core/MyCart",
        },
        {
            itemName: "Transaction",
            href: "/customer/transaction",
            disabled: is_guest ? true : false,
            icon: <TransactionIcon className={iconDesign} />,
            component: "Components/Core/Transactions",
        },
    ];
    return (
        <div className=" max-h-screen h-screen overflow-hidden">
            <div
                id="top-notif"
                className="h-[7%] text-center text-white bg-[#19273A] flex w-full max-w-full justify-end py-4 px-5"
            >
                <div className="flex w-[5%] justify-between items-center">
                    <NotificatonIcon />
                    {/* <Link method="post" href="/logout" as="button">
                        <LogoutIcon />
                    </Link>
                    */}
                    <LogoutDropDown />
                </div>
            </div>
            <div className="flex max-[80%] h-[93%]">
                <div className="w-[18%] px-[2rem] py-4 h-full max-h-full bg-[#2C394B] flex flex-col justify-between">
                    <div>
                        <div className="w-full flex">
                            <MarketBaseLogo className="w-full h-[5rem]" />
                        </div>
                        <div className="flex  flex-col space-y-3 mt-[3rem]  items-center">
                            {sideBarItems.map((item, index) => (
                                <div
                                    className="flex w-full px-5 justify-center py-5 "
                                    key={index}
                                >
                                    <Button
                                        disabled={item.disabled}
                                        className="w-full"
                                    >
                                        <Link
                                            className="flex w-full space-x-4 font-league text-white text-lg items-center"
                                            href={item.href}
                                        >
                                            {item.icon}
                                            <p className="text-white font-league text-2xl font-semibold">
                                                {item.itemName}
                                            </p>
                                        </Link>
                                    </Button>
                                    {component === item.component ? (
                                        <Arrow />
                                    ) : (
                                        <DownArrow />
                                    )}
                                    <div className="flex-1"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-[6rem] px-5">
                        <p className="font-league font-light w-full text-center text-white">
                            All Rights Reserved 2024 - 2025
                        </p>
                        <p className="font-league font-light w-full text-center text-white">
                            An ITE-19 Midterm Project Gonzales-Gio and
                            Soliva-Mary
                        </p>
                    </div>
                </div>
                <div className="flex-1 bg-[#082032] px-[3rem] py-[3rem] max-h-full h-full overflow-auto">
                    {children}
                </div>
            </div>
            <Toaster />
        </div>
    );
}

export default CustomerSideBarLayout;
