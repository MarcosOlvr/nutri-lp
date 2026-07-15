import { Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    return ( 
    <section className="relative flex items-center justify-center pb-10 pt-16 sm:pt-18 px-4 sm:px-6 lg:px-8 overflow-hidden bg-silver">
    <div className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1.5px)",
            backgroundSize: "24px 24px",
        }}
    />
    <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Texto */}
            <div className="w-full lg:w-1/2 text-center lg:text-start"> 
                <h1 className="text-4xl lg:text-6xl font-semibold mb-6 animate-in slide-in-from-bottom duration-700 tracking-tight leading-tight pt-10 lg:pt-0">
                    <span className="text-preto block">
                        Construa seu <span className="text-green font-bold">físico</span> de forma duradoura
                    </span>
                </h1>

                <p className="text-d-grey text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 animate-in slide-in-from-bottom duration-700 delay-100">
                    Chegue no físico dos seus sonhos seguindo uma dieta básica e bem feita com acompanhamento de verdade.
                </p>
                <div className="flex justify-center lg:justify-start animate-in slide-in-from-bottom duration-700 delay-300 mt-6">
                    <a href="#planos">
                        <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-green rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer shadow-lg">
                            <span>FAÇA PARTE DO TEAM DYEGO</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                        </button>
                    </a>
                </div>
            </div>
            {/* Imagem */}
            <div className="w-full lg:w-1/2 flex items-center justify-end animate-in slide-in-from-bottom duration-700">   
                <div className="relative max-w-xl mx-auto lg:mx-0 md:mt-10">
                    <img
                        src="./profissional/img03.png"
                        alt="Foto de Dyego Augusto"
                        className="w-80 md:w-115 h-auto object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.01]"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
    );
}