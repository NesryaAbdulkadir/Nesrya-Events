import toast, { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Band from "./components/Band";
import ServicesSection from "./components/ServicesSection";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="bg-bgColor">
      <NavBar />
      <HeroSection />
      <Band />
      <ServicesSection />
      <Portfolio />

      <Testimonials />
      <AboutUs />
      <ContactUs />

      <Footer />
    </div>
  );
}

export default App;
