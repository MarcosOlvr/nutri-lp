import { ArrowRight, SquareChartGantt, FilePenLine, HandHelping, CalendarCog, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  { icon: SquareChartGantt, title: "Diagnóstico real", desc: "Antes de qualquer dieta, eu preciso entender sua rotina, treino, dificuldades e histórico. Nada de plano genérico." },
  { icon: FilePenLine, title: "Estratégia personalizada", desc: "Montamos uma dieta ajustada à sua realidade, sem complicação, sem alimento impossível." },
  { icon: HandHelping, title: "Execução com suporte", desc: "Você não fica sozinho tentando acertar. Eu acompanho de perto durante o processo." },
  { icon: CalendarCog, title: "Ajustes semanais", desc: "Seu corpo responde e a gente acompanha. É aqui que a maioria das pessoas erra quando tenta fazer sozinho." },
  { icon: TrendingUp, title: "Evolução contínua", desc: "O foco não é só começar bem, é continuar evoluindo semana após semana." },
];

function StepCard({ icon: Icon, title, desc }) {
  return (
    <Reveal>
      <div className="bg-silver shadow-xl rounded-2xl p-6 flex flex-col gap-3 h-full items-center text-center">
        <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center text-white mb-3">
          <Icon />
        </div>
        <h3 className="text-preto font-bold text-base border-b border-green pb-2">{title}</h3>
        <p className="text-d-grey text-sm sm:text-base leading-relaxed">{desc}</p>
      </div>
    </Reveal>
  );
}

export default function Evoluir() {
  return (
    <section className="py-12 px-10 sm:px-6 lg:px-8 relative bg-green">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-16">
            Como funciona o método EVOLUIR?
            </h2>
        </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {STEPS.slice(0, 3).map((step) => <StepCard key={step.title} {...step} />)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
                {STEPS.slice(3).map((step) => <StepCard key={step.title} {...step} />)}
            </div>
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-in slide-from-bottom duration-700 delay-300">
            <a href="#planos">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-silver rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer">
                <span className="text-preto">QUERO MEU PLANEJAMENTO</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-preto" />
              </button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}