import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
    <section>
        <footer className="p-8 border-t border-slate-700">
            <div className="flex flex-col items-center gap-4 md:hidden">
                <div className="flex gap-4">
                    <FaInstagram className="text-slate-400 hover:text-white w-5 h-5 cursor-pointer" />
                    <FaLinkedin className="text-slate-400 hover:text-white w-5 h-5 cursor-pointer" />
                </div>
                <p className="text-slate-400 text-sm text-center">© Copyright 2026.<br /> Todos os direitos reservados</p>
            </div>

            <div className="hidden md:grid max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center">
                {/* Logo e info */}
                <div className="flex flex-col gap-4">
                <div className="flex justify-center"> 
                    <img className="w-6 h-6 sm:w-25 sm:h-25" src="/logo.png"></img>
                </div>
                    <p className="text-white text-sm"><span className="font-bold">CRN 3</span> 00000</p>
                    <p className="text-slate-400 text-sm">© Copyright 2026.<br />Todos os direitos reservados</p>   
                </div>

                {/* Redes sociais */}
                <div className="flex flex-col gap-4 border-r border-l border-slate-700 px-2">
                    <h4 className="text-white font-bold text-lg">Acompanhe nas redes sociais</h4>
                    {[
                        { icon: <FaInstagram />, label: "/nutridyego", href: "#" },
                        { icon: <FaLinkedin />, label: "/seulinkedin", href: "#" },
                    ].map((social, index) => (
                        <div className="flex justify-center">
                            <a key={index} href={social.href} className="flex items-center text-slate-400 hover:text-white transition-colors text-base">
                                <span className="w-8 h-8 flex items-center justify-center text-xl">
                                    {social.icon}
                                </span>
                                {social.label}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Localização */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold text-lg">Localização</h4>
                    <p className="text-slate-400 text-base">Consultas Online</p>
                </div>

            </div>
        </footer>
    </section>
    );
}