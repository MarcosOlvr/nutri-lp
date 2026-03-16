import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const depoimentos = [
  "/depoimentos/depoimento1.jpeg",
  "/depoimentos/depoimento2.jpeg",
  "/depoimentos/depoimento3.jpeg",
  "/depoimentos/depoimento4.jpeg",
  "/depoimentos/depoimento5.jpeg",
];

export default function Depoimentos() {
  const [atual, setAtual] = useState(0);

  const anterior = () => setAtual((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
  const proximo = () => setAtual((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
  const getIndex = (offset) => (atual + offset + depoimentos.length) % depoimentos.length;

  useEffect(() => {
    const intervalo = setInterval(proximo, 7000);
    return () => clearInterval(intervalo);
  }, [atual]);

  return (
    <section id="testimonials" className="py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <div className="text-center mb-10">
          <p className="text-emerald-600 text-sm uppercase tracking-widest mb-2">Com dúvidas?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            O que meus pacientes falam sobre mim?
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4">

          {/* Imagem anterior - apenas desktop */}
          <div className="hidden md:block w-54 flex-shrink-0 opacity-40 cursor-pointer hover:opacity-60 transition-opacity" onClick={anterior}>
            <img
              src={depoimentos[getIndex(-1)]}
              alt="anterior"
              className="w-full max-h-64 object-contain rounded-xl"
            />
          </div>

          {/* Botão anterior - apenas mobile */}
          <button onClick={anterior} className="md:hidden w-10 h-10 rounded-full border border-slate-600 text-white hover:bg-slate-700 transition-colors flex justify-center items-center flex-shrink-0">
            <ChevronLeft />
          </button>

          {/* Imagem atual */}
          <div className="flex-1 rounded-2xl p-4 shadow-lg h-[400px] flex items-center justify-center">
            <img
              key={atual}
              src={depoimentos[atual]}
              alt={`Depoimento ${atual + 1}`}
              className="w-full h-full object-contain rounded-xl animate-fadeIn"
            />
          </div>

          {/* Imagem próxima - apenas desktop */}
          <div className="hidden md:block w-54 flex-shrink-0 opacity-40 cursor-pointer hover:opacity-60 transition-opacity" onClick={proximo}>
            <img
              src={depoimentos[getIndex(1)]}
              alt="próxima"
              className="w-full max-h-64 object-contain rounded-2xl"
            />
          </div>

          {/* Botão próximo - apenas mobile */}
          <button onClick={proximo} className="md:hidden w-10 h-10 rounded-full border border-slate-600 text-white hover:bg-slate-700 transition-colors flex justify-center items-center flex-shrink-0">
            <ChevronRight />
          </button>

        </div>

        {/* Dots + botões desktop */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={anterior} className="hidden md:flex w-10 h-10 rounded-full border border-slate-600 text-white hover:bg-slate-700 transition-colors justify-center items-center">
            <ChevronLeft />
          </button>
          <div className="flex gap-2">
            {depoimentos.map((_, i) => (
              <button key={i} onClick={() => setAtual(i)} className={`w-2 h-2 rounded-full transition-colors ${i === atual ? "bg-emerald-600" : "bg-slate-600"}`} />
            ))}
          </div>
          <button onClick={proximo} className="hidden md:flex w-10 h-10 rounded-full border border-slate-600 text-white hover:bg-slate-700 transition-colors justify-center items-center">
            <ChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}