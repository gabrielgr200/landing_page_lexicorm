"use client";

import Image from "next/image";
import Logo from "../assets/images/Preto.svg";
import Button from "@/components/Button";
import { useEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Início", href: "#" },
    { label: "Serviços", href: "#services" },
    { label: "Pacotes", href: "#packages" },
    { label: "Tecnologia", href: "#technology" },
];

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverX, setHoverX] = useState<number | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const spotlightX = useRef(0);
    const ambienceX = useRef(0);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = nav.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setHoverX(x);
            spotlightX.current = x;
            nav.style.setProperty("--spotlight-x", `${x}px`);
        };

        const handleMouseLeave = () => {
            setHoverX(null);
            const activeItem = nav.querySelector(
                `[data-index="${activeIndex}"]`,
            );
            if (activeItem) {
                const navRect = nav.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                const targetX =
                    itemRect.left - navRect.left + itemRect.width / 2;
                animate(spotlightX.current, targetX, {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    onUpdate: (v) => {
                        spotlightX.current = v;
                        nav.style.setProperty("--spotlight-x", `${v}px`);
                    },
                });
            }
        };

        nav.addEventListener("mousemove", handleMouseMove);
        nav.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            nav.removeEventListener("mousemove", handleMouseMove);
            nav.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [activeIndex]);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;
        const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
        if (activeItem) {
            const navRect = nav.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const targetX = itemRect.left - navRect.left + itemRect.width / 2;
            animate(ambienceX.current, targetX, {
                type: "spring",
                stiffness: 200,
                damping: 20,
                onUpdate: (v) => {
                    ambienceX.current = v;
                    nav.style.setProperty("--ambience-x", `${v}px`);
                },
            });
        }
    }, [activeIndex]);

    return (
        <section className="py-4 relative z-50">
            <div className="container max-w-5xl">
                <div
                    ref={navRef}
                    className="relative grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center overflow-hidden"
                >
                    <div
                        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                        style={{
                            opacity: hoverX !== null ? 1 : 0,
                            background: `radial-gradient(200px circle at var(--spotlight-x) 50%, rgba(255,255,255,0.08) 0%, transparent 70%)`,
                        }}
                    />

                    <div
                        className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[1]"
                        style={{
                            background: `radial-gradient(60px circle at var(--ambience-x) 50%, rgba(255,255,255,0.9) 0%, transparent 100%)`,
                        }}
                    />

                    <div className="relative z-10">
                        <Image
                            src={Logo}
                            alt="Lexicorm logo"
                            className="h-9 px-1 md:h-auto w-auto"
                        />
                    </div>

                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="relative hidden lg:flex gap-0 items-center z-10">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    data-index={idx}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveIndex(idx);
                                    }}
                                    className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                                        activeIndex === idx
                                            ? "text-white"
                                            : "text-white/50 hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="relative z-10 flex justify-end gap-4 items-center">
                        <button
                            className="md:hidden text-white p-1"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {mobileOpen ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </>
                                ) : (
                                    <>
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </>
                                )}
                            </svg>
                        </button>

                        <Button
                            variant="secondary"
                            className="hidden md:inline-flex items-center"
                        >
                            Contato
                        </Button>
                    </div>
                </div>

                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden mt-2 border border-white/15 rounded-2xl overflow-hidden bg-neutral-950/95 backdrop-blur-md"
                        >
                            <nav className="flex flex-col p-4 gap-1">
                                {navLinks.map((link, idx) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveIndex(idx);
                                            setMobileOpen(false);
                                        }}
                                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                                            activeIndex === idx
                                                ? "text-white bg-white/10"
                                                : "text-white/50 hover:text-white hover:bg-white/5"
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <div className="pt-2 border-t border-white/10 mt-1">
                                    <Button
                                        variant="secondary"
                                        className="w-full justify-center"
                                    >
                                        Contato
                                    </Button>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
