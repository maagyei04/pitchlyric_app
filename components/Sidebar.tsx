"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Mic2, Music, ShoppingBag, Send } from "lucide-react";
import { clsx } from "clsx";

const navItems = [
    { name: "Home", href: "/home", icon: Home },
    { name: "Lyric Lab", href: "/dashboard", icon: Music },
    { name: "Studio", href: "/editor/new", icon: Mic2 },
    { name: "Pitching", href: "/pitching", icon: Send },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex flex-col w-64 h-screen border-r border-border bg-card fixed left-0 top-0 z-50">
            <div className="p-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Pitchlyric
                </h1>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href) || (item.href === "/dashboard" && pathname === "/");
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary border border-primary/20"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border space-y-4">
                {/* Pro Banner */}
                <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl p-4 text-white relative overflow-hidden shadow-lg">
                    <div className="relative z-10">
                        <h3 className="text-sm font-bold mb-1">Upgrade to Pro</h3>
                        <p className="text-indigo-100 text-xs mb-3">Unlimited generations & priority pitching.</p>
                        <button className="w-full bg-white text-indigo-600 py-1.5 rounded-lg font-bold text-xs hover:bg-indigo-50 transition-colors">
                            Get Pro Access
                        </button>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                </div>

                <div className="flex items-center gap-3 px-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    <div className="text-sm">
                        <p className="font-medium text-foreground">Songwriter</p>
                        <p className="text-xs text-muted-foreground">Free Plan</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
