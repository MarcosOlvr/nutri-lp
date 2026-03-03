const plans = [
    {
        name: "Mensal",
        price: "199,99", 
        desc: "Acompanhamento mensal feito para organizar coisas e tal e tal e tal",
        features: [
            "Plano alimentar personalizado",
            "Acompanhamento nutricional", 
            "Cálculo de macronutrientes ajustados ao seu objetivo",
            "Sugestões de receitas práticas",
            "Orientação sobre suplementação, quando necessário",
            "Lista de compras organizada para facilitar o dia a dia"
        ], 
        maisRecomendado: false,
    },
    {
        name: "Semestral",
        price: "960", 
        desc: "Acompanhamento mensal feito para organizar coisas e tal e tal e tal, por uma média de R$160 por mês",
        features: [
            "Plano alimentar personalizado",
            "Acompanhamento nutricional", 
            "Cálculo de macronutrientes ajustados ao seu objetivo",
            "Sugestões de receitas práticas",
            "Orientação sobre suplementação, quando necessário",
            "Lista de compras organizada para facilitar o dia a dia"
        ], 
        maisRecomendado: true,
    },
    {
        name: "Trimestral",
        price: "540", 
        desc: "Acompanhamento trimestral feito para organizar coisas e tal e tal e tal, por uma média de R$180 por mês",
        features: [
            "Plano alimentar personalizado",
            "Acompanhamento nutricional", 
            "Cálculo de macronutrientes ajustados ao seu objetivo",
            "Sugestões de receitas práticas",
            "Orientação sobre suplementação, quando necessário",
            "Lista de compras organizada para facilitar o dia a dia"
        ], 
        maisRecomendado: false,
    }
]
export default function Preco() {
    return ( 
        <section id="preco" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Preços que cabem</span>
                        <br />
                        <span  className="bg-gradient-to-b from-green-400 to-green-600 bg-clip-text text-transparent">No seu Bolso</span>
                    </h2>
                    <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">Escolha o plano perfeito para sua necessidade. Todos os planos tem os mesmos benefícios!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
                    {plans.map((plan, key) => (
                        <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${
                            plan.maisRecomendado 
                            ? "border-green-500 shadow-2xl shadow-green-500/20 lg:scale-105" 
                            : "border-slate-800 hover:border-slate-700"}`}></div>
                    ))}
                </div>
            </div>
        </section>
    );
}