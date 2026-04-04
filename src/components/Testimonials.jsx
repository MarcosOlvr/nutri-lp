import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

export default function Depoimentos() {
  const testimonials = [
    {
      name: 'R.C.D.S.F',
      date: '13/03/2026',
      text: 'Minha experiência tem sido positiva. Tenho me educado para manter o foco, mesmo que às vezes seja um pouco difícil manter a disciplina todos os dias.'
    },
    {
      name: 'M.A.S',
      date: '20/03/2026',
      text: 'Consegui resultados incríveis em pouco tempo. O acompanhamento semanal fez toda a diferença para manter o foco e ajustar o que não estava funcionando.'
    },
    {
      name: 'L.P.R',
      date: '27/03/2026',
      text: 'Finalmente encontrei um nutricionista que entende minha rotina corrida. As estratégias são práticas e os resultados apareceram rápido!'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/bg/white.jpg')"}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-emerald-600 mb-2 uppercase tracking-wider text-sm">COM DÚVIDAS?</p>
          <h2 className="text-4xl md:text-5xl mb-4 text-black">
            O que acontece quando você para de tentar sozinho
          </h2>
          <p className="text-gray-600 text-lg">
            Resultados <span className="text-emerald-600">reais</span> de quem começou a seguir uma estratégia com acompanhamento
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <Quote className="absolute top-4 left-4 w-12 h-12 text-emerald-200" />
            
            <div className="mb-6">
              <h3 className="text-xl mb-2">Feedback Aberto</h3>
              <p className="text-gray-600 mb-4">
                O que você gostaria de compartilhar sobre sua experiência?
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 mb-6 min-h-[180px] flex items-center">
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            <div className="text-right">
              <p className="text-gray-900">
                <strong>{testimonials[currentIndex].name}</strong>
              </p>
              <p className="text-gray-500 text-sm">{testimonials[currentIndex].date}</p>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-emerald-700" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-emerald-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
