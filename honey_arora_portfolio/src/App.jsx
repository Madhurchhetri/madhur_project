import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Next sections will come here */}
        <section id="services" style={{ minHeight: "100vh", background: "#080408" }} />
        <section id="references" style={{ minHeight: "100vh", background: "#39001f" }} />
        <section id="about" style={{ minHeight: "100vh", background: "#080408" }} />
        <section id="resources" style={{ minHeight: "100vh", background: "#39001f" }} />
        <section id="contact" style={{ minHeight: "100vh", background: "#080408" }} />
      </main>
    </>
  );
}

export default App;