import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@/styles/tailwindimport.css";
import LayoutBackground from "@/utility/LayoutBackground";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Reform India",
    description:
        "An open platform to discuss, propose, and evaluate reforms to improve governance, policing, media, and public systems in India.",
    keywords: ["India reforms", "governance", "policing reform", "public policy India", "civic platform"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistMono.className} h-full antialiased`}>
            <body className="bg-black text-white">
                <LayoutBackground />
                {children}
            </body>
        </html>
    );
}
