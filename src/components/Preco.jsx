import { Check, Star } from "lucide-react";

const plans = [
    {
        name: "Mensal - Início da Organização ",
        price: "200", 
        pricePerMonth: "",
        desc: "Para quem quer parar de tentar sozinho e começar com direção. Aqui você começa a organizar sua alimentação e identificar o que está te travando.",
        features: [
            "Consulta completa para entender sua rotina, treino e objetivo",
            "Plano alimentar 100% personalizado e adaptado ao seu dia a dia", 
            "Acompanhamento semanal com análise da sua evolução",
            "Feedbacks com orientações práticas e ajustes iniciais",
            "Monitoramento de peso, adesão e dificuldades",
            "Suporte direto via WhatsApp"
        ], 
        maisRecomendado: false,
    },
    {
        name: "Trimestral - Evolução Consistente",
        price: "540", 
        pricePerMonth: "R$180",
        desc: "Para quem quer sair da estagnação e ter resultado de verdade. Aqui você deixa de “testar dieta” e começa a seguir uma estratégia de fato.",
        features: [
            "Consulta inicial completa e avaliação detalhada",
            "Plano alimentar personalizado e ajustado à sua realidade", 
            "Acompanhamento semanal com feedbacks estratégicos",
            "Ajustes constantes conforme seu corpo responde",
            "Reavaliação na 6ª semana para corrigir rota e acelerar resultado",
            "Monitoramento contínuo da evolução e dificuldades",
            "Suporte direto via WhatsApp durante todo o processo"
        ], 
        maisRecomendado: true,
    },
    {
        name: "Semestral - Transformação Real",
        price: "960", 
        pricePerMonth: "R$160",
        desc: "Para quem quer mudar o físico e consolidar resultado. Aqui o foco não é só evoluir - é transformar e manter. Mais tempo = resultado mais sólido.",
        features: [
            "Consulta inicial completa e avaliação detalhada",
            "Plano alimentar totalmente personalizado", 
            "Acompanhamento semanal com ajustes contínuos",
            "Reavaliações estratégicas ao longo do processo",
            "Adaptação da dieta conforme evolução e fases do corpo",
            "Construção de hábitos sustentáveis",
            "Suporte direto via WhatsApp durante todo o acompanhamento"
        ], 
        maisRecomendado: false,
    },
]
export default function Preco() {
    return ( 
        <section id="planos" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">Escolha como você quer</span>
                        <br />
                        <span  className="bg-gradient-to-b from-yellow-400 to-yellow-800 bg-clip-text text-transparent">EVOLUIR</span>
                    </h2>
                    <p className="text-white/90 text-base text-xl sm:text-lg max-w-2xl mx-auto">Resultados consistentes vêm de acompanhamento e não de tentativa isolada.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
                    {plans.map((plan, key) => (
                        <div key={key} className={`relative bg-slate-950 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${
                            plan.maisRecomendado 
                            ? "border-emerald-500 shadow-2xl shadow-green-500/20 lg:scale-105" 
                            : "border-slate-700 hover:border-white"
                            }`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg" />
                                {plan.maisRecomendado && (
                                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                        <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white"/>
                                        <span>Mais Recomendado</span>
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-6 sm:mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4">{plan.desc}</p>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">R${plan.price}</span>
                                </div>
                                <span className="text-white/90 ml-1 sm:ml-2 text-sm sm:text-base">{plan.pricePerMonth}/mês</span>
                            </div>

                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                                {plan.features.map((feature, featureKey) => (
                                  <li key={featureKey} className="flex items-start space-x-2 sm:space-x-3">
                                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-300/20 flex items-center justify-center mt-0.5">
                                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-400"/>
                                    </div>
                                    <span className="text-white text-sm">{feature}</span>
                                  </li>
                                ))}
                            </ul>

                            <button className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base ${
                               plan.maisRecomendado
                               ? "bg-gradient-to-b from-emerald-400 to-emerald-600"
                               : "bg-white/5 border border-white/10 hover:bg-white/10" 
                            }`}>
                                COMEÇAR AGORA
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}