"use client";

import { motion } from "framer-motion";
import {
    FaWhatsapp,
    FaInstagram,
    FaEnvelope,
    FaFacebook,
} from "react-icons/fa";

const links = [
    {
        title: "Serviços",
        items: [
            { label: "Sites e Landing Pages", href: "#" },
            { label: "Automação com IA", href: "#" },
            { label: "Integrações de Sistemas", href: "#" },
            { label: "Agendamento Online", href: "#" },
        ],
    },
    {
        title: "Planos",
        items: [
            { label: "Site Completo", href: "#" },
            { label: "Site + Sistema", href: "#" },
            { label: "Agendamento Pro", href: "#" },
            { label: "Planos R$ 97", href: "#" },
        ],
    },
    {
        title: "Empresa",
        items: [
            { label: "Sobre a Lexicorm", href: "#" },
            { label: "Contato", href: "#contato" },
            { label: "Política de Privacidade", href: "#" },
            { label: "Termos de Uso", href: "#" },
        ],
    },
];

const socials = [
    { icon: <FaFacebook size={16} />, href: "#", label: "Facebook" },
    { icon: <FaInstagram size={16} />, href: "#", label: "Instagram" },
    {
        icon: <FaWhatsapp size={16} />,
        href: "https://wa.me/5537984266588",
        label: "WhatsApp",
    },
    {
        icon: <FaEnvelope size={16} />,
        href: "mailto:marketing@lexicorm.com.br",
        label: "E-mail",
    },
];

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/[0.06]">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="py-12 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="mb-4">
                            <span className="text-white font-bold text-2xl tracking-tight">
                                Lexi<span className="text-[#3091e1]">corm</span>
                            </span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">
                            Automatizamos, integramos e desenvolvemos soluções
                            digitais para o seu negócio crescer no piloto
                            automático.
                        </p>
                        <div className="flex gap-3">
                            {socials.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[#4682b4] hover:border-[#4682b4]/40 transition-all duration-200"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {links.map((group, i) => (
                        <div key={i}>
                            <p className="text-white font-semibold text-sm mb-5">
                                {group.title}
                            </p>
                            <ul className="space-y-3">
                                {group.items.map((item, j) => (
                                    <li key={j}>
                                        <a
                                            href={item.href}
                                            className="text-white/40 text-sm hover:text-[#3091e1] transition-colors duration-200"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="relative h-[1px] bg-white/[0.06] overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 h-full w-1/3"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, #2bb3a3, transparent)",
                        }}
                        animate={{ x: ["-100%", "400%"] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </div>

                <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/25 text-xs">
                        © {new Date().getFullYear()} Lexicorm. Todos os direitos
                        reservados.
                    </p>

                    <p className="text-white/25 text-xs">
                        Desenvolvido em Divinópolis, MG — Brasil
                    </p>
                </div>
            </div>
        </footer>
    );
}
