"use client";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    useEffect(() => {
        if (isTablet) return;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#showcase",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
            },
        });

        timeline
            .to(".mask img", { transform: "scale(1.1)" })
            .to(".content", { opacity: 1, y: 0, ease: "power1.in" });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [isTablet]);

    return (
        <section id="showcase" className="relative">
            <div className="relative overflow-hidden">
                <video
                    src="/note.mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="w-full object-cover object-center"
                />

                <div className="mask absolute top-0 left-0 w-full h-full">
                    <img
                        src="/mask-logo.svg"
                        alt="logo"
                        className="w-full h-full object-cover"
                        style={{ transform: "matrix(80, 0, 0, 80, 0, 0)" }}
                    />
                </div>
            </div>

            <div className="content relative z-10 bg-black text-[#86868b] font-semibold text-xl -mt-20 opacity-0 translate-y-10">
                <div className="container mx-auto px-5 pb-20 flex flex-col lg:flex-row justify-center gap-20">
                    <div className="lg:max-w-md">
                        <h2 className="font-semibold text-3xl lg:text-7xl text-white">
                            Sites que vendem
                        </h2>
                        <div className="space-y-5 mt-7 pe-10 font-light">
                            <p>
                                A{" "}
                                <span className="text-white font-semibold">
                                    LexTec cria sites e landing pages que
                                    convertem visitantes em clientes
                                </span>
                                , com design moderno e estratégico.
                            </p>
                            <p>
                                Cada detalhe é pensado para gerar resultado — do
                                layout à experiência do usuário, tudo otimizado
                                para conversão.
                            </p>
                            <p>
                                Rápidos, responsivos e prontos para escalar
                                junto com o seu negócio.
                            </p>
                            <p className="text-blue-500">Entrar em contato</p>
                        </div>
                    </div>
                    <div className="max-w-xs space-y-14 font-light">
                        <div className="space-y-2">
                            <p>Performance</p>
                            <h3 className="font-bold text-xl lg:text-5xl text-white">
                                100/100
                            </h3>
                            <p>no Google PageSpeed</p>
                        </div>
                        <div className="space-y-2">
                            <p>Entrega em</p>
                            <h3 className="font-bold text-xl lg:text-5xl text-white">
                                7 dias
                            </h3>
                            <p>para landing pages</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
