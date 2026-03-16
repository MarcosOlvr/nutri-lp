import { ArrowRight } from "lucide-react";

export default function SobreMim() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Texto */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Mais que técnica.<br />Presença.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Sou <span className="text-white font-semibold">Dyego Augusto</span>, nutricionista especializado em
            emagrecimento, hipertrofia e performance esportiva.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            Meu objetivo é unir conhecimento técnico com acompanhamento humano e próximo, para que cada
            paciente se sinta verdadeiramente apoiado em cada etapa da jornada.
          </p>
            <div className="items-center justify-center gap-3 sm:gap-4 pt-3 animate-in slide-from-bottom duration-700 delay-300">
                <a href="https://wa.me/00000000000"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-green-400 to-emerald-600 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer">
                        <span>FALE COMIGO NO WHATSAPP</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/> 
                    </button>
                </a>
            </div>
        </div>

        {/* Foto */}
        <div className="w-full md:w-[480px] h-[350px] md:h-[550px] rounded-2xl bg-slate-800 overflow-hidden order-1 md:order-2 flex-shrink-0">
          <img
            src="/sua-foto.png"
            alt="Foto"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}