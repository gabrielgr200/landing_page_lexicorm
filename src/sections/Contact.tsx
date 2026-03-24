"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    });
    const [sent, setSent] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".contact-title",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".contact-title",
                        start: "top 90%",
                    },
                },
            );
            gsap.fromTo(
                ".contact-info",
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".contact-info",
                        start: "top 85%",
                    },
                },
            );
            gsap.fromTo(
                ".contact-form",
                { opacity: 0, x: 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".contact-form",
                        start: "top 85%",
                    },
                },
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const inputClass = `w-full bg-[#0d1117] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 outline-none focus:border-[#4682b4] transition-colors duration-200`;

    return (
        <section ref={sectionRef} className="py-24 bg-black">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="contact-title text-center mb-16 opacity-0">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                        Vamos construir algo{" "}
                        <span className="text-[#4682b4]">juntos</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-md mx-auto">
                        Descreva seu projeto e retornamos em até 24h com uma
                        proposta personalizada.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        {[
                            {
                                icon: (
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="2"
                                            y="4"
                                            width="20"
                                            height="16"
                                            rx="2"
                                        />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                ),
                                label: "E-MAIL",
                                value: "marketing@lexicorm.com.br",
                            },
                            {
                                icon: (
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                ),
                                label: "WHATSAPP",
                                value: "(37) 99660-5585",
                            },
                            {
                                icon: (
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                ),
                                label: "LOCALIZAÇÃO",
                                value: "Divinópolis, MG — Brasil",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="contact-info opacity-0 flex items-center gap-4 bg-[#0d1117] border border-white/[0.08] rounded-2xl px-5 py-4 hover:border-[#4682b4]/40 transition-colors duration-200"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#4682b4]/10 flex items-center justify-center text-[#4682b4] flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-widest text-[#4682b4] mb-0.5">
                                        {item.label}
                                    </p>
                                    <p className="text-white font-semibold text-sm">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Horário */}
                        <div className="contact-info opacity-0 bg-[#4682b4]/10 border border-[#4682b4]/30 rounded-2xl px-5 py-4">
                            <p className="text-[10px] font-bold tracking-widest text-[#4682b4] mb-1">
                                HORÁRIO DE ATENDIMENTO
                            </p>
                            <p className="text-white/70 text-sm">
                                Segunda a Sexta, 08h–18h
                            </p>
                        </div>
                    </div>
                    <div className="contact-form opacity-0 bg-[#0d1117] border border-white/[0.08] rounded-2xl p-6">
                        {sent ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 rounded-full bg-[#4682b4]/10 flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#4682b4"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    >
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">
                                    Mensagem enviada!
                                </h3>
                                <p className="text-white/40 text-sm">
                                    Retornaremos em até 24h.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="text-white/50 text-xs font-semibold mb-1.5 block">
                                            Nome *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Seu nome"
                                            className={inputClass}
                                            value={form.nome}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    nome: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white/50 text-xs font-semibold mb-1.5 block">
                                            E-mail *
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="seu@email.com"
                                            className={inputClass}
                                            value={form.email}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="text-white/50 text-xs font-semibold mb-1.5 block">
                                        Telefone / WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="(37) 99999-9999"
                                        className={inputClass}
                                        value={form.telefone}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                telefone: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="text-white/50 text-xs font-semibold mb-1.5 block">
                                        Mensagem *
                                    </label>
                                    <textarea
                                        placeholder="Descreva seu projeto ou necessidade..."
                                        rows={5}
                                        className={`${inputClass} resize-none`}
                                        value={form.mensagem}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                mensagem: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <button
                                    onClick={() => setSent(true)}
                                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-95"
                                    style={{ background: "#4682b4" }}
                                >
                                    Enviar mensagem
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m22 2-7 20-4-9-9-4Z" />
                                        <path d="M22 2 11 13" />
                                    </svg>
                                </button>

                                <p className="text-white/20 text-xs text-center mt-4">
                                    Seus dados são usados apenas para retornar
                                    seu contato. Não compartilhamos com
                                    terceiros.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
