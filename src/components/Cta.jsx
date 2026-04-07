import { ArrowUp } from "lucide-react";

export default function Cta() {
    return (
        <section className="relative bg-green py-20 px-6 overflow-hidden">

            {/* Decoração esquerda - esconde no mobile, mostra no desktop */}
            <div className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[40px] border-white opacity-80" />
            <div className="hidden md:block absolute left-24 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-white opacity-60 rotate-12" />

            {/* Decoração direita - esconde no mobile, mostra no desktop */}
            <div className="hidden md:block absolute -right-8 top-0 w-48 h-full opacity-80">
            <div className="absolute right-0 top-0 w-0 h-0 border-l-[120px] border-l-transparent border-r-[120px] border-r-white border-b-[200px] border-b-transparent" />
            <div className="absolute right-0 bottom-0 w-0 h-0 border-l-[120px] border-l-transparent border-r-[120px] border-r-white border-t-[200px] border-t-transparent" />
            </div>

            {/* Decoração mobile - apenas bolinhas simples */}
            <div className="md:hidden absolute -left-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-[16px] border-black opacity-40" />
            <div className="md:hidden absolute -right-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-[16px] border-black/90 opacity-40" />

            {/* Conteúdo */}
            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
                <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                Se você quer parar de errar na dieta <br/> o próximo passo é esse
                </h2>
                <p className="text-silver text-sm md:text-base">
                    Você pode continuar tentando sozinho, ajustando uma coisa ou outra,
                    ou pode ter alguém te acompanhando, ajustando sua estratégia e acelerando sua evolução.
                </p>
                <p className="text-silver text-sm md:text-base">
                    A diferença entre quem evolui e quem fica no mesmo lugar não é esforço - <strong>É direção</strong>
                </p>
                <div className="items-center justify-center gap-3 sm:gap-4 pt-3 animate-in slide-from-bottom duration-700 delay-300">
                    <a href="#planos">
                        <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer text-preto">
                            <span>QUERO FAZER PARTE DO TEAM DYEGO</span>
                            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/> 
                        </button>
                    </a>
                </div>
            </div>

        </section>
    );
}