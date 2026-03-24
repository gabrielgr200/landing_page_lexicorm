"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    IntegrationStatusCard,
    ApiLogsCard,
    WebhookEventsCard,
    SyncFlowCard,
} from "@/components/IntegrationMockups";

gsap.registerPlugin(ScrollTrigger);

function HeroMockup() {
    return (
        <div className="w-full bg-[#0d0d12] border border-white/[0.08] rounded-2xl overflow-hidden">
            <div className="bg-[#0a0a0f] px-4 py-2 flex items-center gap-3 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex gap-1 ml-2">
                    {["automation.ts", "config.json", "agent.ts"].map(
                        (f, i) => (
                            <div
                                key={i}
                                className={`px-3 py-1 rounded text-[11px] ${i === 0 ? "bg-white/[0.08] text-white/70" : "text-white/25"}`}
                            >
                                {f}
                            </div>
                        ),
                    )}
                </div>
            </div>
            <div className="grid lg:grid-cols-2">
                <div className="p-5 font-mono text-[11px] leading-[1.9] border-r border-white/[0.05]">
                    {(
                        [
                            [
                                { t: "import", c: "#c792ea" },
                                { t: " { LexTecAI } ", c: "#eeffff" },
                                { t: "from", c: "#c792ea" },
                                { t: " '@lexTec/sdk'", c: "#c3e88d" },
                            ],
                            [],
                            [
                                { t: "const", c: "#c792ea" },
                                { t: " agent ", c: "#eeffff" },
                                { t: "= new", c: "#c792ea" },
                                { t: " LexTecAI", c: "#82aaff" },
                                { t: "({", c: "#eeffff" },
                            ],
                            [
                                { t: "  model", c: "#eeffff" },
                                { t: ": ", c: "#eeffff" },
                                { t: "'gpt-4o'", c: "#c3e88d" },
                                { t: ",", c: "#eeffff" },
                            ],
                            [
                                { t: "  trigger", c: "#eeffff" },
                                { t: ": ", c: "#eeffff" },
                                { t: "'schedule'", c: "#c3e88d" },
                                { t: ",", c: "#eeffff" },
                            ],
                            [
                                { t: "  cron", c: "#eeffff" },
                                { t: ": ", c: "#eeffff" },
                                { t: "'0 9 * * 1-5'", c: "#c3e88d" },
                            ],
                            [{ t: "})", c: "#eeffff" }],
                            [],
                            [
                                { t: "agent", c: "#eeffff" },
                                { t: ".onRun", c: "#82aaff" },
                                { t: "(async () => {", c: "#eeffff" },
                            ],
                            [
                                { t: "  const", c: "#c792ea" },
                                { t: " leads = await ", c: "#eeffff" },
                                { t: "crm", c: "#82aaff" },
                                { t: ".getLeads()", c: "#eeffff" },
                            ],
                            [
                                { t: "  const", c: "#c792ea" },
                                { t: " scored = await ", c: "#eeffff" },
                                { t: "agent", c: "#eeffff" },
                                { t: ".score", c: "#82aaff" },
                                { t: "(leads)", c: "#eeffff" },
                            ],
                            [
                                { t: "  await ", c: "#c792ea" },
                                { t: "email", c: "#82aaff" },
                                {
                                    t: ".sendBatch(scored.top(50))",
                                    c: "#eeffff",
                                },
                            ],
                            [
                                { t: "  await ", c: "#c792ea" },
                                { t: "report", c: "#82aaff" },
                                { t: ".generate({ format: ", c: "#eeffff" },
                                { t: "'pdf'", c: "#c3e88d" },
                                { t: " })", c: "#eeffff" },
                            ],
                            [{ t: "})", c: "#eeffff" }],
                        ] as { t: string; c: string }[][]
                    ).map((line, i) => (
                        <div key={i} className="flex">
                            <span className="w-6 text-white/10 text-right mr-4 select-none flex-shrink-0">
                                {i + 1}
                            </span>
                            <span>
                                {line.map((token, j) => (
                                    <span key={j} style={{ color: token.c }}>
                                        {token.t}
                                    </span>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="p-5">
                    <div className="text-white/20 text-[11px] mb-3 flex gap-4">
                        <span className="text-[#4682b4] border-b border-[#4682b4] pb-1">
                            Terminal
                        </span>
                        <span>Output</span>
                        <span>Logs</span>
                    </div>
                    <div className="font-mono text-[11px] leading-7">
                        {[
                            {
                                icon: "✓",
                                c: "#3ddc84",
                                text: "Agente iniciado — modelo: gpt-4o",
                            },
                            {
                                icon: "→",
                                c: "#4682b4",
                                text: "Conectando ao CRM...",
                            },
                            {
                                icon: "✓",
                                c: "#3ddc84",
                                text: "200 leads importados",
                            },
                            {
                                icon: "→",
                                c: "#4682b4",
                                text: "Classificando por score de IA...",
                            },
                            {
                                icon: "✓",
                                c: "#3ddc84",
                                text: "87 leads — alta prioridade",
                            },
                            {
                                icon: "→",
                                c: "#4682b4",
                                text: "Disparando e-mails...",
                            },
                            {
                                icon: "✓",
                                c: "#3ddc84",
                                text: "87 e-mails enfileirados",
                            },
                            {
                                icon: "→",
                                c: "#4682b4",
                                text: "Gerando relatório PDF...",
                            },
                            {
                                icon: "✓",
                                c: "#3ddc84",
                                text: "Relatório salvo em /outputs/",
                            },
                        ].map((l, i) => (
                            <div key={i} className="text-white/30">
                                <span style={{ color: l.c }}>{l.icon}</span>{" "}
                                {l.text}
                            </div>
                        ))}
                        <div className="text-white/30 mt-1">
                            <span style={{ color: "#4682b4" }}>▸</span>{" "}
                            aguardando próximo ciclo{" "}
                            <span className="inline-block w-1.5 h-3 bg-[#4682b4] animate-pulse align-middle" />
                        </div>
                    </div>
                    <div className="mt-4 bg-[#0a0a0f] rounded-xl border border-white/[0.06] p-3">
                        <div className="text-white/25 text-[10px] mb-2 font-semibold tracking-widest">
                            FLUXOS ATIVOS
                        </div>
                        {[
                            {
                                name: "lead-scoring",
                                val: "247 exec/dia",
                                active: true,
                            },
                            {
                                name: "email-sequences",
                                val: "1.2k e-mails",
                                active: false,
                            },
                            {
                                name: "crm-sync",
                                val: "843 registros",
                                active: false,
                            },
                            {
                                name: "report-gen",
                                val: "312 PDFs",
                                active: false,
                            },
                        ].map((p, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 py-1"
                            >
                                <div
                                    className={`w-1.5 h-1.5 rounded-full ${p.active ? "bg-[#3ddc84]" : "bg-white/20"}`}
                                />
                                <span className="text-white/50 text-[11px] flex-1">
                                    {p.name}
                                </span>
                                <span className="text-white/25 text-[10px]">
                                    {p.val}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t border-white/[0.05] px-5 py-2.5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#3ddc84]" />
                <span className="text-white/30 text-[11px]">
                    3 fluxos rodando agora
                </span>
                <span className="ml-auto text-white/20 text-[11px]">
                    última execução: há 2min
                </span>
            </div>
        </div>
    );
}

function FlowCard() {
    const nodes = [
        {
            icon: "⚡",
            name: "Gatilho: Novo lead",
            sub: "Webhook • 09:00",
            status: "concluído",
            sc: "#3ddc84",
            bc: "#3ddc84",
        },
        {
            icon: "🤖",
            name: "IA: Score do lead",
            sub: "Score: 87 — alto",
            status: "concluído",
            sc: "#3ddc84",
            bc: "#3ddc84",
        },
        {
            icon: "✉",
            name: "E-mail personalizado",
            sub: "Gerando com GPT-4o...",
            status: "rodando",
            sc: "#7ec8f0",
            bc: "#4682b4",
        },
        {
            icon: "📊",
            name: "Gerar relatório",
            sub: "Aguardando...",
            status: "aguardando",
            sc: "rgba(255,255,255,0.25)",
            bc: "rgba(255,255,255,0.08)",
        },
    ];
    return (
        <div className="bg-[#0d0d12] border border-white/[0.08] rounded-2xl overflow-hidden">
            <div className="bg-[#0a0a0f] px-4 py-2 flex items-center gap-2 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-white/20 text-[11px] ml-2">
                    fluxo ativo — em execução
                </span>
            </div>
            <div className="p-4 flex flex-col gap-2">
                {nodes.map((n, i) => (
                    <div key={i}>
                        <div
                            className="flex items-center gap-2.5 rounded-xl p-2.5 border"
                            style={{
                                background: `${n.bc}12`,
                                borderColor: n.bc,
                            }}
                        >
                            <span className="text-sm w-7 h-7 flex items-center justify-center">
                                {n.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                                <div className="text-white text-[11px] font-medium truncate">
                                    {n.name}
                                </div>
                                <div className="text-white/30 text-[10px]">
                                    {n.sub}
                                </div>
                            </div>
                            <span
                                className="text-[9px] px-2 py-0.5 rounded-full flex-shrink-0"
                                style={{ color: n.sc, background: `${n.sc}18` }}
                            >
                                {n.status}
                            </span>
                        </div>
                        {i < nodes.length - 1 && (
                            <div className="text-center text-white/10 text-[10px] my-1">
                                ↓
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function DashboardCard() {
    return (
        <div className="bg-[#0d0d12] border border-white/[0.08] rounded-2xl overflow-hidden">
            <div className="bg-[#0a0a0f] px-4 py-2 flex items-center gap-2 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-white/20 text-[11px] ml-2">
                    dashboard — métricas
                </span>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                        {
                            label: "Fluxos",
                            val: "247",
                            color: "#4682b4",
                            change: "↑ 12",
                        },
                        {
                            label: "Economia",
                            val: "98h",
                            color: "#3ddc84",
                            change: "↑ mês",
                        },
                        {
                            label: "Uptime",
                            val: "99.9%",
                            color: "#fff",
                            change: "estável",
                        },
                    ].map((m, i) => (
                        <div
                            key={i}
                            className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-2.5"
                        >
                            <div className="text-white/25 text-[9px] mb-1">
                                {m.label}
                            </div>
                            <div
                                className="text-base font-bold"
                                style={{ color: m.color }}
                            >
                                {m.val}
                            </div>
                            <div
                                className="text-[9px] mt-0.5"
                                style={{
                                    color: i === 2 ? "#4682b4" : "#3ddc84",
                                }}
                            >
                                {m.change}
                            </div>
                        </div>
                    ))}
                </div>
                {[
                    {
                        label: "E-mails",
                        val: "1.2k",
                        pct: 88,
                        color: "#4682b4",
                    },
                    {
                        label: "CRM sync",
                        val: "843",
                        pct: 72,
                        color: "#7ec8f0",
                    },
                    {
                        label: "Relatórios",
                        val: "312",
                        pct: 55,
                        color: "#3ddc84",
                    },
                    {
                        label: "Webhooks",
                        val: "190",
                        pct: 40,
                        color: "#ffd93d",
                    },
                ].map((b, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2.5">
                        <span className="text-white/25 text-[10px] w-16 flex-shrink-0">
                            {b.label}
                        </span>
                        <div className="flex-1 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: `${b.pct}%`,
                                    background: b.color,
                                }}
                            />
                        </div>
                        <span className="text-white/30 text-[10px] w-8 text-right">
                            {b.val}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function AutomationTimeline() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".auto-card").forEach((el, i) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: { trigger: el, start: "top 88%" },
                    },
                );
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="max-w-[1280px] mx-auto mt-10">
            <div className="flex md:pl-10 space-x-3 md:space-x-10">
                <div className="flex flex-col items-center ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: false }}
                        className="relative flex-shrink-0"
                    >
                        <svg
                            aria-hidden="true"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24"
                            className="text-white"
                        >
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                        <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1" />
                    </motion.div>
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: false }}
                        className="w-[3px] grow mt-7 rounded-md bg-gradient-to-b from-[#4682b4] via-[#7ec8f0] to-[#2ea043]"
                    />
                </div>

                <div className="md:w-10/12 mb-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        viewport={{ once: false }}
                        className="text-[20px] md:text-2xl mb-7 font-medium text-white"
                    >
                        Automação com IA
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        viewport={{ once: false }}
                        className="text-[28px] md:text-[40px] lg:text-5xl mb-7 font-medium text-white leading-tight"
                    >
                        <span className="text-[#4682b4]">
                            Automatize seu negócio do jeito certo.
                        </span>{" "}
                        A LexTec executa suas tarefas 24h por dia, sem erro
                        humano.
                    </motion.h3>
                    <div className="auto-card mb-6">
                        <HeroMockup />
                    </div>
                    <div className="auto-card mb-8">
                        <p className="text-white/70 text-lg font-medium mb-2">
                            <span className="text-white font-bold">LexTec</span>{" "}
                            é sua plataforma de automação inteligente. Configure
                            fluxos com IA, integre seus sistemas e acompanhe
                            tudo em tempo real.
                        </p>
                        <span className="inline-flex items-center gap-1 text-[#4682b4] text-sm cursor-pointer hover:underline">
                            Conheça a LexTec →
                        </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="auto-card">
                            <div className="mb-3">
                                <p className="text-white font-semibold text-lg">
                                    Fluxos visuais de automação.
                                </p>
                                <p className="text-white/40 text-sm mt-1">
                                    Veja cada etapa em tempo real — do gatilho
                                    ao resultado.
                                </p>
                                <span className="inline-flex items-center gap-1 text-[#4682b4] text-sm mt-2 cursor-pointer hover:underline">
                                    Ver fluxos →
                                </span>
                            </div>
                            <FlowCard />
                        </div>
                        <div className="auto-card">
                            <div className="mb-3">
                                <p className="text-white font-semibold text-lg">
                                    Dashboard de métricas.
                                </p>
                                <p className="text-white/40 text-sm mt-1">
                                    Acompanhe economia de tempo, uptime e volume
                                    de cada automação.
                                </p>
                                <span className="inline-flex items-center gap-1 text-[#4682b4] text-sm mt-2 cursor-pointer hover:underline">
                                    Ver dashboard →
                                </span>
                            </div>
                            <DashboardCard />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-8 md:pl-10 space-x-3 md:space-x-10">
                <div className="flex flex-col items-center ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: false }}
                        className="relative flex-shrink-0"
                    >
                        <svg
                            aria-hidden="true"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            width="24"
                            className="text-white"
                        >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1" />
                    </motion.div>
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: false }}
                        className="w-[3px] grow mt-7 rounded-md bg-gradient-to-b from-[#7ec8f0] via-[#4682b4] to-transparent"
                    />
                </div>

                <div className="md:w-10/12 mb-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        viewport={{ once: false }}
                        className="text-[20px] md:text-2xl mb-7 font-medium text-white"
                    >
                        Integrações de Sistemas
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        viewport={{ once: false }}
                        className="text-[28px] md:text-[40px] lg:text-5xl mb-7 font-medium text-white leading-tight"
                    >
                        <span className="text-[#7ec8f0]">
                            Conecte todos os seus sistemas.
                        </span>{" "}
                        ERPs, APIs e plataformas distintas em tempo real, sem
                        silos de dados.
                    </motion.h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="auto-card">
                            <div className="mb-3">
                                <p className="text-white font-semibold text-lg">
                                    Status das integrações.
                                </p>
                                <p className="text-white/40 text-sm mt-1">
                                    Bling, Omie, Totvs, SAP e Salesforce — tudo
                                    conectado.
                                </p>
                            </div>
                            <IntegrationStatusCard />
                        </div>
                        <div className="auto-card">
                            <div className="mb-3">
                                <p className="text-white font-semibold text-lg">
                                    API gateway em tempo real.
                                </p>
                                <p className="text-white/40 text-sm mt-1">
                                    Cada requisição monitorada e registrada
                                    automaticamente.
                                </p>
                            </div>
                            <ApiLogsCard />
                        </div>
                        <div className="auto-card">
                            <div className="mb-3">
                                <p className="text-white font-semibold text-lg">
                                    Webhooks e eventos.
                                </p>
                                <p className="text-white/40 text-sm mt-1">
                                    Pedidos, NFes e estoques sincronizados ao
                                    instante.
                                </p>
                            </div>
                            <WebhookEventsCard />
                        </div>
                        <div className="auto-card">
                            <div className="mb-3">
                                <p className="text-white font-semibold text-lg">
                                    Fluxo de sincronização.
                                </p>
                                <p className="text-white/40 text-sm mt-1">
                                    Visualize cada conexão entre seus sistemas.
                                </p>
                            </div>
                            <SyncFlowCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
