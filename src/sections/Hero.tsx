"use client";

import { useEffect, useState, useRef } from "react";
import { PerspectiveGrid } from "@/components/PerspectiveGrid";
import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import gsap from "gsap";

const FULL_TEXT = "Sua empresa no piloto automático.";

export default function Hero() {
    const [displayedText, setDisplayedText] = useState("");
    const sectionRef = useRef<HTMLElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const img1Ref = useRef<HTMLDivElement>(null);
    const img2Ref = useRef<HTMLDivElement>(null);
    const pointer1Ref = useRef<HTMLDivElement>(null);
    const pointer2Ref = useRef<HTMLDivElement>(null);
    const blob1Ref = useRef<HTMLDivElement>(null);
    const blob2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                [blob1Ref.current, blob2Ref.current],
                { opacity: 0, scale: 0.5 },
                { opacity: 0.2, scale: 1, duration: 1.2, stagger: 0.2 },
                0,
            );
            tl.fromTo(
                badgeRef.current,
                { opacity: 0, y: -30 },
                { opacity: 1, y: 0, duration: 0.6 },
                0.3,
            );
            tl.fromTo(
                titleRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.7 },
                0.5,
            );
            tl.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.7 },
                0.7,
            );
            tl.fromTo(
                img1Ref.current,
                { opacity: 0, x: -60, rotation: -5 },
                { opacity: 1, x: 0, rotation: 0, duration: 0.9 },
                0.4,
            );
            tl.fromTo(
                img2Ref.current,
                { opacity: 0, x: 60, rotation: 5 },
                { opacity: 1, x: 0, rotation: 0, duration: 0.9 },
                0.4,
            );
            tl.fromTo(
                pointer1Ref.current,
                { opacity: 0, scale: 0, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                },
                0.9,
            );
            tl.fromTo(
                pointer2Ref.current,
                { opacity: 0, scale: 0, y: -20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                },
                1.0,
            );

            gsap.to(blob1Ref.current, {
                y: -20,
                x: 10,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(blob2Ref.current, {
                y: 20,
                x: -10,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        let i = 0;
        let deleting = false;
        let paused = false;

        const interval = setInterval(() => {
            if (paused) return;
            if (!deleting) {
                i++;
                setDisplayedText(FULL_TEXT.slice(0, i));
                if (i === FULL_TEXT.length) {
                    paused = true;
                    setTimeout(() => {
                        paused = false;
                        deleting = true;
                    }, 1500);
                }
            } else {
                i--;
                setDisplayedText(FULL_TEXT.slice(0, i));
                if (i === 0) {
                    paused = true;
                    setTimeout(() => {
                        paused = false;
                        deleting = false;
                    }, 500);
                }
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="#"
            className="py-16 md:py-24 relative overflow-x-clip"
        >
            <div className="absolute inset-0 z-0">
                <PerspectiveGrid
                    gridSize={40}
                    fadeRadius={80}
                    className="bg-neutral-950"
                />
                <div
                    ref={blob1Ref}
                    className="absolute -top-40 -left-80 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none blur-[80px] md:blur-[100px]"
                    style={{ backgroundColor: "#4682b4", opacity: 0 }}
                />
                <div
                    ref={blob2Ref}
                    className="absolute -bottom-40 -right-80 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none blur-[80px] md:blur-[100px]"
                    style={{ backgroundColor: "#4682b4", opacity: 0 }}
                />
            </div>

            <div className="container relative z-10">
                <div
                    ref={img1Ref}
                    className="absolute -left-32 xl:-left-32 top-10 xl:top-16 hidden lg:block"
                    style={{ opacity: 0 }}
                >
                    <Image
                        src={designExample1}
                        alt="Imagem Design 1"
                        className="w-64 xl:w-auto"
                    />
                </div>
                <div
                    ref={img2Ref}
                    className="absolute -right-32 xl:-right-32 -top-10 xl:-top-16 hidden lg:block"
                    style={{ opacity: 0 }}
                >
                    <Image
                        src={designExample2}
                        alt="Imagem Design 2"
                        className="w-64 xl:w-auto"
                    />
                </div>

                <div
                    ref={pointer1Ref}
                    className="absolute left-32 xl:left-56 top-72 xl:top-96 hidden lg:block"
                    style={{ opacity: 0 }}
                >
                    <Pointer name="LexiCorm" />
                </div>
                <div
                    ref={pointer2Ref}
                    className="absolute right-52 xl:right-80 -top-2 xl:-top-4 hidden lg:block"
                    style={{ opacity: 0 }}
                >
                    <Pointer name="Leirbag" color="red" />
                </div>

                <div
                    className="flex justify-center"
                    style={{ opacity: 0 }}
                    ref={badgeRef}
                >
                    <div
                        className="inline-flex py-1 px-3 bg-gradient-to-r from-blue-400 to-[#2bb3a3] rounded-full text-[#161717] font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap"
                        style={{
                            boxShadow: "0 0 8px #38bdf8, 0 0 20px #2bb3a380",
                        }}
                    >
                        ⚡ Mais de 500 horas economizadas por cliente
                    </div>
                </div>

                <h1
                    ref={titleRef}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mt-6"
                    style={{ opacity: 0 }}
                >
                    {displayedText}
                    <span className="inline-block w-[3px] h-[1em] bg-white ml-1 align-middle animate-pulse" />
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-center text-lg md:text-xl text-white/70 font-light mt-4 md:mt-8 px-4 md:px-0"
                    style={{ opacity: 0 }}
                >
                    A LexiCorm automatiza o que trava o seu crescimento —{" "}
                    <span className="hidden md:inline">
                        <br />
                    </span>
                    para você focar no que realmente importa:{" "}
                    <strong className="text-white font-semibold">
                        resultados.
                    </strong>
                </p>
            </div>
        </section>
    );
}
