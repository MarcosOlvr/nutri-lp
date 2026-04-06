import { ArrowRight, BicepsFlexed, Dumbbell, OctagonX, AlarmClockOff, ListX, SlidersHorizontal } from "lucide-react";

export default function Sobre() {
    return ( 
    <section id="sobre" className="py-12 px-10 sm:px-6 lg:px-8 relative bg-white">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="text-preto">Meu acompanhamento</span>
                    <br />
                    <span  className="text-green">é para você que:</span>
                </h2>
            </div>

            <div className="space-y-16 sm:space-y-20 lg:space-y-32 bg-emerald"> 
                <div className="flex mb-4">
                    <div className="pb-10 mx-auto text-center rounded">
                        <div className="px-8 text-center pb-16 sm:pb-24">
                            <p className="mb-5 sm:mb-7 border-b-2 border-green"></p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                                {[
                                { icon: <Dumbbell />, desc: "Treina musculação, mas sente que não evoluiu como deveria" },
                                { icon: <BicepsFlexed />, desc: "Quer emagrecer, ganhar massa ou melhorar o físico com estratégia de verdade" },
                                { icon: <ListX />, desc: "Já tentou seguir dieta sozinho, mas não conseguiu manter consistência" },
                                { icon: <SlidersHorizontal />, desc: "Entende que resultado vem de ajuste, não de um plano fixo" },
                                { icon: <AlarmClockOff/>, desc: "Tem uma rotina corrida e precisa de algo que funcione na prática " },
                                { icon: <OctagonX />, desc: "Cansou de dietas restritivas e abordagens que não se sustentam no longo prazo" },
                                ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center gap-4">
                                    <span className="text-4xl text-green">{item.icon}</span>
                                    <p className="text-preto text-sm sm:text-base leading-relaxed max-w-xs">{item.desc}</p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-black text-3xl md:text-4xl font-bold mb-16">
                    <span className="text-preto">Como funciona o método</span>
                    <br />
                    <span  className="text-green">EVOLUIR?</span>
                </h2>

                {/* 3 primeiros */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                    { num: "01", title: "Diagnóstico real", desc: "Antes de qualquer dieta, eu preciso entender sua rotina, treino, dificuldades e histórico. Nada de plano genérico." },
                    { num: "02", title: "Estratégia personalizada", desc: "Montamos uma dieta ajustada à sua realidade, sem complicação, sem alimento impossível." },
                    { num: "03", title: "Execução com suporte", desc: "Você não fica sozinho tentando acertar. Eu acompanho de perto durante o processo." },
                ].map((step) => (
                    <div key={step.num} className="relative flex flex-col items-center text-center">
                        <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-900 mb-5">
                            {step.num}
                        </div>
                        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-3 h-full">
                            <h3 className="text-preto font-bold text-base border-b border-green pb-2">{step.title}</h3>
                            <p className="text-d-grey text-sm sm:text-base leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
                </div>

                {/* 2 últimos centralizados */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
                {[
                    { num: "04", title: "Ajustes semanais", desc: "Seu corpo responde e a gente acompanha. É aqui que a maioria das pessoas erra quando tenta fazer sozinho." },
                    { num: "05", title: "Evolução contínua", desc: "O foco não é só começar bem, é continuar evoluindo semana após semana." },
                ].map((step) => (
                    <div key={step.num} className="relative flex flex-col items-center text-center">      
                        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-3 h-full">
                            <div className="relative z-10 w-14 h-14 rounded-full bg-green flex items-center justify-center text-white font-bold text-lg mb-3">
                                {step.num}
                            </div>
                            <h3 className="text-preto font-bold text-base border-b border-green pb-2">{step.title}</h3>
                            <p className="text-d-grey text-sm sm:text-base leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-in slide-from-bottom duration-700 delay-300">
                    <a href="#planos">
                        <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer">
                            <span>QUERO MEU PLANEJAMENTO</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/> 
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
}