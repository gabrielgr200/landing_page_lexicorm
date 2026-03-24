"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const QUERY = "Tem como uma empresa rodar sozinha?";

const suggestions = [
    "Conheça a LexiCorm. Empresa que automatiza seu projeto",
    "A LexiCorm faz sua empresa rodar sozinha.",
];

export default function SearchAnimation() {
    const [displayedText, setDisplayedText] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);

    const suggestionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const searchBarRef = useRef<HTMLDivElement>(null);
    const suggestBoxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                searchBarRef.current,
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    delay: 0.3,
                },
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        function getCenter(el: HTMLElement) {
            const r = el.getBoundingClientRect();
            return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
        }

        function moveTo(el: HTMLElement, cb: () => void) {
            const pos = getCenter(el);
            setCursorPos(pos);
            timeout = setTimeout(cb, 900);
        }

        function loop() {
            setDisplayedText("");
            setShowSuggestions(false);
            setHoveredIndex(null);
            setShowCursor(false);

            let i = 0;
            function typeChar() {
                if (i < QUERY.length) {
                    setDisplayedText(QUERY.slice(0, i + 1));
                    i++;
                    timeout = setTimeout(typeChar, 55);
                } else {
                    timeout = setTimeout(() => {
                        setShowSuggestions(true);
                        timeout = setTimeout(() => {
                            setShowCursor(true);
                            const s0 = suggestionRefs.current[0];
                            if (s0)
                                moveTo(s0, () => {
                                    setHoveredIndex(0);
                                    timeout = setTimeout(() => {
                                        setHoveredIndex(null);
                                        const s1 = suggestionRefs.current[1];
                                        if (s1)
                                            moveTo(s1, () => {
                                                setHoveredIndex(1);
                                                timeout = setTimeout(() => {
                                                    setHoveredIndex(null);
                                                    setShowCursor(false);
                                                    timeout = setTimeout(
                                                        loop,
                                                        800,
                                                    );
                                                }, 1200);
                                            });
                                    }, 900);
                                });
                        }, 600);
                    }, 400);
                }
            }
            timeout = setTimeout(typeChar, 600);
        }

        loop();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto select-none px-4 md:px-0"
        >
            <div
                ref={searchBarRef}
                className="w-full flex items-center gap-2 md:gap-3 bg-white/5 border border-white/15 rounded-full px-4 md:px-5 py-2.5 md:py-3"
                style={{ opacity: 0 }}
            >
                <svg
                    className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/40 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
                <span className="text-xs md:text-sm text-white flex-1 min-h-[20px] truncate">
                    {displayedText}
                    <span className="inline-block w-[2px] h-[14px] bg-white align-middle ml-[1px] animate-pulse" />
                </span>
            </div>

            <div
                ref={suggestBoxRef}
                className={`w-full mt-2 bg-white/5 border border-white/15 rounded-2xl overflow-hidden transition-all duration-300 ${
                    showSuggestions
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
                {suggestions.map((s, idx) => (
                    <div
                        key={idx}
                        ref={(el) => {
                            suggestionRefs.current[idx] = el;
                        }}
                        className={`flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm transition-colors duration-150 ${
                            idx !== suggestions.length - 1
                                ? "border-b border-white/10"
                                : ""
                        } ${hoveredIndex === idx ? "bg-white/10" : ""}`}
                    >
                        <svg
                            className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/40 flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                        <span className="text-white/80 truncate">{s}</span>
                        <span className="ml-auto text-white/30 text-xs flex-shrink-0 hidden sm:inline">
                            Mais procurado
                        </span>
                    </div>
                ))}
            </div>

            {showCursor && (
                <div
                    className="fixed pointer-events-none z-50 transition-all duration-700 ease-in-out"
                    style={{ left: cursorPos.x, top: cursorPos.y }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                    >
                        <path d="M4 2L4 18L8 14L11 20L13 19L10 13L16 13L4 2Z" />
                    </svg>
                </div>
            )}
        </div>
    );
}
