"use client";

import { MoreHorizontal, Clock, CheckCircle2, XCircle, PlayCircle, Mail } from "lucide-react";
import { clsx } from "clsx";

const pitches = [
    { id: 1, song: "Neon Nights", artist: "Davido", status: "Sent", date: "2 days ago" },
    { id: 2, song: "Heartbreak Hotel", artist: "Tems", status: "Opened", date: "1 week ago" },
    { id: 3, song: "Lagos Vibes", artist: "Wizkid", status: "Played", date: "3 days ago" },
    { id: 4, song: "Midnight Drive", artist: "Burna Boy", status: "Rejected", date: "Yesterday" },
    { id: 5, song: "Cyber Punk", artist: "Rema", status: "Sent", date: "Just now" },
];

const statusColors = {
    Sent: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Opened: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    Played: "bg-green-500/10 text-green-500 border-green-500/20",
    Rejected: "bg-red-500/10 text-red-500 border-red-500/20",
};

const statusIcons = {
    Sent: Mail,
    Opened: CheckCircle2,
    Played: PlayCircle,
    Rejected: XCircle,
};

export default function Pitching() {
    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Pitch Command Center</h1>
                    <p className="text-muted-foreground">Track your demos sent to artists and labels.</p>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold shadow-lg shadow-primary/25 transition-all">
                    New Pitch
                </button>
            </div>

            {/* Kanban Board (Simplified as Grid for now) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {["Sent", "Opened", "Played", "Rejected"].map((status) => (
                    <div key={status} className="bg-card/50 border border-border rounded-xl p-4 flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-2 border-b border-border">
                            <h3 className="font-semibold text-foreground">{status}</h3>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                                {pitches.filter((p) => p.status === status).length}
                            </span>
                        </div>

                        <div className="space-y-3">
                            {pitches
                                .filter((p) => p.status === status)
                                .map((pitch) => {
                                    const StatusIcon = statusIcons[pitch.status as keyof typeof statusIcons];
                                    return (
                                        <div key={pitch.id} className="bg-background border border-border rounded-lg p-3 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                                                    {pitch.song}
                                                </span>
                                                <button className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="font-medium text-foreground mb-1">{pitch.artist}</p>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Clock className="w-3 h-3" />
                                                <span>{pitch.date}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
