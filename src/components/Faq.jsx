import { useState } from "react";

const faqs = [
  { question: "Como funciona o atendimento?", answer: "O atendimento pode ser presencial ou online, de acordo com sua preferência. Após o agendamento, realizamos uma avaliação completa para montar seu plano personalizado." },
  { question: "Quanto tempo dura a consulta?", answer: "A primeira consulta dura aproximadamente 1 hora. As consultas de retorno têm duração média de 30 a 45 minutos." },
  { question: "Com que frequência devo fazer retorno?", answer: "O retorno é recomendado a cada 30 dias para acompanhar sua evolução e ajustar o plano conforme necessário." },
  { question: "O plano alimentar é personalizado?", answer: "Sim! O plano é 100% individualizado, levando em conta seus objetivos, rotina, preferências alimentares e histórico de saúde." },
  { question: "Como faço para agendar uma consulta?", answer: "Você pode agendar pelo WhatsApp ou pelas redes sociais. Entre em contato e responderemos o mais rápido possível." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="FAQ" className="py-16 px-6 bg-white/90 text-black">
      <div className="max-w-3xl mx-auto">
        <p className="text-emerald-700 text-sm uppercase tracking-widest text-center mb-2">FAQ</p>
        <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-black font-medium hover:bg-emerald-800/10 transition-colors"
              >
                <span className="text-base sm:text-lg">{faq.question}</span>
                <span className="text-emerald-700 text-xl ml-4">{open === index ? "−" : "+"}</span>
              </button>

              {open === index && (
                <div className="px-6 py-4 text-black text-sm sm:text-base leading-relaxed border-t border-slate-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}