"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plans = [
    {
        tag: "PAGAMENTO ÚNICO",
        tagColor: "#6366f1",
        name: "Site Completo",
        icon: "🖥️",
        price: "1.200",
        oldPrice: "1.500",
        period: "",
        highlight: false,
        color: "#6366f1",
        button: "Quero este plano →",
        features: [
            "Layout 100% personalizado",
            "Integração WhatsApp + Google Maps",
            "Página de serviços e contato",
            "Galeria de fotos",
            "Cliente fica com o site",
        ],
    },
    {
        tag: "MAIS VENDIDO",
        tagColor: "#4682b4",
        name: "Site + Sistema",
        icon: "⭐",
        price: "197",
        period: "/mês",
        highlight: true,
        color: "#4682b4",
        button: "Quero este plano →",
        features: [
            "Site profissional completo",
            "Sistema de agendamento online",
            "Domínio + hospedagem",
            "Notificações WhatsApp automáticas",
            "Suporte e atualizações inclusos",
        ],
    },
    {
        tag: "SAAS",
        tagColor: "#a855f7",
        name: "Agendamento Pro",
        icon: "📅",
        price: "59",
        period: "/mês",
        highlight: false,
        color: "#a855f7",
        button: "Quero este plano →",
        features: [
            "Agende online 24h",
            "Cadastro de clientes",
            "Lembrete automático WhatsApp",
            "Painel administrativo",
            "Multi-funcionários no plano Pro",
        ],
    },
];

const plansR97 = [
    {
        tag: "RECORRENTE",
        name: "Site Assinatura",
        icon: "🔄",
        color: "#22c55e",
        features: [
            "Domínio + hospedagem inclusos",
            "Alterações mensais ilimitadas",
            "Suporte técnico prioritário",
            "SEO básico configurado",
            "Site seu após 12 meses",
        ],
    },
    {
        tag: "MICRO",
        name: "Portfólio Tatuador",
        icon: "🎨",
        color: "#ef4444",
        features: [
            "Galeria de tattoos em destaque",
            "Formulário de orçamento integrado",
            "Instagram feed integrado",
            "WhatsApp direto para fechar",
            "SEO local configurado",
        ],
    },
    {
        tag: "VISIBILIDADE",
        name: "Google + Site",
        icon: "🔍",
        color: "#3b82f6",
        features: [
            "Google Meu Negócio configurado",
            "SEO local completo",
            "Site profissional incluso",
            "Integração WhatsApp",
            "Aparece no Google Maps",
        ],
    },
];

function TiltCard({
    children,
    color,
    highlight,
}: {
    children: React.ReactNode;
    color: string;
    highlight: boolean;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const shineRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        const shine = shineRef.current;
        if (!card || !shine) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -10;
        const rotateY = ((x - cx) / cx) * 10;

        gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 800,
            duration: 0.3,
            ease: "power2.out",
        });

        // brilho segue o mouse
        const pctX = (x / rect.width) * 100;
        const pctY = (y / rect.height) * 100;
        gsap.to(shine, {
            background: `radial-gradient(circle at ${pctX}% ${pctY}%, rgba(255,255,255,0.07) 0%, transparent 60%)`,
            opacity: 1,
            duration: 0.2,
        });
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        const shine = shineRef.current;
        if (!card || !shine) return;

        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power3.out",
        });
        gsap.to(shine, { opacity: 0, duration: 0.3 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="pricing-card opacity-0 relative rounded-2xl border p-6 flex flex-col"
            style={{
                background: highlight
                    ? `linear-gradient(135deg, #0f1218, #051525)`
                    : "#0d1117",
                borderColor: highlight ? color : "rgba(255,255,255,0.08)",
                borderWidth: highlight ? "1.5px" : "1px",
                boxShadow: `0 0 40px ${color}20, 0 0 80px ${color}08`,
                transformStyle: "preserve-3d",
                willChange: "transform",
            }}
        >
            {/* Camada de brilho */}
            <div
                ref={shineRef}
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0"
                style={{ zIndex: 1 }}
            />
            {/* Conteúdo acima do brilho */}
            <div
                style={{ position: "relative", zIndex: 2, display: "contents" }}
            >
                {children}
            </div>
        </div>
    );
}

export default function Pricing() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeR97, setActiveR97] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".pricing-card",
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".pricing-grid",
                        start: "top 85%",
                    },
                },
            );
            gsap.fromTo(
                ".pricing-r97",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".pricing-r97",
                        start: "top 88%",
                    },
                },
            );
            gsap.fromTo(
                ".pricing-title",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".pricing-title",
                        start: "top 90%",
                    },
                },
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="packages" ref={sectionRef} className="py-24">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="pricing-title text-center mb-16 opacity-0">
                    <p className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-3">
                        Planos
                    </p>
                    <h2 className="text-4xl lg:text-6xl font-bold text-white">
                        Escolha seu plano
                    </h2>
                    <p className="text-white/40 text-lg mt-4">
                        Soluções para cada etapa do seu negócio.
                    </p>
                </div>

                <div
                    className="pricing-grid grid md:grid-cols-3 gap-6 mb-6"
                    style={{ perspective: "1000px" }}
                >
                    {plans.map((plan, i) => (
                        <TiltCard
                            key={i}
                            color={plan.color}
                            highlight={plan.highlight}
                        >
                            {plan.highlight && (
                                <div
                                    className="absolute -top-3.5 left-1/2 -translate-x-1/2"
                                    style={{ zIndex: 3 }}
                                >
                                    <span
                                        className="text-[11px] font-bold px-4 py-1.5 rounded-full"
                                        style={{
                                            background: plan.color,
                                            color: "#fff",
                                        }}
                                    >
                                        ⭐ MAIS VENDIDO
                                    </span>
                                </div>
                            )}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                                    style={{ background: `${plan.color}20` }}
                                >
                                    {plan.icon}
                                </div>
                                <div>
                                    <p
                                        className="text-[10px] font-bold tracking-widest"
                                        style={{ color: plan.color }}
                                    >
                                        {plan.tag}
                                    </p>
                                    <p className="text-white font-bold text-base">
                                        {plan.name}
                                    </p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-white/40 text-sm">
                                        R$
                                    </span>
                                    <span
                                        className="text-4xl font-bold"
                                        style={{ color: plan.color }}
                                    >
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="text-white/40 text-sm">
                                            {plan.period}
                                        </span>
                                    )}
                                </div>
                                {plan.oldPrice && (
                                    <p className="text-white/25 text-xs line-through mt-0.5">
                                        a/R$ {plan.oldPrice}
                                    </p>
                                )}
                            </div>
                            <ul className="flex-1 space-y-2.5 mb-6">
                                {plan.features.map((f, j) => (
                                    <li
                                        key={j}
                                        className="flex items-start gap-2.5 text-white/60 text-sm"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            className="flex-shrink-0 mt-0.5"
                                            style={{ color: plan.color }}
                                        >
                                            <circle
                                                cx="8"
                                                cy="8"
                                                r="7"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                fill="none"
                                            />
                                            <path
                                                d="M5 8l2 2 4-4"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                fill="none"
                                            />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={`https://wa.me/5537984266588?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%20${encodeURIComponent(plan.name)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 text-center block"
                                style={{
                                    background: plan.highlight
                                        ? plan.color
                                        : "transparent",
                                    border: `1.5px solid ${plan.color}`,
                                    color: plan.highlight ? "#fff" : plan.color,
                                }}
                            >
                                {plan.button}
                            </a>
                        </TiltCard>
                    ))}
                </div>

                <div
                    className="pricing-r97 opacity-0 rounded-2xl border border-white/[0.08] bg-[#0d1117] p-6"
                    style={{
                        boxShadow: `0 0 40px ${plansR97[activeR97].color}15`,
                    }}
                >
                    <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                        <div>
                            <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-1">
                                Planos especializados
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-white/40 text-sm">
                                    R$
                                </span>
                                <span className="text-4xl font-bold text-white">
                                    97
                                </span>
                                <span className="text-white/40 text-sm">
                                    /mês
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {plansR97.map((p, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveR97(i)}
                                    className="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
                                    style={{
                                        background:
                                            activeR97 === i
                                                ? `${p.color}20`
                                                : "rgba(255,255,255,0.04)",
                                        border: `1.5px solid ${activeR97 === i ? p.color : "rgba(255,255,255,0.08)"}`,
                                        color:
                                            activeR97 === i
                                                ? p.color
                                                : "rgba(255,255,255,0.4)",
                                    }}
                                >
                                    {p.icon} {p.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <ul className="space-y-3">
                            {plansR97[activeR97].features.map((f, j) => (
                                <li
                                    key={j}
                                    className="flex items-center gap-3 text-white/60 text-sm"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        className="flex-shrink-0"
                                        style={{
                                            color: plansR97[activeR97].color,
                                        }}
                                    >
                                        <circle
                                            cx="8"
                                            cy="8"
                                            r="7"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            fill="none"
                                        />
                                        <path
                                            d="M5 8l2 2 4-4"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            fill="none"
                                        />
                                    </svg>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={`https://wa.me/5537984266588?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%20${encodeURIComponent(plansR97[activeR97].name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 text-center block"
                            style={{
                                border: `1.5px solid ${plansR97[activeR97].color}`,
                                color: plansR97[activeR97].color,
                                background: "transparent",
                            }}
                        >
                            Quero este plano →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
