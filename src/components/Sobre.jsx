import { ArrowRight, BicepsFlexed, Dumbbell, OctagonX, AlarmClockOff, ListX, SlidersHorizontal, SquareChartGantt, TrendingUp, CalendarCog, HandHelping, FilePenLine } from "lucide-react";

export default function Sobre() {
    return ( 
    <section id="sobre" className="py-12 px-10 sm:px-6 lg:px-8 relative bg-silver">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    <span className="text-preto">Meu acompanhamento</span>
                    <br />
                    <span  className="text-green">é para você que:</span>
                </h2>
            </div>

            <div className="space-y-16 sm:space-y-20 lg:space-y-32 bg-emerald"> 
                <div className="flex">
                    <div className="mx-auto text-center">
                        <div className="px-8 text-center">
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
        </div>
    </section>
    );
}