"use client";

import Tag from "@/components/Tag";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const text = `Pare de trabalhar mais. Comece a trabalhar melhor. Cada processo manual é uma hora perdida. A LexTec transforma tarefas repetitivas em fluxos inteligentes que rodam sozinhos — 24 horas por dia, 7 dias por semana.`;

export default function Introduction() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.2"],
    });

    return (
        <section ref={containerRef} className="py-28 lg:py-28">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Nossos Serviços</Tag>
                </div>

                <div className="text-4xl md:text-6xl lg:text-6xl text-center font-medium mt-10 leading-tight">
                    {text.split("").map((char, i) => (
                        <AnimatedChar
                            key={i}
                            char={char}
                            index={i}
                            total={text.length}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}

                    <motion.span
                        className="text-[#3091e1] block mt-4"
                        style={{
                            opacity: useTransform(
                                scrollYProgress,
                                [0.7, 0.9],
                                [0, 1],
                            ),
                        }}
                    >
                        Por isso criamos a LexTec.
                    </motion.span>
                </div>
            </div>
        </section>
    );
}

function AnimatedChar({
    char,
    index,
    total,
    scrollYProgress,
}: {
    char: string;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}) {
    const start = (index / total) * 0.6;
    const end = start + 0.15;

    const color = useTransform(
        scrollYProgress,
        [start, end],
        ["rgba(255,255,255,0.15)", "rgba(255,255,255,1)"],
    );

    return <motion.span style={{ color }}>{char}</motion.span>;
}
