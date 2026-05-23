import { Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    return ( 
    <section className="relative sm:min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-silver">
    <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Texto */}
            <div className="w-full lg:w-1/2 text-center lg:text-left"> 
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 animate-in slide-in-from-bottom duration-700 tracking-tight leading-tight pt-10 lg:pt-0">
                    <span className="text-preto block">
                        Construa o físico dos seus sonhos seguindo uma dieta{" "}
                        <span className="text-green font-bold">básica</span> e{" "}
                        <span className="text-green font-bold">bem feita</span>{" "}
                        com acompanhamento de verdade.
                    </span>
                </h1>
                <div className="flex justify-center lg:justify-start animate-in slide-in-from-bottom duration-700 delay-300 mt-6">
                    <a href="#planos">
                        <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-green rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer shadow-lg">
                            <span>FAÇA PARTE DO TEAM DYEGO</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                        </button>
                    </a>
                </div>
            </div>
            {/* Imagem */}
            <div className="w-full lg:w-1/2 flex items-center justify-center animate-in slide-in-from-bottom duration-700">   
                <div className="relative max-w-xl mx-auto">
                    <img
                        src="./profissional/img02.png"
                        alt="Foto de Dyego Augusto"
                        className="w-70 md:w-100 h-auto object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                    />
                    {/* Glow decorativo */}
                    <div className="absolute -inset-2 bg-green/20 blur-3xl -z-10 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
}