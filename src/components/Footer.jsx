import { FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
    <section>
        <footer className="p-8">
            <div className="flex flex-col items-center gap-4 md:hidden">
                <div className="flex gap-4">
                    <FaInstagram className="text-slate-400 hover:text-white w-5 h-5 cursor-pointer" />
                    <FaEnvelope className="text-slate-400 hover:text-white w-5 h-5 cursor-pointer" />
                </div>
                <p className="text-slate-400 text-sm text-center">© Copyright 2026.<br /> Todos os direitos reservados</p>
            </div>

            <div className="hidden md:grid max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3">
                {/* Logo e info */}
                <div className="flex flex-col gap-4 text-start">
                    <div className=""> 
                        <img className="w-6 h-6 sm:w-25 sm:h-25" src="/logo.png"></img>
                    </div>
                    <p className="text-white text-sm font-bold">CRN 6 49530</p>
                    <p className="text-slate-400 text-sm">© Copyright 2026.<br />Todos os direitos reservados</p>   
                </div>

                {/* Redes sociais */}
                <div className="flex flex-col gap-4 border-r border-l border-slate-700 px-2 text-center">
                    <h4 className="text-white font-bold text-lg">Entre em contato</h4>
                    {[
                        { icon: <FaInstagram />, label: "/nutridyego"},
                        { icon: <FaEnvelope />, label: "dyegoaugustonutri@gmail.com"},
                    ].map((social, index) => (
                        <div className="flex justify-center">
                            <p key={index} className="flex items-center text-slate-400 hover:text-white transition-colors text-base">
                                <span className="w-8 h-8 flex items-center justify-center text-xl">
                                    {social.icon}
                                </span>
                                {social.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Localização */}
                <div className="flex flex-col gap-4 items-center">
                    <h4 className="text-white font-bold text-lg">Localização</h4>
                    <p className="text-slate-400 text-base">Atendimento online para todo o Brasil</p>
                </div>

            </div>
        </footer>
    </section>
    );
}