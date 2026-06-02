export default function Footer() {
    return (
        <footer className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
            <div className="relative z-10 w-full border-t border-white/[0.07] pt-6 sm:pt-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
                            // footer
                        </p>

                        <p className="mt-3 text-sm leading-7 text-white/45">
                            Made by{" "}
                            <a
                                href="https://github.com/BIGBEASTISHANK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white transition hover:text-[#1793D1]"
                            >
                                BIGBEASTISHANK
                            </a>
                            . Visit{" "}
                            <a
                                href="https://bigbeastishank.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white transition hover:text-[#1793D1]"
                            >
                                bigbeastishank.com
                            </a>{" "}
                            and view the source code on{" "}
                            <a
                                href="https://github.com/BIGBEASTISHANK/ReformIndia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white transition hover:text-[#1793D1]"
                            >
                                GitHub
                            </a>
                            .
                        </p>
                    </div>

                    <div className="self-start rounded-full border border-white/10 px-3 py-1">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                            Reform India
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}