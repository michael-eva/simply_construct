"use client"

import Sidebar from "../ui/dashboard/sidenav"
import { useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <Sidebar setExpand={setSideMenuIsExpand} />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}
