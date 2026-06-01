"use client";
import { REFORMS, IReform } from "@/data/Reform";
import { motion } from "framer-motion";

// Global variable
const EASE = [0.16, 1, 0.3, 1] as const;

// Main reforms section
export default function ReformsSection() {
    return (
        <section className="relative px-5 sm:px-8 lg:px-16">
            <div className="relative z-10 w-full">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/30">
                        // reform archive
                    </p>
                </motion.div>

                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.05,
                        ease: EASE,
                    }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <h2
                        className="mt-4 text-white font-black leading-none tracking-tight"
                        style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
                    >
                        Proposed <span className="text-[#1793D1]">Reforms</span>
                    </h2>
                </motion.div>

                {/* Section description */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.1,
                        ease: EASE,
                    }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <p className="mt-5 max-w-3xl text-sm sm:text-[15px] leading-7 sm:leading-8 text-white/40">
                        A collection of reform proposals aimed at improving governance, accountability, public services,
                        and institutional effectiveness in India.
                    </p>
                </motion.div>

                {/* Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                        ease: EASE,
                    }}
                    className="mt-6 max-w-3xl rounded-xl border border-[#1793D1]/20 bg-[#1793D1]/5 p-4"
                >
                    <p className="text-xs sm:text-sm leading-6 text-white/60">
                        <span className="font-semibold text-[#1793D1]">Note:</span> The ideas, concerns, and reform
                        proposals presented here were originally thought through and written by the site owner. AI has
                        only been used to improve grammar, clarity, structure, and professionalism while preserving the
                        original intent.
                    </p>
                </motion.div>

                {/* Reform cards */}
                <div className="mt-14 flex flex-col gap-6 sm:gap-8">
                    {REFORMS.map((reform: IReform, index: number) => {
                        const isRight = index % 2 !== 0;

                        return (
                            <motion.div
                                key={reform.number}
                                initial={{
                                    opacity: 0,
                                    y: 16,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.04,
                                    ease: EASE,
                                }}
                                style={{
                                    willChange: "transform, opacity",
                                }}
                            >
                                <div className={`flex w-full ${isRight ? "justify-end" : "justify-start"}`}>
                                    <div className="w-full md:w-[88%] lg:w-[78%]">
                                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-5 sm:p-6 lg:p-7 backdrop-blur-[2px] transition duration-300 hover:border-[#1793D1]/40 hover:bg-white/5">
                                            {/* top row */}
                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1793D1]/25 bg-[#1793D1]/10">
                                                        <span className="font-mono text-xs font-bold tracking-widest text-[#1793D1]">
                                                            {reform.number}
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
                                                            Reform {reform.number}
                                                        </p>

                                                        <h3 className="mt-1 text-lg font-black leading-tight text-white sm:text-xl">
                                                            {reform.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                                <div className="self-start rounded-full border border-white/10 px-3 py-1">
                                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                                                        Policy
                                                    </span>
                                                </div>
                                            </div>

                                            {/* content grid */}
                                            <div className="mt-6 grid grid-cols-1 gap-5 border-t border-white/[0.07] pt-6 lg:grid-cols-[0.9fr_1.4fr] lg:gap-8">
                                                <div>
                                                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#1793D1]">
                                                        Why this matters
                                                    </p>

                                                    <p className="mt-3 text-sm leading-7 text-white/55">{reform.why}</p>
                                                </div>

                                                <div>
                                                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#1793D1]">
                                                        Proposed change
                                                    </p>

                                                    <p className="mt-3 text-sm leading-7 text-white/45">
                                                        {reform.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* bottom accent line */}
                                            <div className="mt-6 h-px w-full bg-linear-to-r from-[#1793D1]/40 via-white/0 to-white/0" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
