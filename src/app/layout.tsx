import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});
export const metadata: Metadata = {
    title: "Lexicorm | Tecnologia que trabalha por você",
    description:
        "Empresa de tecnologia, criamos sites, landing pages e automações",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className="dark">
            <body
                className={`${inter.variable} font-sans antialiased bg-black text-white`}
            >
                {children}
            </body>
        </html>
    );
}
