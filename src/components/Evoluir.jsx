import { ArrowRight, BicepsFlexed, Dumbbell, OctagonX, AlarmClockOff, ListX, SlidersHorizontal, SquareChartGantt, TrendingUp, CalendarCog, HandHelping, FilePenLine } from "lucide-react";

export default function Evoluir() {
    return (
        <section className="py-12 px-10 sm:px-6 lg:px-8 relative bg-green">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-16">
                    Como funciona o método EVOLUIR?
                </h2>

                {/* 3 primeiros */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                    { num: "01", icon: <SquareChartGantt />, title: "Diagnóstico real", desc: "Antes de qualquer dieta, eu preciso entender sua rotina, treino, dificuldades e histórico. Nada de plano genérico." },
                    { num: "02", icon: <FilePenLine/>, title: "Estratégia personalizada", desc: "Montamos uma dieta ajustada à sua realidade, sem complicação, sem alimento impossível." },
                    { num: "03", icon: <HandHelping/>,title: "Execução com suporte", desc: "Você não fica sozinho tentando acertar. Eu acompanho de perto durante o processo." },
                ].map((step) => (
                    <div key={step.num} className="relative flex flex-col items-center text-center">      
                        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-3 h-full items-center">
                            <div className="relative z-10 w-14 h-14 rounded-full bg-green flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto">
                                {step.icon}
                            </div>
                            <h3 className="text-preto font-bold text-base border-b border-green pb-2">{step.title}</h3>
                            <p className="text-d-grey text-sm sm:text-base leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
                </div>

                {/* 2 últimos centralizados */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
                {[
                    { num: "04", icon: <CalendarCog/>,title: "Ajustes semanais", desc: "Seu corpo responde e a gente acompanha. É aqui que a maioria das pessoas erra quando tenta fazer sozinho." },
                    { num: "05", icon: <TrendingUp />, title: "Evolução contínua", desc: "O foco não é só começar bem, é continuar evoluindo semana após semana." },
                ].map((step) => (
                    <div key={step.num} className="relative flex flex-col items-center text-center">      
                        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-3 h-full items-center">
                            <div className="relative z-10 w-14 h-14 rounded-full bg-green flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto">
                                {step.icon}
                            </div>
                            <h3 className="text-preto font-bold text-base border-b border-green pb-2">{step.title}</h3>
                            <p className="text-d-grey text-sm sm:text-base leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-in slide-from-bottom duration-700 delay-300">
                    <a href="#planos">
                        <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer">
                            <span className="text-green">QUERO MEU PLANEJAMENTO</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-green"/> 
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}