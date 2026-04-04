import { useState } from "react";

const faqs = [
  { question: "Funciona online mesmo?", answer: " Sim. Hoje, o acompanhamento online permite mais contato e ajustes do que o modelo tradicional." },
  { question: "Vou receber uma dieta muito restritiva?", answer: "Não. A ideia é criar algo que você consiga seguir no dia a dia." },
  { question: "E se eu não conseguir seguir a dieta?", answer: "É exatamente por isso que existe o acompanhamento. A gente ajusta, adapta e encontra o que funciona pra você." },
  { question: "Em quanto tempo vejo resultado?", answer: "Depende do seu ponto de partida e consistência. Mas com estratégia certa, você começa a ver evolução nas primeiras semanas." },
  { question: "Preciso treinar?", answer: "Se seu objetivo envolve estética ou performance, sim. Mas tudo é ajustado à sua realidade." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 px-6 bg-white/85">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-black text-4xl font-bold mb-12 text-center sm:text-start">
          Perguntas frequentes
        </h2>

        <div className="flex flex-col md:flex-row gap-10">

          {/* Accordion */}
          <div className="flex flex-col gap-3 flex-1">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-emerald-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className={`w-full flex justify-between items-center px-6 py-4 text-left font-medium transition-colors ${open === index ? "text-black" : "text-black"} hover:bg-white/40`}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl ml-4">{open === index ? "▲" : "▼"}</span>
                </button>

                {open === index && (
                  <div className="px-6 py-4 text-black/90 text-base leading-relaxed border-t border-emerald-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Lado direito */}
          <div className="md:w-80 flex flex-col gap-6 text-center md:text-start">
            <div>
              <h3 className="text-black text-3xl font-bold leading-tight">Ficou com alguma dúvida?</h3>
              <p className="text-black/80 text-sm mt-3">
                Confira as respostas para as perguntas frequentes ou entre em contato comigo:
              </p>
            </div>

            
              <a href="https://wa.me/00000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-emerald-600 hover:bg-emerald-500 border border-emerald-700 rounded-xl p-5 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-white w-10 h-10 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.827L.057 23.428a.75.75 0 00.915.915l5.601-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.184-1.433l-.372-.22-3.862 1.013 1.013-3.696-.242-.383A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              <div className="text-start">
                <p className="text-white font-bold text-sm uppercase tracking-wide">Atendimento por WhatsApp</p>
                <p className="text-white/90 text-sm">Toque aqui para tirar suas dúvidas</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}