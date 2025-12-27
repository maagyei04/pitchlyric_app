"use client";

import { useState, useRef } from "react";
import { Mic, Play, Save, Settings, Music2, Wand2, BookOpen, Headphones, Pause, Repeat, Sparkles, ChevronDown, AlignLeft, Type, Hash } from "lucide-react";
import { clsx } from "clsx";

export default function Editor({ params }: { params: { id: string } }) {
    const [isRecording, setIsRecording] = useState(false);
    const [activeTab, setActiveTab] = useState("AI"); // AI, Rhymes, Beats
    const [lyrics, setLyrics] = useState("");
    const [rhymeInput, setRhymeInput] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentBeat, setCurrentBeat] = useState<number | null>(null);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const insertTag = (tag: string) => {
        if (textareaRef.current) {
            const start = textareaRef.current.selectionStart;
            const end = textareaRef.current.selectionEnd;
            const text = lyrics;
            const newText = text.substring(0, start) + `\n[${tag}]\n` + text.substring(end);
            setLyrics(newText);
            // Reset cursor position after insert (rough approximation)
            setTimeout(() => {
                textareaRef.current?.focus();
                textareaRef.current?.setSelectionRange(start + tag.length + 3, start + tag.length + 3);
            }, 0);
        }
    };

    const magicWrite = () => {
        const suggestions = [
            "In the neon lights, we found our way home",
            "Broken dreams on a boulevard of silence",
            "Heartbeat racing like a drum in the night",
            "Echoes of yesterday fading away"
        ];
        const randomLine = suggestions[Math.floor(Math.random() * suggestions.length)];
        setLyrics(prev => prev + (prev ? "\n" : "") + randomLine);
    };

    const beats = [
        { id: 1, name: "Midnight Drive", bpm: 140, genre: "Trap" },
        { id: 2, name: "Summer Breeze", bpm: 95, genre: "Afrobeats" },
        { id: 3, name: "Sad Piano", bpm: 70, genre: "Ballad" },
        { id: 4, name: "Cyber Chase", bpm: 128, genre: "Synthwave" },
    ];

    const rhymes = [
        { word: "Night", rhymes: ["Light", "Fight", "Bright", "Sight", "Height"] },
        { word: "Love", rhymes: ["Above", "Dove", "Glove", "Shove"] },
        { word: "Heart", rhymes: ["Start", "Part", "Art", "Chart", "Smart"] },
    ];

    const getRhymes = (word: string) => {
        const found = rhymes.find(r => r.word.toLowerCase() === word.toLowerCase());
        return found ? found.rhymes : ["Try a simpler word..."];
    };

    return (
        <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)] md:h-screen bg-background text-foreground">
            {/* Left: Text Editor */}
            <div className="flex-1 flex flex-col border-r border-border relative">
                {/* Editor Header */}
                <div className="flex items-center justify-between p-6 border-b border-border bg-background/50 backdrop-blur-sm z-10">
                    <input
                        type="text"
                        placeholder="Song Title..."
                        className="text-2xl md:text-3xl font-bold bg-transparent border-none focus:outline-none placeholder:text-muted-foreground text-foreground w-full truncate"
                        defaultValue={params.id === "new" ? "" : "Untitled Song"}
                    />
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded hidden md:block">Saved</span>
                        <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                            <Save className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="flex items-center gap-2 p-2 border-b border-border bg-muted/20 overflow-x-auto scrollbar-hide">
                    <div className="flex items-center gap-1 border-r border-border pr-2 mr-2">
                        {["Verse", "Chorus", "Bridge", "Intro", "Outro"].map(tag => (
                            <button
                                key={tag}
                                onClick={() => insertTag(tag)}
                                className="px-3 py-1.5 text-xs font-medium bg-card border border-border rounded hover:bg-primary hover:text-white hover:border-primary transition-colors whitespace-nowrap"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                    <button onClick={magicWrite} className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded hover:opacity-90 transition-opacity whitespace-nowrap">
                        <Sparkles className="w-3 h-3" /> Magic Write
                    </button>
                </div>

                {/* Text Area */}
                <div className="flex-1 relative bg-background">
                    <textarea
                        ref={textareaRef}
                        value={lyrics}
                        onChange={(e) => setLyrics(e.target.value)}
                        placeholder="Start writing your masterpiece..."
                        className="w-full h-full p-6 md:p-8 bg-transparent resize-none focus:outline-none text-lg md:text-xl leading-relaxed text-foreground placeholder:text-muted-foreground/40 font-mono"
                    />
                    {/* Syllable Counter (Mock) */}
                    <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-muted/80 backdrop-blur px-2 py-1 rounded pointer-events-none">
                        {lyrics.split(/\s+/).filter(w => w.length > 0).length} words
                    </div>
                </div>
            </div>

            {/* Right: Tools Panel */}
            <div className="w-full lg:w-[400px] bg-card border-l border-border flex flex-col h-[50vh] lg:h-auto">
                {/* Tabs */}
                <div className="flex border-b border-border">
                    {[
                        { id: "AI", icon: Wand2, label: "AI Tools" },
                        { id: "Rhymes", icon: BookOpen, label: "Rhymes" },
                        { id: "Beats", icon: Headphones, label: "Beats" }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={clsx(
                                "flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors",
                                activeTab === tab.id ? "border-primary text-primary bg-primary/5" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6">

                    {/* AI Tools Tab */}
                    {activeTab === "AI" && (
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Configuration</h3>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-muted-foreground">Genre</label>
                                    <select className="w-full bg-muted border border-border rounded-lg p-2.5 text-sm text-foreground focus:ring-1 focus:ring-primary outline-none">
                                        <option>Afrobeats</option>
                                        <option>Trap</option>
                                        <option>R&B</option>
                                        <option>Pop</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-muted-foreground">Mood</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {["Sad", "Hype", "Chill", "Love", "Dark", "Fun"].map((mood) => (
                                            <button key={mood} className="px-2 py-2 rounded-md border border-border bg-muted/30 text-xs hover:bg-primary/20 hover:border-primary/50 transition-colors">
                                                {mood}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-muted/30 border border-border border-dashed text-center space-y-3">
                                <p className="text-sm text-muted-foreground">Hum a melody to guide the AI</p>
                                <button
                                    onClick={() => setIsRecording(!isRecording)}
                                    className={clsx(
                                        "w-14 h-14 rounded-full flex items-center justify-center mx-auto transition-all duration-300",
                                        isRecording ? "bg-red-500 animate-pulse shadow-lg shadow-red-500/50" : "bg-card border border-border hover:border-primary hover:text-primary text-muted-foreground"
                                    )}
                                >
                                    <Mic className="w-6 h-6" />
                                </button>
                            </div>

                            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                                <Music2 className="w-4 h-4" />
                                Generate Demo
                            </button>
                        </div>
                    )}

                    {/* Rhymes Tab */}
                    {activeTab === "Rhymes" && (
                        <div className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Type a word to find rhymes..."
                                    value={rhymeInput}
                                    onChange={(e) => setRhymeInput(e.target.value)}
                                    className="w-full bg-muted border border-border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                />
                                <BookOpen className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                            </div>

                            {rhymeInput && (
                                <div className="space-y-4">
                                    <h3 className="text-xs font-bold text-muted-foreground uppercase">Perfect Rhymes</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {getRhymes(rhymeInput).map((rhyme, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-card border border-border rounded-full text-sm hover:border-primary/50 cursor-pointer transition-colors">
                                                {rhyme}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {!rhymeInput && (
                                <div className="text-center text-muted-foreground py-10">
                                    <Type className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                    <p className="text-sm">Enter a word above to find perfect rhymes, near rhymes, and synonyms.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Beats Tab */}
                    {activeTab === "Beats" && (
                        <div className="space-y-4">
                            {beats.map((beat) => (
                                <div key={beat.id} className={clsx(
                                    "p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3",
                                    currentBeat === beat.id ? "bg-primary/10 border-primary" : "bg-card border-border hover:border-primary/50"
                                )}>
                                    <button
                                        onClick={() => {
                                            if (currentBeat === beat.id) {
                                                setIsPlaying(!isPlaying);
                                            } else {
                                                setCurrentBeat(beat.id);
                                                setIsPlaying(true);
                                            }
                                        }}
                                        className={clsx(
                                            "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                                            currentBeat === beat.id && isPlaying ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-primary/20"
                                        )}
                                    >
                                        {currentBeat === beat.id && isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                                    </button>

                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm text-foreground">{beat.name}</h4>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>{beat.bpm} BPM</span>
                                            <span>•</span>
                                            <span>{beat.genre}</span>
                                        </div>
                                    </div>

                                    <button className={clsx("p-2 rounded-full transition-colors", currentBeat === beat.id ? "text-primary" : "text-muted-foreground hover:text-foreground")}>
                                        <Repeat className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}

                            <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-border border-dashed text-center">
                                <p className="text-xs text-muted-foreground">Import your own beats coming soon...</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
