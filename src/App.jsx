import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Preco from "./components/Preco";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Profissional from "./components/Profissional";

function App() {
  return (
  <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

    <Navbar />
    <Hero />
    <Sobre />
    <Profissional />
    <Testimonials />
    <Preco />
    <FAQ />
    <Cta/>
    <Footer />
  </div>
  );
}

export default App
