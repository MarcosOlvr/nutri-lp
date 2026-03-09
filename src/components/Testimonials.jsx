import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const depoimentos = [
  "/depoimentos/depoimento1.png",
  "/depoimentos/depoimento2.png",
  "/depoimentos/depoimento3.png",
];

export default function Depoimentos() {
  const [atual, setAtual] = useState(0);

  const anterior = () => setAtual((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
  const proximo = () => setAtual((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
  
  useEffect(() => {
  const intervalo = setInterval(() => {
    setAtual((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
  }, 5000); // troca a cada 3 segundos

  return () => clearInterval(intervalo); // limpa ao desmontar
}, []);

  return (
    <section id="testimonials" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-center mb-10">
            <p className="text-emerald-600 text-sm uppercase tracking-widest text-center mb-2">Com dúvidas?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                O que meus pacientes falam sobre mim?
            </h2>
            <p className="text-gray-400 text-base text-xl sm:text-lg max-2-2xl mx-auto"></p>
        </div>


        <div className="bg-slate-900 rounded-2xl p-4 shadow-lg">
          <img
            src={depoimentos[atual]}
            alt={`Depoimento ${atual + 1}`}
            className="w-full max-h-[500px] object-contain rounded-xl"
          />
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={anterior} className="w-10 h-10 rounded-full border border-slate-600 text-white hover:bg-slate-700 transition-colors flex justify-center items-center">
            <ChevronLeft />
          </button>
          <div className="flex gap-2">
            {depoimentos.map((_, i) => (
              <button key={i} onClick={() => setAtual(i)} className={`w-2 h-2 rounded-full transition-colors ${i === atual ? "bg-emerald-600" : "bg-slate-600"}`} />
            ))}
          </div>
          <button onClick={proximo} className="w-10 h-10 rounded-full border border-slate-600 text-white hover:bg-slate-700 transition-colors flex justify-center items-center">
            <ChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}