'use client'

import { useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { sidebarStructure } from "./structure";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


const Sidebar: any = () => {
    const username = "Mark Magorimbo";
    const company = "Sentinel";
    const profilePic =
        "https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA";
    const link = "/";

    const [openedMenu, setOpenedMenu] = useState<Record<string, any>>({});
    const [activeName, setActiveName] = useState("");
    const activeLink = usePathname();

    const listRef = useRef<Record<string, HTMLUListElement | null>>({});


    const handleNavigate = (path: string) => {
        setActiveName(path);
    };

    const handleToggle = (name: string) => {
        const rootEl = name.split(".")[0];

        if (openedMenu[name]?.open === true) {
            setOpenedMenu((prevState) => ({
                ...prevState,
                [name]: {
                    open: false,
                    height: "0px"
                },
                [rootEl]: {
                    open: rootEl === name ? false : true,
                    height: `${(listRef.current[rootEl]?.scrollHeight || 0) -
                        (listRef.current[name]?.scrollHeight || 0)
                        }px`
                }
            }));
        } else {
            setOpenedMenu((prevState) => ({
                ...prevState,
                [name]: {
                    open: true,
                    height: `${listRef.current[name]?.scrollHeight || 0}px`
                },
                [rootEl]: {
                    open: true,
                    height: `${(listRef.current[rootEl]?.scrollHeight || 0) +
                        (listRef.current[name]?.scrollHeight || 0)
                        }px`
                }
            }));
        }
    };

    const generateMenu = (item: any, index: number, recursive: number = 0) => {


        if (activeName === "" && activeLink.includes(item.link)) {
            setActiveName(item.name);
        }
        const classesActive = activeName === item.name ? "active" : "";

        const generateLink = () => {
            if (item.link) {
                return item.link
            } else return "#"
        }

        return (
            <li key={index}>
                <Link
                    href={generateLink()}
                    role="button"
                    id={item.id}
                    onClick={() => {
                        if ("child" in item) {
                            handleToggle(item.name);
                        } else if ("link" in item) {
                            handleNavigate(item.name);
                        }
                    }}
                    className={[
                        "group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none",
                        recursive === 0 ? "pl-4" : recursive === 1 ? "pl-11" : "pl-16",
                        activeName === item.name || activeName.split(".")[0] === item.name
                            ? `text-blue-600 font-semibold ${item.parent ? "bg-blue-200/20 " : "bg-transparent"
                            }`
                            : `text-slate-500 ${item.parent && ""}`,
                        "hover:bg-slate-300/20",
                        classesActive
                    ].join(" ")}
                >
                    <div className="flex items-center gap-3">
                        <div>
                            {item.title}
                        </div>
                    </div>
                    {"child" in item ? (
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    ) : (
                        false
                    )}
                </Link>
                {"child" in item ? (
                    <ul
                        ref={(el) => (listRef.current[item.name] = el)}
                        className="overflow-hidden duration-300 ease-in-out"
                        style={{ maxHeight: `${openedMenu[item.name]?.height || "0px"}` }}
                        key={item.name}
                    >
                        {item.child.map((value: any, idx: number) =>
                            generateMenu(value, idx, recursive + 1)
                        )}
                    </ul>
                ) : (
                    false
                )}
            </li>
        );
    };

    return (
        <nav
            role="navigation"
            className="bg-slate-50  border-slate-100 shadow-lg inset-y-0 left-0"
        >
            <div
                className={`relative h-screen overflow-hidden`}
            >
                <SimpleBar style={{ height: "100%" }} >
                    <div className="text-slate-500">
                        <div className="my-8 flex flex-col items-center h-44 overflow-x-hidden">
                            <a
                                href={link}
                                className="text-center flex flex-col items-center justify-center"
                            >
                                <div
                                    className="rounded-full border-4 border-white overflow-hidden "
                                >
                                    <Image
                                        src={profilePic}
                                        alt="profile pic"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                                <div
                                    className="text-base font-semibold text-slate-700 mt-3"
                                >
                                    {username}
                                </div>
                                <div
                                    className=" text-sm text-slate-500"
                                >
                                    {company}
                                </div>
                            </a>
                        </div>

                        <div className="mt-3 mb-10 p-0">
                            <ul className="list-none text-sm font-normal px-3">
                                {sidebarStructure.map((item, index) =>
                                    generateMenu(item, index)

                                )}
                            </ul>
                        </div>
                    </div>
                </SimpleBar>
            </div>
        </nav>
    );
};

export default Sidebar;
