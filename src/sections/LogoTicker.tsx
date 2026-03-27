"use client";

import { motion } from "framer-motion";

const logos = [
    {
        name: "JavaScript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "Python",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        name: "Next.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "REST API",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
        name: "GitHub",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    { name: "Clerk", image: "https://clerk.com/v2/downloads/symbol-light.png" },
    {
        name: "MySQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    { name: "GSAP", image: "https://gsap.com/favicon-32x32.png" },
];

// Duplica para loop infinito
const allLogos = [...logos, ...logos];

export default function LogoTicker() {
    return (
        <section id="technology" className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">
                    Tecnologias que usamos
                </h3>
                <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        className="flex gap-16 pr-16"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {allLogos.map((logo, i) => (
                            <div
                                key={`${logo.name}-${i}`}
                                className="flex flex-col items-center gap-2 flex-shrink-0"
                            >
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        objectFit: "contain",
                                    }}
                                />
                                <span className="text-white/40 text-xs whitespace-nowrap">
                                    {logo.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
