"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();   
    const menu = [
        {
            name: "Dashboard",
            href: "/",
        },
        {
            name: "Scripts",
            href: "/scripts",
        },
        {
            name: "Photos",
            href: "/photos",
        },
        {
            name: "Videos",
            href: "/videos",
        },
        {
            name: "Themes",
            href: "/themes",
        },
        {
            name: "Theme Generator",
            href: "/theme-generator",
        },
        {
            name: "History",
            href: "/history",
        },
        {
            name: "My Account",
            href: "/account",
        },
    ];
    return (
        <aside className="hidden md:flex flex-col w-64 bg-zinc-900 border-r border-zinc-800 min-h-screen sticky top-0 text-white">
        
            {/* BRAND */}
            <div className="p-4 border-b border-zinc-800">
                <h1 className="text-lg font-bold text-white">
                PorvaHub
                </h1>
                <p className="text-xs text-zinc-400">
                AI Generation Platform
                </p>
            </div>

            {/* MENU */}
            <nav className="flex flex-col p-3 gap-2">
                {menu.map((item) => {
                const isActive = pathname === item.href;

                return (
                    <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm transition ${
                        isActive
                        ? "bg-blue-600 text-white"
                        : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    }`}
                    >
                    {item.name}
                    </Link>
                );
                })}
            </nav>

            {/* FOOTER */}
            <div className="mt-auto p-4 border-t border-zinc-800 text-xs text-zinc-500">
                v1.0.0 • dev mode
            </div>
        </aside>
    );
};                    