import "./globals.css";
import { Rubik } from "next/font/google";
import type { Metadata } from "next";
import React from "react";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/Footer";

const rubik = Rubik({
    subsets: ["latin", "cyrillic"],
    variable: "--font-rubik",
    weight: ["400", "500", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Северяночка",
    description: "Доставка и покупка продуктов питания",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={rubik.variable}>
        <body className="font-sans bg-white text-black">
        <Header />
        {children}
        <Footer/>
        </body>
        </html>
    );
}
