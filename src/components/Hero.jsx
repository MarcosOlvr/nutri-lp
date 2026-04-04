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
    <section className="relative flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/bg/green.jpg')"}}>
        <div className="absolute inset-0 opacity-30" style={
            {
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
            }
        } />

        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="max-w-7x mx-auto text-center relative w-full pt-10">
            <div className="max-w-7xl mx-auto flex flex-col text-center gap-6 sm:gap-8 lg:gap-12 items-center relative">
                <div>
                    <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                            Construa o físico dos seus <strong>sonhos</strong>
                        </span>
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                            seguindo uma dieta <strong>básica</strong> e <strong>bem feita</strong>
                        </span>
                    </h1>

                    <div className="flex flex-wrap justify-center gap-2 mb-5">
                        {["Emagrecimento", "Performance", "Ganho de massa muscular"].map((badge) => (
                            <span key={badge} className="px-4 py-1.5 border border-emerald-600 text-white text-sm font-medium rounded-full">
                            {badge}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-10 animate-in slide-from-bottom duration-700 delay-300 pt-5">
                        <a href="#planos">
                            <button className="group w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer">
                                <span>FAÇA PARTE DO TEAM DYEGO</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/> 
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative order-2 w-5xl">
                    <iframe className="aspect-video rounded-lg" src="https://www.youtube.com/embed/oowBXzfcl90?si=niBlD63s3Cfnx94m&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
    );
}