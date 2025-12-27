"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Sparkles, Music, Mic2, TrendingUp, User, Play, Heart, ChevronRight, Star, FileText, Layers, Users, Disc } from "lucide-react";
import { clsx } from "clsx";

export default function Home() {
    const [activeTab, setActiveTab] = useState("For You");
    const [activeLyricTab, setActiveLyricTab] = useState("Top Rated");

    const tabs = ["For You", "Trending", "New Demos"];
    const lyricTabs = ["Top Rated", "Newest", "Trending"];

    const songs = {
        "For You": [
            { title: "Summer Vibe", artist: "LyricPro", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80" },
            { title: "Midnight Rain", artist: "SoulWriter", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80" },
            { title: "Hustle Hard", artist: "TrapKing", image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=500&q=80" },
            { title: "Ocean Eyes", artist: "IndieGirl", image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=500&q=80" },
        ],
        "Trending": [
            { title: "Neon Lights", artist: "CyberPunk", image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80" },
            { title: "Acoustic Soul", artist: "FolkHero", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&q=80" },
            { title: "City Pop", artist: "RetroWave", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&q=80" },
            { title: "Lofi Study", artist: "ChillBeats", image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=500&q=80" },
        ],
        "New Demos": [
            { title: "Future Bass", artist: "BassDrop", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80" },
            { title: "Indie Rock", artist: "GarageBand", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500&q=80" },
            { title: "Piano Ballad", artist: "KeysMaster", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&q=80" },
            { title: "Synthwave", artist: "NeonDriver", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80" },
        ]
    };

    const lyrics = {
        "Top Rated": [
            { title: "Broken Dreams", author: "PoetX", rating: 4.8, genre: "Ballad" },
            { title: "City Lights", author: "UrbanFlow", rating: 4.7, genre: "Pop" },
            { title: "Warrior's Cry", author: "EpicPen", rating: 4.9, genre: "Rock" },
            { title: "Love Letter", author: "RomanceWriter", rating: 4.6, genre: "R&B" },
        ],
        "Newest": [
            { title: "Morning Dew", author: "NatureBoy", rating: 4.2, genre: "Folk" },
            { title: "Cyber Heart", author: "TechBard", rating: 4.5, genre: "Synth" },
            { title: "Street Life", author: "RealTalk", rating: 4.3, genre: "Hip Hop" },
            { title: "Lost at Sea", author: "SailorMoon", rating: 4.4, genre: "Indie" },
        ],
        "Trending": [
            { title: "Party Anthem", author: "ClubKing", rating: 4.6, genre: "Dance" },
            { title: "Deep Thoughts", author: "MindOverMatter", rating: 4.8, genre: "Soul" },
            { title: "Rebel Yell", author: "PunkRocker", rating: 4.5, genre: "Punk" },
            { title: "Smooth Jazz", author: "CoolCat", rating: 4.7, genre: "Jazz" },
        ]
    };

    const categories = [
        { name: "Afrobeats", image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=500&q=80" },
        { name: "Hip Hop", image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=500&q=80" },
        { name: "R&B", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&q=80" },
        { name: "Pop", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&q=80" },
        { name: "Gospel", image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80" },
        { name: "Reggae", image: "https://images.unsplash.com/photo-1596201668688-292193245456?w=500&q=80" },
    ];

    const creators = [
        { name: "Sarah J.", role: "Pop Lyricist", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
        { name: "Mike Beats", role: "Producer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
        { name: "AfroSoul", role: "Songwriter", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" },
        { name: "Jessica L.", role: "Vocalist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
        { name: "David K.", role: "Composer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" },
    ];

    const playlists = [
        { title: "Writing Focus", count: "50 songs", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&q=80" },
        { title: "Late Night Vibes", count: "32 songs", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80" },
        { title: "Workout Hype", count: "45 songs", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80" },
        { title: "Chill & Relax", count: "60 songs", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&q=80" },
    ];

    return (
        <div className="p-6 max-w-8xl mx-auto space-y-12">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-background via-background/90 to-transparent border border-border p-8 md:p-12 flex items-center">
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Ready to write, <br /><span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Michael</span>?
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                        Your studio is ready. Start a new lyric or continue where you left off.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/editor/new">
                            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/25 flex items-center gap-2 transition-all hover:scale-105">
                                <Sparkles className="w-5 h-5" />
                                Start New Song
                            </button>
                        </Link>
                        <Link href="/dashboard">
                            <button className="bg-card/50 backdrop-blur hover:bg-muted text-foreground border border-border px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all">
                                View Drafts
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
                        alt="Studio Background"
                        className="w-full h-full object-cover object-right opacity-50"
                    />
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Activity & Explore */}
                <div className="lg:col-span-2 space-y-10">

                    {/* Trending & For You (Tabs & Horizontal Scroll) */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-border pb-1">
                            <div className="flex items-center gap-6">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={clsx(
                                            "text-xl font-bold pb-3 -mb-1.5 transition-colors",
                                            activeTab === tab
                                                ? "text-foreground border-b-2 border-primary"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <Link href="/marketplace" className="text-sm text-primary hover:underline flex items-center gap-1 pb-2">
                                See All <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Horizontal Scroll Container */}
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                            {songs[activeTab as keyof typeof songs].map((song, i) => (
                                <div key={i} className="group cursor-pointer min-w-[160px] w-[160px] md:min-w-[200px] md:w-[200px]">
                                    <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-muted">
                                        <img src={song.image} alt={song.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                                                <Play className="w-6 h-6 ml-1" />
                                            </div>
                                        </div>
                                        <button className="absolute top-2 right-2 p-2 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40">
                                            <Heart className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <h3 className="font-bold text-foreground truncate group-hover:text-primary transition-colors">{song.title}</h3>
                                    <p className="text-sm text-muted-foreground truncate">by {song.artist}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Public Lyrics Section */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-border pb-1">
                            <div className="flex items-center gap-6">
                                {lyricTabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveLyricTab(tab)}
                                        className={clsx(
                                            "text-xl font-bold pb-3 -mb-1.5 transition-colors",
                                            activeLyricTab === tab
                                                ? "text-foreground border-b-2 border-primary"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <Link href="/marketplace" className="text-sm text-primary hover:underline flex items-center gap-1 pb-2">
                                See All <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Horizontal Scroll Container for Lyrics */}
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                            {lyrics[activeLyricTab as keyof typeof lyrics].map((lyric, i) => (
                                <div key={i} className="group cursor-pointer min-w-[200px] w-[200px] bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all flex flex-col justify-between h-[180px]">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div className="flex items-center gap-1 text-xs font-medium text-yellow-500">
                                                <Star className="w-3 h-3 fill-yellow-500" /> {lyric.rating}
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-foreground truncate group-hover:text-primary transition-colors mb-1">{lyric.title}</h3>
                                        <p className="text-xs text-muted-foreground truncate">by {lyric.author}</p>
                                        <span className="text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground mt-2 inline-block">{lyric.genre}</span>
                                    </div>
                                    <button className="w-full mt-3 bg-muted hover:bg-primary hover:text-white text-foreground text-xs font-bold py-2 rounded-lg transition-colors">
                                        Use Lyric
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Categories Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Layers className="w-5 h-5 text-primary" /> Browse Categories
                            </h2>
                        </div>

                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                            {categories.map((cat, i) => (
                                <div key={i} className="relative min-w-[140px] w-[140px] h-[80px] rounded-xl overflow-hidden cursor-pointer group">
                                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <span className="text-white font-bold text-sm tracking-wide">{cat.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Creators You May Like */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" /> Creators You May Like
                            </h2>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                            {creators.map((creator, i) => (
                                <div key={i} className="min-w-[150px] w-[150px] bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                                    <img src={creator.image} alt={creator.name} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-border" />
                                    <h3 className="font-bold text-foreground text-sm truncate w-full">{creator.name}</h3>
                                    <p className="text-xs text-muted-foreground mb-3">{creator.role}</p>
                                    <button className="text-xs font-medium text-primary hover:text-white hover:bg-primary border border-primary/20 px-4 py-1.5 rounded-full transition-all w-full">Follow</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Featured Playlists */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Disc className="w-5 h-5 text-primary" /> Featured Playlists
                            </h2>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                            {playlists.map((playlist, i) => (
                                <div key={i} className="relative min-w-[200px] w-[200px] h-[280px] rounded-xl overflow-hidden cursor-pointer group">
                                    <img src={playlist.image} alt={playlist.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex flex-col justify-end p-4">
                                        <h3 className="text-white font-bold text-lg leading-tight">{playlist.title}</h3>
                                        <p className="text-white/80 text-xs">{playlist.count}</p>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full backdrop-blur-sm">
                                        <Play className="w-3 h-3 text-white fill-white" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-4 pt-4 border-t border-border">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-foreground">Recent Activity</h2>
                            <Link href="/dashboard" className="text-sm text-primary hover:underline flex items-center gap-1">
                                View All <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {[
                                { title: "Neon Nights", action: "Edited draft", time: "2 mins ago", icon: Music },
                                { title: "Heartbreak Hotel", action: "Generated demo", time: "1 hour ago", icon: Mic2 },
                                { title: "Lagos Vibes", action: "Pitched to Wizkid", time: "Yesterday", icon: TrendingUp },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors cursor-pointer group">
                                    <div className="p-3 rounded-full bg-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.action}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column: Sidebar Widgets */}
                <div className="space-y-8">

                    {/* Suggested Lyricists */}
                    <div className="bg-card border border-border rounded-xl p-5">
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" /> Suggested Creators
                        </h3>
                        <div className="space-y-4">
                            {[
                                { name: "Sarah J.", role: "Pop Lyricist", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
                                { name: "Mike Beats", role: "Producer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
                                { name: "AfroSoul", role: "Songwriter", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" },
                            ].map((creator, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <img src={creator.image} alt={creator.name} className="w-10 h-10 rounded-full object-cover border border-border" />
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-foreground">{creator.name}</p>
                                        <p className="text-xs text-muted-foreground">{creator.role}</p>
                                    </div>
                                    <button className="text-xs font-medium text-primary hover:text-primary/80 border border-primary/20 px-3 py-1 rounded-full hover:bg-primary/10 transition-colors">Follow</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Categories */}
                    <div className="bg-card border border-border rounded-xl p-5">
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" /> Top Categories
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["Afrobeats", "Trap", "R&B", "Amapiano", "Pop", "Drill", "Soul"].map((cat) => (
                                <span key={cat} className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer text-muted-foreground border border-transparent hover:border-primary/20">
                                    #{cat}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Featured Demo */}
                    <div className="bg-card border border-border rounded-xl p-5 relative overflow-hidden group cursor-pointer h-64 flex flex-col justify-end">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80" alt="Featured" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="relative z-20">
                            <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase mb-2 inline-block shadow-lg">Featured Demo</span>
                            <h3 className="text-white font-bold text-xl mb-1">Midnight City</h3>
                            <p className="text-gray-300 text-sm mb-3">by The Weeknd AI</p>
                            <div className="flex items-center gap-2 text-white/80 text-xs">
                                <Play className="w-3 h-3 fill-white" /> 15k plays
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
