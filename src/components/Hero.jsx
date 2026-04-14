import { Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    return ( 
    <section className="relative md:max-h-screen flex  justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-silver">      
        <div className="max-w-7x mx-auto text-center relative w-full pt-10">
            <div className="max-w-7xl mx-auto flex flex-col text-center gap-6 sm:gap-8 lg:gap-12 items-center relative">
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 animate-in slide-in-from-bottom duration-700 delay-100 tracking-tight">
                        <span className="text-preto block mb-1 sm:mb-2">
                            Construa o físico dos seus sonhos seguindo uma dieta <span className="text-green font-bold">básica</span> e <span className="text-green font-bold">bem feita</span> com acompanhamento de verdade.
                        </span>
                    </h1>
                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 animate-in slide-in-from-bottom duration-700 delay-300 py-3 m-3">
                        <a href="#planos">
                            <button className="group w-full px-6 sm:px-8 py-3 sm:py-4 bg-green rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer">
                                <span>FAÇA PARTE DO TEAM DYEGO</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/> 
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative order-2 w-full max-w-4xl shadow-2xl">
                    <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/T939YUUrLB8?si=z0ZsfQ9p61U9WY-R" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
    );
}