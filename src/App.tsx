import Hero from "./components/hero";
import Navbar from "./components/navbar";
import "./App.css";
import Stats from "./components/stats";
import Features from "./components/features";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
    </div>
  ) 
}

export default App
