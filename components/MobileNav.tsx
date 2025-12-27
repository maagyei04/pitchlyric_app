"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Mic2, Send, ShoppingBag, Music } from "lucide-react";
import { clsx } from "clsx";

const navItems = [
    { name: "Home", href: "/home", icon: Home },
    { name: "Lyrics", href: "/dashboard", icon: Music },
    { name: "Studio", href: "/editor/new", icon: Mic2 },
    { name: "Pitch", href: "/pitching", icon: Send },
    { name: "Shop", href: "/marketplace", icon: ShoppingBag },
];

export function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-card border-t border-border z-50 flex items-center justify-around px-4">
            {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href) || (item.href === "/dashboard" && pathname === "/");
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={clsx(
                            "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
                            isActive
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="text-[10px] font-medium">{item.name}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
