import "./App.css";
import Hero from "./Pages/Hero/Hero";
import Programs from "./Pages/Programs/Programs";
import WhyUs from "./Pages/Why-us/WhyUs";
import Plans from "./Pages/Plans/Plans";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Join from "./Pages/Join/Join";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <WhyUs />
      <Plans />
      <Testimonials />
      <Join />
      <Footer/>
    </div>
  );
}

export default App;
