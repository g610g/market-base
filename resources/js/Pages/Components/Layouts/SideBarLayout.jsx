import React from "react";
import NotificatonIcon from "../../../assets/bell.svg?react";
import LogoutIcon from "../../../assets/log-out.svg?react";
import MarketBaseLogo from "../../../assets/market-base-secondary.svg?react";
import HomeIcon from "../../../assets/home.svg?react";
import StoreIcon from "../../../assets/store.svg?react";
import DistributorIcon from "../../../assets/distributor.svg?react";
import ProfileIcon from "../../../assets/profile.svg?react";
import Arrow from "../../../assets/arrow.svg?react";
import DownArrow from "../../../assets/down-arrow.svg?react";
import { Link, usePage } from "@inertiajs/inertia-react";

function SideBarLayout({ children }) {
    const { url, component } = usePage();
    const iconDesign = "w-[2rem] h-[2rem]";
    const sideBarItems = [
        {
            itemName: "Home",
            href: "/admin",
            icon: <HomeIcon className={iconDesign} />,
            component: "Components/Core/Admin",
        },
        {
            itemName: "Merchant Store",
            href: "/admin/store",
            icon: <StoreIcon className={iconDesign} />,
            component: "Components/Core/AdminStore",
        },
        {
            itemName: "Distributors",
            href: "/admin/distributor",
            icon: <DistributorIcon className={iconDesign} />,
            component: "Components/Core/AdminDistributor",
        },
        {
            itemName: "Profile",
            href: "/admin/profile",
            icon: <ProfileIcon className={iconDesign} />,
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
                    <Link href="/logout" method="post" as="button">
                        <LogoutIcon />
                    </Link>
                </div>
            </div>
            <div className="flex max-[80%]h-[93%] h-[93%]">
                <div className="w-[18%] px-[2rem] py-4 h-full max-h-full bg-[#2C394B] flex flex-col justify-between">
                    <div>
                        <div className="w-full flex">
                            <MarketBaseLogo className="w-full h-[5rem]" />
                        </div>
                        <div className="flex  flex-col space-y-3 mt-[3rem]  items-center">
                            {sideBarItems.map((item) => (
                                <div className="flex w-full px-5 justify-center py-5 ">
                                    <Link
                                        className="flex w-full space-x-4 font-league text-white text-lg items-center"
                                        href={item.href}
                                    >
                                        {item.icon}
                                        <p className="text-white font-league text-2xl font-semibold">
                                            {item.itemName}
                                        </p>
                                    </Link>
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
                <div className="flex-1 bg-[#082032] px-[2rem] py-[3rem]">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SideBarLayout;
