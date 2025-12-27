"use client";

import { Search, Filter, Play, Heart, ShoppingBag, Music } from "lucide-react";

const marketSongs = [
    { id: 1, title: "Summer Vibes", artist: "LyricMaster", genre: "Pop", price: "$200", mood: "Happy" },
    { id: 2, title: "Dark Alley", artist: "GhostWriter", genre: "Hip Hop", price: "$150", mood: "Dark" },
    { id: 3, title: "Love Letter", artist: "MelodyQueen", genre: "R&B", price: "$300", mood: "Romantic" },
    { id: 4, title: "Club Banger", artist: "BeatMaker", genre: "Electronic", price: "$250", mood: "Hype" },
    { id: 5, title: "Acoustic Soul", artist: "FolkHero", genre: "Folk", price: "$180", mood: "Chill" },
    { id: 6, title: "Trap King", artist: "YoungBlood", genre: "Trap", price: "$220", mood: "Aggressive" },
];

export default function Marketplace() {
    return (
        <div className="flex h-[calc(100vh-4rem)] md:h-screen overflow-hidden">
            {/* Filters Sidebar */}
            <aside className="w-64 bg-card border-r border-border p-6 hidden lg:block overflow-y-auto">
                <div className="flex items-center gap-2 mb-6">
                    <Filter className="w-5 h-5 text-primary" />
                    <h2 className="font-bold text-lg">Filters</h2>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase">Genre</h3>
                        <div className="space-y-2">
                            {["Pop", "Hip Hop", "R&B", "Electronic", "Afrobeats"].map((genre) => (
                                <label key={genre} className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="rounded border-muted-foreground/50 bg-muted text-primary focus:ring-primary/50" />
                                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">{genre}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase">Mood</h3>
                        <div className="space-y-2">
                            {["Happy", "Sad", "Hype", "Chill", "Romantic"].map((mood) => (
                                <label key={mood} className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="rounded border-muted-foreground/50 bg-muted text-primary focus:ring-primary/50" />
                                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">{mood}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase">Price Range</h3>
                        <input type="range" className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer" />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>$50</span>
                            <span>$1000+</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Marketplace</h1>
                        <p className="text-muted-foreground">Discover and license professional lyrics.</p>
                    </div>

                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search lyrics, artists, genres..."
                            className="w-full bg-card border border-border rounded-full pl-10 pr-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {marketSongs.map((song) => (
                        <div key={song.id} className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                            {/* Card Header / Waveform Placeholder */}
                            <div className="h-32 bg-muted/30 relative flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                                <div className="flex items-end gap-1 h-12">
                                    {[...Array(20)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-1 bg-primary/40 rounded-full"
                                            style={{ height: `${Math.random() * 100}%` }}
                                        />
                                    ))}
                                </div>
                                <button className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </button>
                            </div>

                            {/* Card Body */}
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground truncate">{song.title}</h3>
                                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                                            <Music className="w-3 h-3" /> {song.artist}
                                        </p>
                                    </div>
                                    <span className="font-bold text-primary">{song.price}</span>
                                </div>

                                <div className="flex gap-2 mb-4">
                                    <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                                        {song.genre}
                                    </span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                                        {song.mood}
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
                                        <ShoppingBag className="w-4 h-4" />
                                        Buy License
                                    </button>
                                    <button className="p-2 border border-border rounded-lg hover:bg-muted hover:text-red-500 transition-colors">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
