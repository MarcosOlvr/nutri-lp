import { Hash, ArrowRight, Rocket, Target, Brain, ChartLine, Scale, Paperclip } from "lucide-react";

export default function Sobre() {
    return ( 
    <section id="sobre" className="py-12 px-10 sm:px-6 lg:px-8 relative bg-white/85">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-black to-gray-700 bg-clip-text text-transparent">Como funciona o</span>
                    <br />
                    <span  className="bg-gradient-to-b from-emerald-400 to-emerald-800 bg-clip-text text-transparent">Acompanhamento?</span>
                </h2>
            </div>

            <div className="space-y-16 sm:space-y-20 lg:space-y-32"> 
                <div className="flex mb-4">
                    <div className="pb-10 mx-auto text-center rounded">
                        <div className="px-8 text-center pb-16 sm:pb-24">
                            <p className="text-black text-sm sm:text-base uppercase tracking-widest mb-5 sm:mb-7 border-b-2 border-emerald-600">Meu acompanhamento é para você que:</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                                {[
                                { icon: <Target />, desc: "Treina musculação, mas sente que não evoluiu como deveria" },
                                { icon: <Rocket />, desc: "Quer emagrecer, ganhar massa ou melhorar o físico com estratégia de verdade" },
                                { icon: <Brain />, desc: "Já tentou seguir dieta sozinho, mas não conseguiu manter consistência" },
                                { icon: <ChartLine />, desc: "Entende que resultado vem de ajuste, não de um plano fixo" },
                                { icon: <Scale/>, desc: "Tem uma rotina corrida e precisa de algo que funcione na prática " },
                                { icon: <Paperclip />, desc: "Cansou de dietas restritivas e abordagens que não se sustentam no longo prazo" },
                                ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center gap-4">
                                    <span className="text-4xl text-emerald-700">{item.icon}</span>
                                    <p className="text-black/80 text-sm sm:text-base leading-relaxed max-w-xs">{item.desc}</p>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="max-w-5xl mx-auto text-center">

                            <p className="text-emerald-700 text-sm uppercase tracking-widest mb-2">EVOLUIR</p>
                            <h2 className="text-black text-3xl md:text-4xl font-bold mb-16">
                                Como funciona o método EVOLUIR
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 justify-center">
                            {[
                                { num: "01", title: "Diagnóstico real", desc: "Antes de qualquer dieta, eu preciso entender sua rotina, treino, dificuldades e histórico Nada de plano genérico" },
                                { num: "02", title: "Estratégia personalizada", desc: "Montamos uma dieta ajustada à sua realidade Sem complicação, sem alimento impossível" },
                                { num: "03", title: "Execução com suporte", desc: "Você não fica sozinho tentando acertar Eu acompanho de perto durante o processo" },
                                { num: "04", title: "Ajustes semanais", desc: "Seu corpo responde e a gente acompanha É aqui que a maioria das pessoas erra quando tenta fazer sozinho" },
                                { num: "05", title: "Evolução contínua", desc: "O foco não é só começar bem É continuar evoluindo semana após semana" },
                            ].map((step, index, arr) => (
                                <div key={step.num} className="relative flex flex-col items-center text-center">

                                {/* Número */}
                                    <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-900 mb-5">
                                        {step.num}
                                    </div>

                                {/* Card */}
                                    <div className="bg-emerald-900 border border-slate-700 hover:border-emerald-500 transition-colors rounded-2xl p-6 flex flex-col gap-3 h-full">
                                        <h3 className="text-white font-bold text-base border-b border-green-400 pb-2">{step.title}</h3>
                                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                                    </div>

                                </div>
                            ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-in slide-from-bottom duration-700 delay-300">
                                <a href="#planos">
                                    <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-green-400 to-emerald-600 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer">
                                        <span>QUERO MEU PLANEJAMENTO</span>
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/> 
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}