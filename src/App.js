import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Product from "./components/products/Product";
import Slider from "./components/slider/Slider";
import Testimonials from "./components/testimonials/Testimonials";
import Visual from "./components/visual/Visual";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Slider />
        <Visual />
        <Product />
        <Testimonials />
        <Footer />
    </div>
  );
}

export default App;
