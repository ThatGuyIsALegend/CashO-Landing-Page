import Hero from "./components/hero";
import Navbar from "./components/navbar";
import "./App.css";
import Stats from "./components/stats";
import Features from "./components/features";
import Assistant from "./components/assistant";
import Screenshots from "./components/screenshots";
import Testimonials from "./components/testimonials";
import Download from "./components/download";
import FAQ from "./components/faq";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Assistant />
      <Screenshots />
      <Testimonials />
      <Download />
      <FAQ />
    </div>
  ) 
}

export default App
