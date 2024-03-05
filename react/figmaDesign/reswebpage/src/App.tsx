import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Quality from "./components/Quality";
// @ts-ignore
import herobg from "./assets/photos/hero.png";
import ContactUs from "./components/ContactUs";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Process from "./components/Process";
import Refferance from "./components/Refferance";
function App() {
  return (
    <div className="w-screen h-screen font-body">
      <div className="h-[754px]">
        <img
          src={herobg}
          alt=""
          className="absolute left-0 -z-10 w-full h-[754px] object-cover overflow-hidden"
        />
        <Navbar />
        <Hero />
      </div>
      <Quality />
      <Process />
      <Discover />
      <Refferance />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
