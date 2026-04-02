import { Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return ( 
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-emerald-900 to-black">
        <div className="absolute inset-0 opacity-30" style={
            {
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
            }
        } />

        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="max-w-7x mx-auto text-center relative w-full">
            <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
                <div>
                    <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-xs sm:text-sm text-white">Nutricionista Esportivo</span>
                    </div>
                    <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 ml-2">
                        <Sparkles className="w-4 h-4 white" />
                        <span className="text-xs sm:text-sm text-wite">Ajuste semanais ilimitados</span>
                    </div>
                    <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                            Mude seu <span className="bg-gradient-to-b from-emerald-400 via-emerald-600 to-emerald-400 bg-clip-text text-transparent font-bold">físico</span>
                        </span>
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                            por meio de uma
                        </span>
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                            <span className="bg-gradient-to-b from-emerald-400 via-emerald-600 to-emerald-400 bg-clip-text text-transparent font-bold">dieta básica </span>e bem feita
                        </span>
                    </h1>

                    <p className="text-md sm:text-base lg:text-lg text-white max-w-2xl mx-auto lg:mx-0 mb-3 sm:mb-5 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
                        Construa o físico dos seus sonhos seguindo uma dieta básica e bem feita com acompanhamento constante
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
                        {["Emagrecimento", "Ganho de massa muscular", "Performance"].map((badge) => (
                            <span key={badge} className="px-4 py-1.5 border border-emerald-600 text-white text-sm font-medium rounded-full">
                            {badge}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-from-bottom duration-700 delay-300">
                        <a href="#planos">
                            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer">
                                <span>FAÇA PARTE DO TEAM DYEGO</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/> 
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative order-2 w-full">
                    <div className="aspect-video">
                        <iframe className="w-full h-full max-w-full rounded-lg" src="https://www.youtube.com/embed/oowBXzfcl90?si=niBlD63s3Cfnx94m&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}