import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-silver px-5 sm:px-8 lg:px-12 pt-20 lg:pt-15">
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
                    radial-gradient(at 20% 30%, #43A04620 0px, transparent 50%),
                    radial-gradient(at 80% 40%, #43A04620 0px, transparent 50%),
                    radial-gradient(at 50% 80%, #43A04620 0px, transparent 50%)
                    `,
                }}
            />
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                    linear-gradient(rgb(0, 0, 0) 1px, transparent 1px),
                    linear-gradient(90deg, rgb(0, 0, 0) 1px, transparent 1px)
                    `,
                    backgroundSize: "64px 64px",

                    maskImage:
                    "radial-gradient(ellipse at center, transparent 35%, black 75%)",
                    WebkitMaskImage:
                    "radial-gradient(ellipse at center, transparent 35%, black 75%)",
                }}
            />

            <div className="relative mx-auto flex min-h-[calc(100vh-60px)] max-w-6xl items-center">
                <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Texto */}
                    <div className="order-1 text-center lg:text-left">
                        <h1
                            className="
                                font-semibold
                                leading-tight
                                tracking-tight
                                text-[clamp(2.5rem,5vw,3.8rem)]
                                text-preto
                            "
                        >
                            Construa seu{" "}
                            <span className="text-green font-bold">
                                físico
                            </span>{" "}
                            de forma duradoura
                        </h1>

                        <p
                            className="
                                mt-6
                                max-w-xl
                                mx-auto
                                lg:mx-0
                                text-d-grey
                                text-[clamp(1rem,1.2vw,1rem)]
                                leading-relaxed
                            "
                        >
                            Chegue no físico dos seus sonhos seguindo uma dieta
                            básica e bem feita com acompanhamento de verdade.
                        </p>

                        <div className="mt-8 flex justify-center lg:justify-start">
                            <a href="#planos">
                                <button
                                    className="
                                        group
                                        rounded-xl
                                        bg-green
                                        px-6
                                        py-4
                                        font-semibold
                                        shadow-xl
                                        transition
                                        duration-300
                                        hover:scale-105
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        lg:text-base
                                    "
                                >
                                    <span>FAÇA PARTE DO TEAM DYEGO</span>

                                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Imagem */}
                    <div className="order-2 flex justify-center lg:justify-end mb-5">

                        <img
                            src="./profissional/img03.png"
                            alt="Foto de Dyego Augusto"
                            className="
                                h-auto
                                w-auto

                                max-h-[65vh]
                                sm:max-h-[70vh]
                                lg:max-h-[80vh]

                                object-contain
                                transition-transform
                                duration-500
                                hover:scale-[1.02]
                                rounded-2xl
                            "
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}