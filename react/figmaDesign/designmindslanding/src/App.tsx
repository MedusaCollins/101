import About from "./components/About";
import CasedStudies from "./components/CasedStudies";
import FeatureClient from "./components/FeatureClient";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WorkedWith from "./components/WorkedWith";

function App() {
  return (
    <div className="flex flex-col font-body bg-ff">
      <div className="flex flex-col justify-center gap-12 p-5 px-8 bg-f0">
        <Navbar />
        <Hero />
        <About />
        <FeatureClient />
        <WorkedWith />
      </div>
      <CasedStudies />
      <Footer />
    </div>
  );
}
  
export default App;
