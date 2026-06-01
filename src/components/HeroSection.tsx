"use client";
import { REFORMS } from "@/data/Reform";
import LayoutBackground from "@/utility/LayoutBackground";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Global Variable
const cyclingWords: string[] = ["Policing.", "Media.", "Governance.", "Justice."];

// Cycling effect
function CyclingText() {
    const [INDEX, setINDEX] = useState<number>(0);

    useEffect(() => {
        const INTERVAL = setInterval(() => {
            setINDEX((i) => (i + 1) % cyclingWords.length);
        }, 2000);
        return () => clearInterval(INTERVAL);
    }, []);

    return (
        <span className="relative inline-block overflow-hidden align-bottom h-[1.1em]">
            <motion.span
                key={INDEX}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-[#1793D1]"
            >
                {cyclingWords[INDEX]}
            </motion.span>
        </span>
    );
}

// Typewriter effect
function TypewriterLine({ text, delay }: { text: string; delay: number }) {
    const [DISPLAYED, setDISPLAYED] = useState<string>("");

    useEffect(() => {
        let i = 0;
        const TIMEOUT = setTimeout(() => {
            const INTERVAL = setInterval(() => {
                setDISPLAYED(text.slice(0, i + 1));
                i++;
                if (i >= text.length) clearInterval(INTERVAL);
            }, 22);
            return () => clearInterval(INTERVAL);
        }, delay);
        return () => clearTimeout(TIMEOUT);
    }, [text, delay]);

    return (
        <span>
            {DISPLAYED}
            {DISPLAYED.length < text.length && (
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-[2px] h-[1em] bg-[#1793D1] ml-0.5 align-middle"
                />
            )}
        </span>
    );
}

// Main hero section
export default function HeroSection() {
    return (
        <section className="relative overflow-hidden min-h-screen flex flex-col justify-center p-5 sm:p-8 lg:p-16">
            {/* Vertical lines */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "120px 100%",
                }}
            />

            {/* Corner bordered box wrapping all content */}
            <div className="relative z-10 w-full py-10 px-6 sm:py-14 sm:px-10">
                {/* Corner accent top left */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 65, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute top-0 left-0 h-0.5 bg-[#1793D1]"
                />
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 65, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute top-0 left-0 w-0.5 bg-[#1793D1]"
                />

                {/* Corner accent bottom right */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 65, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute bottom-0 right-0 h-0.5 bg-[#1793D1]"
                />
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 65, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute bottom-0 right-0 w-0.5 bg-[#1793D1]"
                />

                {/* Mono Label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/30 mb-6 sm:mb-8 truncate"
                >
                    <TypewriterLine text="// reform-india · citizen platform · v1.0" delay={300} />
                </motion.p>

                {/* Heading */}
                <h1 className="font-black leading-none tracking-tight" style={{ fontSize: "clamp(2.4rem, 9vw, 8rem)" }}>
                    <motion.span
                        className="text-white"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Reform{" "}
                    </motion.span>
                    <motion.span
                        className="text-[#1793D1]"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    >
                        India.
                    </motion.span>
                </h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 sm:mt-6 font-black text-white/90 leading-tight"
                    style={{ fontSize: "clamp(1rem, 3.5vw, 2.2rem)" }}
                >
                    Starting with <CyclingText />
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-7 sm:leading-8 text-white/40 max-w-xs sm:max-w-xl lg:max-w-3xl font-light flex flex-col gap-1 md:gap-2"
                >
                    <span>India's problems are not unsolvable.</span>
                    <span>
                        From policing and governance to media and public accountability, many systems can be improved
                        through practical reforms.
                    </span>
                    <span>
                        This project documents those reforms, explains why they matter, and opens them to public
                        scrutiny.
                    </span>
                </motion.p>

                {/* Stat row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 sm:mt-12 flex flex-wrap gap-x-8 sm:gap-x-12 gap-y-4 border-t-2 border-white/11 pt-6 sm:pt-8"
                >
                    {[
                        { value: REFORMS.length, label: "Core Reforms" },
                        { value: "100%", label: "Open Source" },
                    ].map((s) => (
                        <div key={s.label}>
                            <p className="text-xl sm:text-2xl font-black text-white">{s.value}</p>
                            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/30 mt-0.5">
                                {s.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Right tags */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-end gap-6"
                >
                    {["Governance", "Policing", "Media", "Finance"].map((tag, i) => (
                        <motion.span
                            key={tag}
                            animate={{ x: [0, -4, 0] }}
                            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                            className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/15"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
