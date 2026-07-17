import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const PARAGRAPHS = [
  <>Sou <span className="text-green font-bold">nutricionista esportivo</span> e meu foco é ajudar quem treina a finalmente ver resultado no próprio físico. Ao longo do tempo, eu percebi que o maior erro de quem treina não é tentar seguir a dieta perfeita, é fazer isso sem direcionamento.</>,
  <>Você provavelmente já sabe o que fazer, mas não consegue manter isso sozinho. Meu foco hoje vai além da dieta. É acompanhar de perto, fazer ajustes e te fazer evoluir de forma constante. Sem extremos, sem terrorismo alimentar.</>,
  <>Só o que funciona na prática: dieta básica e bem feita com acompanhamento de verdade. Fora isso, eu também treino, vivo essa rotina e sei exatamente como é na prática.</>,
];

export default function SobreMim() {
  return (
    <section className="py-20 px-6 relative bg-silver">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Texto */}
        <div className="w-full lg:w-1/2 flex-1 flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
          <Reveal>
            <div className="block sm:flex justify-center lg:justify-start">
              <h2 className="text-4xl font-bold text-preto mb-5 sm:mb-0">Dyego Augusto</h2>
              <div className="flex items-center justify-center space-x-2 px-2 py-2 sm:px-3 bg-silver border border-black rounded-full sm:ml-3">
                <span className="text-xs sm:text-sm text-black font-bold">CRN6 49530</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {PARAGRAPHS.map((text, i) => (
                <p key={i} className="text-d-grey text-lg leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
            <div className="items-center justify-center gap-3 sm:gap-4 pt-3 animate-in slide-from-bottom duration-700 delay-300">
              <a href="https://wa.me/5584987565839" target="_blank" rel="noopener noreferrer">
                <button className="group w-full lg:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer">
                  <span>FALE COMIGO NO WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Foto */}
        <div className="w-full lg:w-1/2 flex items-center justify-center rounded-2xl overflow-hidden order-1 lg:order-2 flex-shrink-0">
          <div className="relative max-w-xl mx-auto">
            <Reveal>
              <img
                src="profissional/img01.png"
                alt="Foto de Dyego Augusto, nutricionista esportivo"
                loading="lazy"
                className="w-90 md:w-115 lg:w-130 h-auto object-cover"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}