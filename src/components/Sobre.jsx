export default function Sobre() {
    return ( 
    <section id="sobre" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Como funciona o</span>
                    <br />
                    <span  className="bg-gradient-to-b from-green-400 to-green-600 bg-clip-text text-transparent">Acompanhamento?</span>
                </h2>
            </div>

            <div className="space-y-16 sm:space-y-20 lg:space-y-32"> 
                <div className="flex mb-4">
                    <div className="pb-10 mx-auto text-center rounded">
                        <h2 className="text-white text-3xl font-semibold mb-12">Meu processo tem as seguintes etapas</h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            {[
                            { num: "01", title: "Avaliação", desc: "Análise completa do seu estado atual, histórico, objetivos, rotina, hábitos e desafios." },
                            { num: "02", title: "Plano Personalizado", desc: "Criação de um plano individual de nutrição e treino, desenvolvido especificamente para você." },
                            { num: "03", title: "Implementação & Suporte", desc: "Orientação contínua durante a execução do plano, com acompanhamento próximo." },
                            { num: "04", title: "Ajuste & Otimização", desc: "Monitoramento dos resultados e ajustes estratégicos no treino e na dieta." },
                            ].map((step) => (
                            <div key={step.num} className="flex flex-col items-center text-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">
                                {step.num}
                                </div>
                                <h3 className="text-white font-bold">{step.title}</h3>
                                <p className="text-slate-400 text-sm">{step.desc}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}