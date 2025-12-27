"use client";

import { Bell, Search } from "lucide-react";

export function MobileHeader() {
    return (
        <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-card/80 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <span className="font-bold text-lg text-foreground">Pitchlyric</span>
            </div>

            <div className="flex items-center gap-4">
                <button className="text-muted-foreground hover:text-foreground">
                    <Search className="w-5 h-5" />
                </button>
                <button className="text-muted-foreground hover:text-foreground relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-card" />
                </button>
            </div>
        </header>
    );
}
