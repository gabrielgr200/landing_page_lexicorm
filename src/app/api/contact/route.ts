import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
    const { nome, email, telefone, mensagem } = await req.json();

    if (!nome || !email || !mensagem) {
        return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.verify();
    } catch (verifyErr) {
        console.error("SMTP verify error:", verifyErr);
        return NextResponse.json({ error: String(verifyErr) }, { status: 500 });
    }

    await transporter.sendMail({
        from: `"Lexicorm Site" <${process.env.SMTP_USER}>`,
        to: "gabrielgomesblack70@gmail.com",
        replyTo: email,
        subject: `Novo contato: ${nome}`,
        html: `
            <h2>Novo contato pelo site</h2>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone || "Não informado"}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${mensagem.replace(/\n/g, "<br>")}</p>
        `,
    });

    return NextResponse.json({ ok: true });
}
