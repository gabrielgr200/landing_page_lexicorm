"use client";

export function IntegrationStatusCard() {
    const systems = [
        {
            name: "Bling ERP",
            sub: "última sync: há 3min",
            status: "ativo",
            sc: "#3ddc84",
            bg: "rgba(70,130,180,0.12)",
        },
        {
            name: "Omie",
            sub: "sincronizando...",
            status: "sync",
            sc: "#7ec8f0",
            bg: "rgba(255,213,61,0.1)",
        },
        {
            name: "Totvs",
            sub: "última sync: há 1min",
            status: "ativo",
            sc: "#3ddc84",
            bg: "rgba(61,220,132,0.1)",
        },
        {
            name: "SAP B1",
            sub: "timeout — retry em 30s",
            status: "erro",
            sc: "#ff6b6b",
            bg: "rgba(255,80,80,0.1)",
        },
        {
            name: "Salesforce CRM",
            sub: "última sync: há 8min",
            status: "ativo",
            sc: "#3ddc84",
            bg: "rgba(70,130,180,0.12)",
        },
    ];

    return (
        <div className="bg-[#0d0d12] border border-white/[0.08] rounded-2xl overflow-hidden">
            <div className="bg-[#0a0a0f] px-4 py-2 flex items-center gap-2 border-b border-white/[0.05]">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-white/20 text-[11px] ml-2">
                    integrações — status
                </span>
            </div>
            <div className="p-4">
                {systems.map((s, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 py-2 border-b border-white/[0.04] last:border-0"
                    >
                        <div
                            className="w-7 h-7 rounded-lg flex-shrink-0"
                            style={{ background: s.bg }}
                        />
                        <div className="flex-1 min-w-0">
                            <div className="text-white/60 text-[11px]">
                                {s.name}
                            </div>
                            <div className="text-white/25 text-[10px]">
                                {s.sub}
                            </div>
                        </div>
                        <span
                            className="text-[9px] px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{ color: s.sc, background: `${s.sc}18` }}
                        >
                            {s.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ApiLogsCard() {
    const logs = [
        { method: "GET", path: "/api/v1/pedidos", code: "200", ok: true },
        { method: "POST", path: "/api/v1/clientes", code: "201", ok: true },
        { method: "GET", path: "/api/v1/estoque/sku", code: "200", ok: true },
        { method: "PUT", path: "/api/v1/pedidos/4821", code: "200", ok: true },
        { method: "POST", path: "/webhook/bling/nfe", code: "201", ok: true },
        { method: "GET", path: "/api/v1/financeiro", code: "200", ok: true },
        { method: "POST", path: "/api/v1/sync/omie", code: "201", ok: true },
        { method: "GET", path: "/api/v1/clientes/983", code: "400", ok: false },
        {
            method: "POST",
            path: "/api/v1/email/disparo",
            code: "201",
            ok: true,
        },
    ];

    const methodColor = (m: string) => {
        if (m === "GET")
            return { color: "#3ddc84", bg: "rgba(61,220,132,0.12)" };
        if (m === "POST")
            return { color: "#7ec8f0", bg: "rgba(70,130,180,0.12)" };
        return { color: "#ffd93d", bg: "rgba(255,213,61,0.12)" };
    };

    return (
        <div className="bg-[#0d0d12] border border-white/[0.08] rounded-2xl overflow-hidden">
            <div className="bg-[#0a0a0f] px-4 py-2 flex items-center gap-2 border-b border-white/[0.05]">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-white/20 text-[11px] ml-2">
                    API gateway — logs
                </span>
            </div>
            <div className="p-4 font-mono">
                {logs.map((l, i) => {
                    const mc = methodColor(l.method);
                    return (
                        <div
                            key={i}
                            className="flex items-center gap-2 text-[10px] leading-[1.9]"
                        >
                            <span
                                className="px-1.5 py-px rounded text-[9px] font-bold flex-shrink-0"
                                style={{ color: mc.color, background: mc.bg }}
                            >
                                {l.method}
                            </span>
                            <span className="text-white/40 flex-1 truncate">
                                {l.path}
                            </span>
                            <span
                                className="flex-shrink-0"
                                style={{ color: l.ok ? "#3ddc84" : "#ff6b6b" }}
                            >
                                {l.code}
                            </span>
                        </div>
                    );
                })}
                <div className="flex items-center gap-2 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] animate-pulse" />
                    <span className="text-white/20 text-[10px]">
                        monitorando em tempo real
                    </span>
                </div>
            </div>
        </div>
    );
}

export function WebhookEventsCard() {
    const events = [
        {
            type: "pedido.criado",
            time: "09:41:03",
            color: "#3ddc84",
            payload: [
                { k: "id", v: '"PED-4821"' },
                { k: "valor", v: "R$ 1.240,00" },
            ],
        },
        {
            type: "nfe.emitida",
            time: "09:41:05",
            color: "#7ec8f0",
            payload: [
                { k: "chave", v: '"35240..."' },
                { k: "status", v: '"autorizada"' },
            ],
        },
        {
            type: "estoque.atualizado",
            time: "09:41:08",
            color: "#3ddc84",
            payload: [
                { k: "sku", v: '"PROD-091"' },
                { k: "qtd", v: "-3" },
            ],
        },
    ];

    return (
        <div className="bg-[#0d0d12] border border-white/[0.08] rounded-2xl overflow-hidden">
            <div className="bg-[#0a0a0f] px-4 py-2 flex items-center gap-2 border-b border-white/[0.05]">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-white/20 text-[11px] ml-2">
                    webhooks — eventos recebidos
                </span>
            </div>
            <div className="p-4 flex flex-col gap-2">
                {events.map((e, i) => (
                    <div
                        key={i}
                        className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span
                                className="text-[9px] px-2 py-0.5 rounded-full"
                                style={{
                                    color: e.color,
                                    background: `${e.color}15`,
                                }}
                            >
                                {e.type}
                            </span>
                            <span className="text-white/20 text-[10px] ml-auto">
                                {e.time}
                            </span>
                        </div>
                        <div className="font-mono text-[10px] text-white/30 leading-relaxed">
                            {e.payload.map((p, j) => (
                                <span key={j}>
                                    <span style={{ color: "#c792ea" }}>
                                        {p.k}
                                    </span>
                                    {": "}
                                    <span style={{ color: "#c3e88d" }}>
                                        {p.v}
                                    </span>
                                    {j < e.payload.length - 1 ? ", " : ""}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function SyncFlowCard() {
    const flows = [
        [
            { name: "Bling ERP", active: true },
            { name: "Lexicorm API", active: true },
            { name: "Salesforce", active: false },
        ],
        [
            { name: "Omie", active: false },
            { name: "Lexicorm API", active: true },
            { name: "Google Sheets", active: true },
        ],
        [
            { name: "Totvs", active: false },
            { name: "Lexicorm API", active: false },
            { name: "WhatsApp", active: false },
        ],
    ];

    return (
        <div className="bg-[#0d0d12] border border-white/[0.08] rounded-2xl overflow-hidden">
            <div className="bg-[#0a0a0f] px-4 py-2 flex items-center gap-2 border-b border-white/[0.05]">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-white/20 text-[11px] ml-2">
                    fluxo de sync — ativo
                </span>
            </div>
            <div className="p-4">
                {flows.map((flow, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                        {flow.map((node, j) => (
                            <div
                                key={j}
                                className="flex items-center gap-2 flex-1"
                            >
                                <div
                                    className="flex-1 text-center text-[10px] py-1.5 px-2 rounded-lg border"
                                    style={{
                                        borderColor: node.active
                                            ? "#4682b4"
                                            : "rgba(255,255,255,0.08)",
                                        background: node.active
                                            ? "rgba(70,130,180,0.1)"
                                            : "rgba(255,255,255,0.03)",
                                        color: node.active
                                            ? "#7ec8f0"
                                            : "rgba(255,255,255,0.35)",
                                    }}
                                >
                                    {node.name}
                                </div>
                                {j < flow.length - 1 && (
                                    <span className="text-white/15 text-xs flex-shrink-0">
                                        →
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
                <div className="grid grid-cols-3 gap-2 mt-4">
                    {[
                        { val: "12", label: "integrações", color: "#4682b4" },
                        { val: "99.9%", label: "uptime", color: "#3ddc84" },
                        { val: "2.4k", label: "req/dia", color: "#ffd93d" },
                    ].map((s, i) => (
                        <div key={i} className="text-center">
                            <div
                                className="text-base font-bold"
                                style={{ color: s.color }}
                            >
                                {s.val}
                            </div>
                            <div className="text-white/25 text-[9px] mt-0.5">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
