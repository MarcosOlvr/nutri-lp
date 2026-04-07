import { ArrowRight } from "lucide-react";

export default function SobreMim() {
  return (
    <section className="py-20 px-6 relative bg-silver">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Texto */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
          <div className="flex justify-center lg:justify-start">
              <h2 className="text-4xl font-bold text-preto">
                Dyego Augusto
              </h2> 
              <div className="flex items-center justify-center space-x-2 px-2 py-3 sm:px-3 bg-silver border border-green rounded-full ml-3 animate-in slide-in-from-bottom duration-700">
                  <span className="text-xs sm:text-sm text-green font-bold">CRN 6 49530</span>
              </div>
          </div>
          <p className="text-d-grey text-lg leading-relaxed">
            Sou <span className="text-green font-bold">nutricionista esportivo</span> e meu foco é ajudar quem treina a finalmente ver resultado no próprio físico. Ao longo do tempo, eu percebi que o maior erro de quem treina não é tentar seguir a dieta perfeita, é fazer isso sem direcionamento.
          </p>
          <p className="text-d-grey text-lg leading-relaxed">
            Você provavelmente já sabe o que fazer, mas não consegue manter isso sozinho. Meu foco hoje vai além da dieta. É acompanhar de perto, fazer ajustes e te fazer evoluir de forma constante. Sem extremos, sem terrorismo alimentar. 
          </p>
          <p className="text-d-grey text-lg leading-relaxed">
            Só o que funciona na prática: dieta básica e bem feita com acompanhamento de verdade.
            Fora isso, eu também treino, vivo essa rotina e sei exatamente como é na prática.
          </p>
            <div className="items-center justify-center gap-3 sm:gap-4 pt-3 animate-in slide-from-bottom duration-700 delay-300">
                <a href="https://wa.me/00000000000"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="w-full lg:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer">
                        <span>FALE COMIGO NO WHATSAPP</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 hover:translate-x-1 transition-transform duration-300"/> 
                    </button>
                </a>
            </div>
        </div>

        {/* Foto */}
        <div className="max-w-lg w-full rounded-2xl overflow-hidden order-1 lg:order-2 flex-shrink-0">
          <img
            src="/profissional/img01.png"
            alt="Foto"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}