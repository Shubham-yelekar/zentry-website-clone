import "./App.css";
import { Hero } from "./components";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      <Hero />
      <section className="min-h-screen bg-slate-500"></section>
    </main>
  );
}

export default App;
