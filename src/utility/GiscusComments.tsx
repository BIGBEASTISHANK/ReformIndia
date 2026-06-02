"use client";

import Giscus from "@giscus/react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Comments() {
    return (
        <section className="relative px-5 pt-20 sm:px-8 sm:pt-24 lg:px-16 lg:pt-28">
            <div className="relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="mb-8">
                        {/* Mono label */}
                        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/30">
                            // public discussion
                        </p>

                        {/* Heading */}
                        <h2
                            className="mt-4 font-black leading-none tracking-tight text-white"
                            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                        >
                            Join the <span className="text-[#1793D1]">Conversation</span>
                        </h2>

                        {/* Description */}
                        <p className="mt-5 max-w-3xl text-sm sm:text-[15px] leading-7 sm:leading-8 text-white/40">
                            Share your views, challenge ideas, suggest better reforms, and discuss what India should
                            change next.
                        </p>
                    </div>
                </motion.div>

                {/* Main comment section */}
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.05,
                        ease: EASE,
                    }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-4 sm:p-6 lg:p-8 backdrop-blur-[2px]">
                        {/* Top metadata row */}
                        <div className="mb-6 flex flex-col gap-3 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center sm:justify-between">
                            {/* Acknowledgment */}
                            <div className="flex items-center gap-3">
                                <div className="h-2.5 w-2.5 rounded-full bg-[#1793D1]" />

                                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
                                    GitHub Discussions Powered
                                </p>
                            </div>

                            {/* Ascent line */}
                            <div className="self-start rounded-full border border-[#1793D1]/20 bg-[#1793D1]/5 px-3 py-1">
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1793D1]">
                                    Live Comments
                                </span>
                            </div>
                        </div>

                        {/* Giscus wrapper */}
                        <div className="giscus-shell">
                            <Giscus
                                repo="BIGBEASTISHANK/ReformIndia"
                                repoId="R_kgDOSuYhrw"
                                category="General"
                                categoryId="DIC_kwDOSuYhr84C-T9X"
                                mapping="pathname"
                                strict="0"
                                reactionsEnabled="1"
                                emitMetadata="0"
                                inputPosition="bottom"
                                theme="transparent_dark"
                                lang="en"
                                loading="lazy"
                            />
                        </div>

                        {/* bottom accent line */}
                        <div className="mt-6 h-px w-full bg-linear-to-r from-[#1793D1]/40 via-white/0 to-white/0" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
