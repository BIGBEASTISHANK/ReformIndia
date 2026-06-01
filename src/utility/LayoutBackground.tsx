"use client";

import { motion } from "framer-motion";

export default function LayoutBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            {/* Overall vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,147,209,0.12),transparent_45%,rgba(0,0,0,0.92)_85%)]" />

            {/* Perspective wrapper */}
            <div className="absolute inset-0 perspective-[1400px]">
                {/* Primary grid */}
                <div
                    className="absolute left-1/2 top-[58%] h-[160vh] w-[180vw] -translate-x-1/2 -translate-y-1/2"
                    style={{
                        backgroundImage: `
            linear-gradient(rgba(23,147,209,1) 4px, transparent 4px),
            linear-gradient(90deg, rgba(23,147,209,1) 4px, transparent 4px),
            linear-gradient(rgba(23,147,209,0.25) 8px, transparent 8px),
            linear-gradient(90deg, rgba(23,147,209,0.25) 8px, transparent 8px)
        `,
                        backgroundSize: "48px 48px, 48px 48px, 48px 48px, 48px 48px",
                        transform: "translateX(-50%) translateY(-50%) rotateX(62deg) rotateZ(-18deg)",
                        transformStyle: "preserve-3d",
                        maskImage:
                            "radial-gradient(circle at center, black 25%, rgba(0,0,0,0.85) 60%, transparent 90%)",
                        WebkitMaskImage:
                            "radial-gradient(circle at center, black 25%, rgba(0,0,0,0.85) 60%, transparent 90%)",
                        filter: "drop-shadow(0 0 8px rgba(23,147,209,0.4))",
                    }}
                />

                {/* Center glow */}
                <motion.div
                    animate={{
                        opacity: [0.2, 0.35, 0.2],
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-[54%] h-112 w-250 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1793D1]/30 blur-2xl"
                    style={{
                        willChange: "transform, opacity",
                    }}
                />
            </div>

            {/* Dark fade */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.72)_0%,transparent_25%,transparent_70%,rgba(0,0,0,0.82)_100%)]" />
        </div>
    );
}
