import { Hash, ArrowRight } from "lucide-react";

export default function Sobre() {
    return ( 
    <section id="sobre" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Como funciona o</span>
                    <br />
                    <span  className="bg-gradient-to-b from-green-400 to-emerald-600 bg-clip-text text-transparent">Acompanhamento?</span>
                </h2>
            </div>

            <div className="space-y-16 sm:space-y-20 lg:space-y-32"> 
                <div className="flex mb-4">
                    <div className="pb-10 mx-auto text-center rounded">
                        <section className="px-8 text-center pb-16 sm:pb-20">
                            <p className="text-white text-sm sm:text-base uppercase tracking-widest mb-5 sm:mb-7 border-b-2 border-emerald-600">Para quem é?</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                                {[
                                { icon: "🎯", desc: "Busca faturar pelo menos R$10k/mês com ética e sem depender de likes." },
                                { icon: "🚀", desc: "Quer acelerar a sua carreira com um método prático e estratégico, direto ao ponto." },
                                { icon: "🧠", desc: "É ótimo no que faz, mas não sabe como vender seu serviço para atrair pacientes." },
                                { icon: "📈", desc: "Prioriza um serviço de alta qualidade e quer um marketing que reflita o seu posicionamento." },
                                { icon: "⚖️", desc: "Deseja ter mais liberdade e qualidade de vida, sem se tornar escravo do próprio negócio." },
                                { icon: "🔗", desc: "Cansou de fórmulas mágicas e busca um crescimento real e sustentável para sua carreira." },
                                ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center gap-4">
                                    <span className="text-4xl text-green-500">{item.icon}</span>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xs">{item.desc}</p>
                                </div>
                                ))}
                            </div>
                        </section>
                        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-12">Meu processo tem as seguintes etapas</h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
                            {[
                            { num: "01", title: "Avaliação", desc: "Análise completa do seu estado atual, histórico, objetivos, rotina, hábitos e desafios." },
                            { num: "02", title: "Plano Personalizado", desc: "Criação de um plano individual de nutrição e treino, desenvolvido especificamente para você." },
                            { num: "03", title: "Orientação", desc: "Orientação contínua durante a execução do plano, com acompanhamento próximo." },
                            { num: "04", title: "Monitoramento e Ajustes", desc: "Monitoramento dos resultados e ajustes estratégicos no treino e na dieta." },
                            ].map((step) => (
                            <div key={step.num} className="flex flex-col items-center text-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                                {step.num}
                                </div>
                                <h3 className="text-white font-bold text-base sm:text-lg border-b-2 border-emerald-600">{step.title}</h3>
                                <p className="text-gray-400 text-sm sm:text-base">{step.desc}</p>
                            </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-in slide-from-bottom duration-700 delay-300">
                            <a href="#planos">
                                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-green-400 to-emerald-600 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                                    <span>QUERO MEU PLANEJAMENTO</span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/> 
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="py-8 sm:py-14 px-8">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        
                        <div className="w-70 h-70 sm:w-90 sm:h-90 rounded-2xl bg-slate-700 flex-shrink-0 flex items-center justify-center">
                            <span className="text-green-400">foto aqui</span>
                        </div>

                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">Quem é seu profissional?</span>
                            <h2 className="text-white text-3xl font-bold">Dyego Augusto
                                <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 mx-5 mt-5 sm:mt-0 bg-green-500/10 border border-green-500/20 rounded-full">
                                    <Hash className="w-4 h-4 text-green-400" />
                                    <span className="text-xs sm:text-sm text-green-300">CRN 0000000</span>
                                </div>
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}