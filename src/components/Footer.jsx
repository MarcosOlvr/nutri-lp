import { FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
    <section className="bg-silver">
        <footer className="p-8">
            <div className="flex flex-col items-center gap-4 lg:hidden">
                <div className="flex gap-4">
                    <FaInstagram className="text-preto hover:text-black/90 w-5 h-5 cursor-pointer" />
                    <FaEnvelope className="text-preto hover:text-black/90 w-5 h-5 cursor-pointer" />
                </div>
                <p className="text-preto text-sm text-center">© Copyright 2026.<br /> Todos os direitos reservados</p>
            </div>

            <div className="hidden lg:grid max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3">
                {/* Logo e info */}
                <div className="flex flex-col gap-4 text-center">
                    <div className="flex justify-center"> 
                        <img className="w-6 h-6 sm:w-15 sm:h-20" src="logo.png"></img>
                    </div>
                    <p className="text-preto text-sm font-bold">CRN 6 49530</p>
                    <p className="text-d-grey text-sm">© Copyright 2026.<br />Todos os direitos reservados</p>   
                </div>

                {/* Redes sociais */}
                <div className="flex flex-col gap-4 border-x border-green px-2 text-center">
                    <h4 className="text-preto font-bold text-lg">Entre em contato</h4>
                    {[
                        { icon: <FaInstagram />, label: "/nutridyego"},
                        { icon: <FaEnvelope />, label: "dyegoaugustonutri@gmail.com"},
                    ].map((social, index) => (
                        <div className="flex justify-center">
                            <p key={index} className="flex items-center text-preto hover:text-black/80 transition-colors text-base border-b border-green">
                                <span className="w-8 h-8 flex items-center justify-center text-xl">
                                    {social.icon}
                                </span>
                                {social.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Localização */}
                <div className="flex flex-col gap-4 text-center">
                    <h4 className="text-preto font-bold text-lg">Localização</h4>
                    <p className="text-d-grey text-base">Atendimento online para todo o Brasil</p>
                </div>
            </div>
        </footer>
    </section>
    );
}