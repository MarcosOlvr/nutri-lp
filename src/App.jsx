import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Preco from "./components/Preco";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
  <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

    <Navbar />
    <Hero />
    <Sobre />
    <Preco />
    <Testimonials />
    <FAQ />
    <Footer />
  </div>
  );
}

export default App
