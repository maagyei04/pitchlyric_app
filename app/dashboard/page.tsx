"use client";

import Link from "next/link";
import { Plus, Search, FolderPlus, MoreHorizontal, Play, FileText } from "lucide-react";
import { clsx } from "clsx";

// Dummy Data
const drafts = [
    { id: 1, title: "Neon Nights", lastEdited: "2 mins ago", status: "Draft", tags: ["#Synthwave", "#Chill"] },
    { id: 2, title: "Heartbreak Hotel", lastEdited: "1 hour ago", status: "Generated", tags: ["#Pop", "#Sad"] },
    { id: 3, title: "Lagos Vibes", lastEdited: "Yesterday", status: "Draft", tags: ["#Afrobeats", "#Hype"] },
    { id: 4, title: "Midnight Drive", lastEdited: "2 days ago", status: "Generated", tags: ["#R&B", "#LateNight"] },
    { id: 5, title: "Cyber Punk", lastEdited: "1 week ago", status: "Draft", tags: ["#Electronic", "#Dark"] },
];

export default function Dashboard() {
    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Lyric Lab</h1>
                    <p className="text-muted-foreground">Manage your drafts and generated demos.</p>
                </div>
                <Link href="/editor/new">
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/25 flex items-center gap-2 transition-all hover:scale-105">
                        <Plus className="w-5 h-5" />
                        New Lyric
                    </button>
                </Link>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search songs..."
                        className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium">
                    <FolderPlus className="w-4 h-4" />
                    New Folder
                </button>
            </div>

            {/* Grid View */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {drafts.map((draft) => (
                    <div
                        key={draft.id}
                        className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={clsx(
                                "p-2 rounded-lg",
                                draft.status === "Generated" ? "bg-secondary/10 text-secondary" : "bg-muted text-muted-foreground"
                            )}>
                                {draft.status === "Generated" ? <Play className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                            </div>
                            <button className="text-muted-foreground hover:text-foreground">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {draft.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">Edited {draft.lastEdited}</p>

                        <div className="flex flex-wrap gap-2">
                            {draft.tags.map((tag) => (
                                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
