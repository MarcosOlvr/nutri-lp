import { Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    return ( 
    <section className="relative md:min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('BG-03.png')"}}>
    <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Texto */}
            <div className="w-full lg:w-1/2 text-center lg:text-left"> 
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 animate-in slide-in-from-bottom duration-700 tracking-tight leading-tight pt-10 lg:pt-0">
                    <span className="text-white block">
                        INVENTA ALGO PRA COLOCAR{" "}
                        <span className="text-green font-bold">AQUI</span> e{" "}
                        <span className="text-green font-bold">AQUI TBM</span>{" "}
                    </span>
                </h1>

                <p className="text-white text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Construa o físico dos seus sonhos seguindo uma dieta básica e bem feita com acompanhamento de verdade.
                </p>
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
                <div className="relative max-w-xl mx-auto md:mt-8">
                    <img
                        src="./profissional/img02.png"
                        alt="Foto de Dyego Augusto"
                        className="w-80 md:w-110 h-auto object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.01]"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
    );
}