'use client'

import { FC, useState } from "react";
import Link from "next/link";
import { sidebarStructure } from "./structure";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

interface SidebarProps { }

const Sidebar: FC<SidebarProps> = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname()
    const handleDropdownClick = (itemId: string) => {
        if (activeDropdown === itemId) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(itemId);
        }
    };

    return (
        <nav className="bg-slate-50 border-slate-100 shadow-sm h-full">
            <div className="py-8 flex flex-col items-center h-44 overflow-x-hidden">
                <a
                    // href={link}
                    className={`text-center flex flex-col items-center justify-center`}
                >
                    <div
                        className={`rounded-full border-4 border-white overflow-hidden duration-300`}
                    >
                        <Image
                            alt="Profile Pic"
                            width={70}
                            height={70}
                            src="https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA" />
                    </div>
                    <div
                        className={`text-base font-semibold text-slate-700 mt-3 truncate duration-300`}
                    >
                        {/* {username} */}
                        <p>Mark Magorimbo</p>
                    </div>
                    <div
                        className={`duration-300 text-sm text-slate-500 truncate`}
                    >
                        {/* {company} */}
                        <p>Sentinel</p>
                    </div>
                </a>
            </div>
            <ul className="pt-16">
                {sidebarStructure.map((item) => (
                    <li key={item.id}>
                        {item.child ? (
                            // Items in navbar which have children
                            <div>
                                <span
                                    onClick={() => handleDropdownClick(item.id)}
                                    className={clsx("flex h-[48px] grow items-center rounded-md p-3 text-sm font-medium hover:bg-slate-100 md:flex-none md:justify-between md:p-2 md:px-3", {
                                        'bg-sky-100 text-blue-600': pathname.includes(item.name),
                                    })}
                                >
                                    {item.title}
                                    <FaAngleRight />
                                </span>
                                <ul
                                    className={clsx("transition-max-height overflow-hidden duration-300 ease-in-out", {
                                        'max-h-0 overflow-hidden': activeDropdown !== item.id,
                                        'max-h-48': activeDropdown === item.id,
                                    })}
                                >
                                    {item.child.map((childItem) => (
                                        <li key={childItem.id}>
                                            {/* Children of the dropdown items */}
                                            <Link
                                                href={childItem.link}
                                                className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm  hover:bg-slate-100 md:flex-none md:justify-start md:p-2 md:px-3", {
                                                    'font-bold text-blue-600': pathname === childItem.link,
                                                })}
                                            >
                                                <p className="pl-5 flex items-center gap-3">
                                                    <GoDotFill />
                                                    {childItem.title}
                                                </p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            // Items which have no children
                            <Link
                                href={item.link}
                                className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-slate-100 md:flex-none md:justify-start md:p-2 md:px-3", {
                                    'bg-sky-100 text-blue-600': pathname === item.link,
                                })}
                            >
                                <p>{item.title}</p>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
