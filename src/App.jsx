import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Preco from "./components/Preco";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Sobre from "./components/Sobre";

function App() {
  return (
  <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

    <Navbar />
    <Hero />
    <Sobre />
    <Preco />
    <Testimonials />
    <Footer />
  </div>
  );
}

export default App
